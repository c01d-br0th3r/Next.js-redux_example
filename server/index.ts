import express from "express";
import next from "next";
import morgan from "morgan";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp
  .prepare()
  .then(() => {
    const expressApp = express();

    // for graceful shutdown disable keep alive
    let isDisableKeepAlive = false;
    expressApp.use((_req, res, next) => {
      if (isDisableKeepAlive) {
        res.set("Connection", "close");
      }

      next();
    });

    // morgan for access log
    expressApp.use(
      morgan(
        ":method :status :url  :res[content-length] - :response-time ms",
        {}
      )
    );

    expressApp.get("*", (req, res) => {
      return handle(req, res);
    });

    const servingApp = expressApp.listen(3000, () => {
      console.log("> Ready on http://localhost:3000");
    });

    // for graceful shutdown
    // graceful shutdown시 요청한 html은 응답하지만 나머지 .js 파일처럼 next.js가 직접 정적 서빙하는경우
    // 제대로 응답하지 한다. 하지만 production에서는 nginx를 앞단에 두고, 정적 서빙하면 해결된다.
    process.on("SIGINT", () => {
      isDisableKeepAlive = true;

      servingApp.close(() => {
        console.log("server closed");

        process.exit(0);
      });
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
