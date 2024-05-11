module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.jest.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  moduleDirectories: ["node_modules", __dirname],
};
