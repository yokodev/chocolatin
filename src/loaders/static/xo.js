const XO_JS = {
  'object-curly-spacing': 0,
  'import/no-unresolved': 0,
  'import/no-unassigned-import': 0,
  'comma-dangle': ['error', {
    'arrays': 'always-multiline',
    'objects': 'always-multiline',
    'imports': 'always-multiline',
    'exports': 'always-multiline',
    'functions': 'ignore',
  }],
};

const XO_BABEL = XO_JS;

module.exports = { XO_JS, XO_BABEL };
