const presets = [
  [
    "@babel/preset-typescript",
    {
      isTSX: true,
      jsxPragma: "h",
      allExtensions: true
    }
  ],
  [
    "@babel/preset-env",
    {
      modules: false
    }
  ]
];

const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    {
      pragma: "h"
    }
  ]
];

module.exports = { presets, plugins };
