const INCREASE = "COUNTER_INCREASE" as const;
const DECREASE = "COUNTER_DECREASE" as const;

const counterIncrease = () => ({
  type: INCREASE,
});

const counterDecrease = () => ({
  type: DECREASE,
});

export default { counterIncrease, counterDecrease };
