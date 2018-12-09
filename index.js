module.exports = {
  extends: [
    'netflix-dea',
    'plugin:import/errors'
  ],
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'curly': [2, 'all'],
    'array-bracket-spacing': [2, 'never'],
    'semi-style': [2, 'last'],
    'no-extra-parens': [2, 'all', {
      'ignoreJSX': 'multi-line',
      'nestedBinaryExpressions': false
    }],
    'react/jsx-no-bind': [2, {
      'allowArrowFunctions': true
    }]
  }
};
