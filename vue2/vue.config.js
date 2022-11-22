// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  outputDir: "vue2",
  publicPath: process.env.NODE_ENV === "production" ? "/vue2/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "7200",
  },
};
