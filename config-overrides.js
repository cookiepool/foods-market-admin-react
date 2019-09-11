// 这个文件是用来给create-react-app添加额外配置的
const { override, fixBabelImports, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {  // 按需加载ant-design
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // addWebpackModuleRule({
  //   test: /\.(scss|sass)$/,
  //   use: [
  //     {
  //       loader: 'style-loader'
  //     },
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         importLoaders: 2
  //       }
  //     },
  //     {
  //       loader: 'sass-loader',
  //       options: {
  //         implementation: require('dart-sass')
  //       }
  //     },
  //     {
  //       loader: 'postcss-loader'
  //     }
  //   ]
  // })
);