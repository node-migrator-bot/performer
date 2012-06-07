var config = module.exports;
config["performer"] = {
  environment: "browser",
  rootPath: "..",
  sources: ["lib/**/*.js","test/spec/helpers/*.js"],
  tests: ["test/spec/*_spec.js"],
  libs: ["test/require-config.js", "vendor/require.js"],
  extensions: [require("buster-amd")]
};
