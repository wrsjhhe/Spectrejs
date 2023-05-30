module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
    },
    rules: {
        "no-var": 2,
        "no-unused-vars": 1,
    },
};
