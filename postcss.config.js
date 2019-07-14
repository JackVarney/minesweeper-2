const plugins = [
  require("autoprefixer"),
  require("postcss-nested"),
  require("postcss-normalize")()
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    require("cssnano")({
      preset: "default"
    })
  );
}

module.exports = { plugins };
