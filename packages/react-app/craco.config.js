const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
    },
  },
  jest: {
    configure: {
      roots: ["<rootDir>/src", "<rootDir>/spec"],
      testMatch: ["<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    },
  },
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
