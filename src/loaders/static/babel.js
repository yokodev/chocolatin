const BABEL_STAGE_2 = {
  presets: [
    ['es2015', { 'modules': false }],
    'stage-2',
  ],
  plugins: ['transform-runtime'],
};

const BABEL_STAGE_2_REACT = {
  presets: [
    ['es2015', { 'modules': false }],
    'stage-2',
    'react',
  ],
  plugins: ['react-hot-loader/babel', 'transform-runtime'],
};

module.exports = { BABEL_STAGE_2, BABEL_STAGE_2_REACT };
