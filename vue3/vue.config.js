// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  outputDir: "vue3",
  publicPath: process.env.NODE_ENV === "production" ? "/vue3/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: "7300",
  },
};
