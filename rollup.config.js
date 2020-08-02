import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import visualizer from 'rollup-plugin-visualizer';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import gzipPlugin from 'rollup-plugin-gzip';

// Array of component names that also map to a folder name under the "lib/components/" directory
const components = [
  'CustomAppBar',
  'FoodTable',
  'DynamicCard',
  'ReactCard',
];

// IMAGE_ROOT is used to replace references in the src code with the actual url root when bundling
const IMAGE_ROOT = process.env.NODE_ENV === 'LOCAL'
  ? 'http://localhost:9000/public/images'
  : `https://${process.env.BUCKET}.s3.amazonaws.com/public/images`;

// rollup can take in multiple inputs and iterate over them with the same config to produce multiple bundles
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
    // can't gzip when running locally since storybook utilizes local files without content encoding headers
    process.env.NODE_ENV === 'LOCAL' ? null :
      gzipPlugin({
        // use the current extension instead of adding .gz, S3 will set content-encoding response header
        fileName : fileName => fileName,
      }),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    resolve({ extensions: ['.jsx', '.js'], preferBuiltins: false }),
    commonjs(),
    filesize(), // prints the bundled size of each file in the console
    image(),
    // the replace plugin is required to set React in production mode when bundling
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IMAGE_ROOT,
    }),
    // the visualizer produces bundle size analysis reports for each bundled component
    process.env.NODE_ENV === 'ANALYSIS' && visualizer({ filename: `analysis/${name}.stats.html` }),
  ],
}));
