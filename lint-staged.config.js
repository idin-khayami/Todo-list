module.exports = {
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.{md,json}": ["prettier --write"],
  "**/*.css": ["stylelint --fix", "prettier --write"],
  "**/*.scss": ["stylelint --syntax scss --fix", "prettier --write"],
};
