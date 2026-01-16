import linted from "linted";

export default linted({
  ts: {
    rules: {
      "ts/no-misused-promises": 0,
      "ts/strict-void-return": 0,
    },
  },
});
