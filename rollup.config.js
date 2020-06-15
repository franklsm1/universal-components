import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import visualizer from 'rollup-plugin-visualizer';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import gzipPlugin from 'rollup-plugin-gzip';

const components = [
  'CustomAppBar',
  'FoodTable',
  'DynamicCard',
  'ReactCard',
];

const IMAGE_ROOT = process.env.NODE_ENV === 'LOCAL'
  ? 'http://localhost:9000/public/images'
  : `https://${process.env.BUCKET}.s3.amazonaws.com/public/images`;

export default components.map(name => ({
  input: `lib/components/${name}/widget.jsx`,
  output: {
    file: `dist/${name}.js`,
    sourcemap: true,
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    gzipPlugin(),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    resolve({ extensions: ['.jsx', '.js'], preferBuiltins: false }),
    commonjs(),
    filesize(),
    image(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IMAGE_ROOT,
    }),
    process.env.NODE_ENV === 'ANALYSIS' && visualizer({ filename: `analysis/${name}.stats.html` }),
  ],
}));
