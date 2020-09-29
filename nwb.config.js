module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ['./demo/src/index.tsx']
      }
      config.resolve = {
        ...config.resolve,
        extensions: ['.js', '.mjs', '.ts', '.tsx']
      }
      config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader'
      })

      return config
    }
  }
}
