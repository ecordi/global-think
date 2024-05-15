module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-flow',
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-class-properties',
    ],
    transform: {
      "\\.[jt]sx?$": "babel-jest",
      "\\.css$": "some-css-transformer",
    }
  }