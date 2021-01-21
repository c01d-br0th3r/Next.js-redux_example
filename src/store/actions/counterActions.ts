const INCREASE = "counterActions/INCREASE" as const;
const DECREASE = "counterActions/DECREASE" as const;
const INCREASE_BY = "counterActions/INCREASE_BY" as const;

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff });

export default { increase, decrease, increaseBy };
