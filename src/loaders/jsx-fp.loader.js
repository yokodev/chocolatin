'use strict';

const ext = ['.js', '.jsx'];

const wrapper = {
  xo: {
    esnext: true,
    space: true,
    envs: ['node', 'browser'],
    plugins: ['react, fp'],
    globals: ['METADATA', 'ENV', 'NODE_ENV'],
    rules: {
      'object-curly-spacing': 0,
      'import/no-unresolved': 0,
      'import/no-unassigned-import': 0,
      'fp/no-arguments': 2,
      'fp/no-class': 2,
      'fp/no-delete': 2,
      'fp/no-events': 2,
      'fp/no-get-set': 2,
      'fp/no-let': 2,
      'fp/no-loops': 2,
      'fp/no-mutating-methods': 2,
      'fp/no-mutation': [
        2,
        {
          'commonjs': true,
          'exceptions': [
            {
              property: 'propTypes',
            },
            {
              property: 'defaultProps',
            },
            {
              property: 'componentWillMount',
            },
            {
              property: 'componentDidMount',
            },
            {
              property: 'componentWillReceiveProps',
            },
            {
              property: 'shouldComponentUpdate',
            },
            {
              property: 'componentWillUpdate',
            },
            {
              property: 'componentDidUpdate',
            },
            {
              property: 'componentWillUnmount',
            }
          ]
        }
      ],
      'fp/no-nil': 2,
      'fp/no-proxy': 2,
      'fp/no-rest-parameters': 2,
      'fp/no-this': 2,
      'fp/no-throw': 2,
      'fp/no-valueof-field': 2,
      'no-var': 2,
      'import/no-named-as-default': 0,
      'react/require-extension': 'off',
    },
  },
};

const pre = {
  test: /\.(js|jsx)$/,
  loader: 'xo',
  exclude: /node_modules/,
};

const loader = {
  test: /\.(js|jsx)$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    presets: [
      ['es2015', { 'modules': false }],
      'stage-2',
      'react',
    ],
    plugins: ['react-hot-loader/babel', 'transform-runtime'],
  },
};

const post = {};

module.exports = {
  ext,
  wrapper,
  pre,
  loader,
  post,
};
