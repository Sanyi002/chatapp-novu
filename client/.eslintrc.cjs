/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

// TODO: change eslint to airbnb
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
};
