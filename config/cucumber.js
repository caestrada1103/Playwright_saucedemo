let options = [
    "--require-module ts-node/register",
    "--require ./src/test/steps/*.ts",
    "--format progress",
].join(' ');

let run_features = [
    "./src/test/features/",
    options,
].join(' ');

module.exports = {
    test_runner: run_features
};