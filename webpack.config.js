const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000, // Set minimum split size
      maxSize: 244 * 1024, // Set maximum chunk size to 244 KiB
      name: false, // Avoid name conflicts
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        // type: "asset/resource",
        type: "asset",
        generator: {
          filename: "images/[name].[hash][ext]",
        },
        use: [
          {
            loader: "image-webpack-loader", //Add image-webpack-loader deal with image files.
            options: {
              mozjpeg: { progressive: true, quality: 65 }, //When set to true, this enables progressive loading for JPEG images. Progressive images load in stages, gradually becoming clearer, rather than loading line by line from top to bottom.The value 65 specifies the compression quality for JPEG images, usually on a scale from 0 to 100. Lower values lead to smaller file sizes but reduced image quality.
              optipng: { enabled: false }, //Setting this to false disables OptiPNG optimization. OptiPNG is a tool for lossless compression of PNG images, which can reduce file size without significantly affecting image quality.
              pngquant: { quality: [0.65, 0.8], speed: 4 }, //The array [0.65, 0.8] sets the quality range for PNG image compression, where 0.65 is the minimum quality, and 0.8 is the maximum quality. The range allows dynamic compression, balancing reduced file size with good visual quality based on image content.
              gifsicle: { interlaced: false }, //Setting this to false means that GIF images won’t use interlaced loading. Non-interlaced GIFs load sequentially from top to bottom, whereas interlaced ones load gradually.
              webp: { quality: 75 }, //The value 75 represents the compression quality for WebP images. WebP is a modern image format that supports high-quality compression while maintaining a smaller file size. Quality values range from 0 to 100, with higher values meaning better quality and larger file size.
            },
          },
        ],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
