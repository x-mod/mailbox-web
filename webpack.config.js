const { lstat } = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { webpack } = require("webpack");

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    open: true,
    compress: true,
    hot: true,
    port: 8088,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../embed/webmail"),
    filename: "[name].js",
  },
  module: {
    rules: [
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // JavaScript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS, and postcss      
      { 
        test: /\.(scss|css)$/, use: [ 
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "postcss-loader" },  // to convert postcss to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ] 
      }, 
    ],     
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      // ...etc
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "mailbox webmail",
      template: path.resolve(__dirname, "./src/index.html"), // template file
      filename: "index.html", // output file
    }),
    // new CleanWebpackPlugin(),
  ],
};
