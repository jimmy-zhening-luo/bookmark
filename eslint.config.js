import linted from "linted";

export default linted(
  {
    ts: {
      rules: {
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: {
              arguments: false,
            },
          },
        ],
      },
    },
  },

);
