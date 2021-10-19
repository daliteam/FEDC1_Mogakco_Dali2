module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-concentric-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'prettier/prettier': true,
  },
};
