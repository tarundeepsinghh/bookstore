export default {
  presets: [
    "@babel/preset-env", // Standard preset for ES features
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators", // Enable decorators
      {
        decoratorsBeforeExport: true, // Decorators should come before export
      },
    ],
    "@babel/plugin-proposal-class-properties", // Support class properties
  ],
};
