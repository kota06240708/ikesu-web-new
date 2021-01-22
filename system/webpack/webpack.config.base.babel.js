import conf from '../config';
import glob from 'glob';

const { SRC, EXTENSION_JS, EXTENSION_TSX } = conf;

const path = 'script/index.js';

const entries = {[path]: []};

const defaultStatsOptions = {
  colors: {
    yellow: '\u001b[33m',
    magenta: '\u001b[33m',
    cyan: '\u001b[33m',
    bold: '\u001b[33m',
    green: '\u001b[33m'
  },
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: true,
  cachedAssets: true,
  reasons: true,
  source: true,
  errorDetails: true
};


glob.sync(`./${SRC}/**/index${EXTENSION_JS}`, {}).forEach(file => entries[path].push(file));

glob.sync(`./${SRC}/**/index${EXTENSION_TSX}`, {}).forEach((file, i) => {
  if (process.env.NODE_ENV !== 'production' && i === 0) {
    entries[path] = [
      ...entries[path],
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client'
    ]
  }

  entries[path].push(file);
});

export default {
  entry: entries,

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(vert|frag|glsl)$/i,
        use: [{ loader: 'raw-loader' }, { loader: 'glslify-loader' }],
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'shared/script/vendor.js',
      chunks: 'initial'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  stats: defaultStatsOptions
};
