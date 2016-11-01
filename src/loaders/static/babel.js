const generator = (presets = [], plugins = []) => ({
  presets: [
    ['es2015', { 'modules': false }],
    ...presets,
  ],
  plugins: ['transform-runtime', ...plugins],
});

const BABEL = generator();
const BABEL_STAGE_2 = generator(['stage-2']);
const BABEL_STAGE_1 = generator(['stage-1']);
const BABEL_STAGE_0 = generator(['stage-0']);

const BABEL_DECORATORS = generator([], ['transform-decorators-legacy']);
const BABEL_STAGE_2_DECORATORS = generator(['stage-2'], ['transform-decorators-legacy']);
const BABEL_STAGE_1_DECORATORS = generator(['stage-1'], ['transform-decorators-legacy']);
const BABEL_STAGE_0_DECORATORS = generator(['stage-0'], ['transform-decorators-legacy']);

const BABEL_REACT = generator(['react'], ['react-hot-loader/babel']);
const BABEL_STAGE_2_REACT = generator(['stage-2', 'react'], ['react-hot-loader/babel']);
const BABEL_STAGE_1_REACT = generator(['stage-1', 'react'], ['react-hot-loader/babel']);
const BABEL_STAGE_0_REACT = generator(['stage-0', 'react'], ['react-hot-loader/babel']);

const BABEL_REACT_DECORATORS = generator(['react'], ['transform-decorators-legacy', 'react-hot-loader/babel']);
const BABEL_STAGE_2_REACT_DECORATORS = generator(['stage-2', 'react'], ['transform-decorators-legacy', 'react-hot-loader/babel']);
const BABEL_STAGE_1_REACT_DECORATORS = generator(['stage-1', 'react'], ['transform-decorators-legacy', 'react-hot-loader/babel']);
const BABEL_STAGE_0_REACT_DECORATORS = generator(['stage-0', 'react'], ['transform-decorators-legacy', 'react-hot-loader/babel']);

module.exports = {
  generator,
  BABEL,
  BABEL_STAGE_2,
  BABEL_STAGE_1,
  BABEL_STAGE_0,
  BABEL_DECORATORS,
  BABEL_STAGE_2_DECORATORS,
  BABEL_STAGE_1_DECORATORS,
  BABEL_STAGE_0_DECORATORS,
  BABEL_REACT,
  BABEL_STAGE_2_REACT,
  BABEL_STAGE_1_REACT,
  BABEL_STAGE_0_REACT,
  BABEL_REACT_DECORATORS,
  BABEL_STAGE_2_REACT_DECORATORS,
  BABEL_STAGE_1_REACT_DECORATORS,
  BABEL_STAGE_0_REACT_DECORATORS,
};
