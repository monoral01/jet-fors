const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import "@/assets/styles/index.scss";`,
        },
      },
    },
  },
  transpileDependencies: true,
});
