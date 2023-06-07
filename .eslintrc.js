module.exports = {
    extends: [
        "plugin:@typescript-eslint/recommended"
    ],
    env: {
        node: false,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    rules: {
        "no-var": 2,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/no-empty-function": 0,
        "prefer-rest-params":0,
        "@typescript-eslint/no-empty-interface": 0,
        "no-unused-vars": 1,
        "@typescript-eslint/no-unused-vars": 1,
        "prefer-const": 1
    },
};
