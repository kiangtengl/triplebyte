const reactHotReloadPlugin = require("craco-plugin-react-hot-reload");

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          alias: {
            ...webpackConfig.resolve.alias,
            "@": paths.appSrc
          }
        }
      };
    }
  },
  plugins: [
    {
      plugin: reactHotReloadPlugin
    }
  ],
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^testUtils$": "<rootDir>/src/infrastructure/testUtils"
      },
      moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
      collectCoverage: true,
      collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
      ]
    }
  }
};
