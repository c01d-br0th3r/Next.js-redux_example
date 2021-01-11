"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const morgan_1 = __importDefault(require("morgan"));
const dev = process.env.NODE_ENV !== "production";
const nextApp = next_1.default({ dev });
const handle = nextApp.getRequestHandler();
nextApp
    .prepare()
    .then(() => {
    const expressApp = express_1.default();
    // for graceful shutdown disable keep alive
    let isDisableKeepAlive = false;
    expressApp.use((_req, res, next) => {
        if (isDisableKeepAlive) {
            res.set("Connection", "close");
        }
        next();
    });
    // morgan for access log
    expressApp.use(morgan_1.default(":method :status :url  :res[content-length] - :response-time ms", {}));
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
//# sourceMappingURL=index.js.map