module.exports = function({ eventName }) {
  return `
  {
    "name": "${eventName}",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "serve-dev": "vue-cli-service serve --mode dev",
      "serve-pro": "vue-cli-service serve --mode pro",
      "build-dev": "vue-cli-service build --mode dev_build",
      "build-pro": "vue-cli-service build --mode pro_build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": {
      "amfe-flexible": "^2.2.1",
      "babel-polyfill": "^6.26.0",
      "vue-lazyload": "^1.3.3"
    },
    "devDependencies": {
      "@babel/plugin-syntax-dynamic-import": "^7.8.3",
      "@vue/cli-plugin-babel": "~4.4.0",
      "@vue/cli-plugin-eslint": "~4.4.0",
      "@vue/cli-service": "~4.4.0",
      "babel-eslint": "^10.1.0",
      "eslint": "^6.7.2",
      "eslint-friendly-formatter": "^4.0.1",
      "eslint-loader": "^4.0.2",
      "eslint-plugin-html": "^6.0.2",
      "eslint-plugin-vue": "^6.2.2",
      "less": "^3.0.1",
      "less-loader": "^4.0.6",
      "node-sass": "^4.14.1",
      "postcss-pxtorem": "^5.1.1",
      "px2rem-loader": "^0.1.9",
      "sass-loader": "^7.3.1",
      "vue-template-compiler": "^2.6.11",
      "webpack-bundle-analyzer": "^3.8.0"
    },
    "eslintConfig": {
      "root": true,
      "env": {
        "node": true
      },
      "extends": [
        "plugin:vue/essential",
        "eslint:recommended"
      ],
      "parserOptions": {
        "parser": "babel-eslint"
      },
      "rules": {}
    },
    "browserslist": [
      "> 1%",
      "last 2 versions",
      "not dead"
    ]
  }`
}
