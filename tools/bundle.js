import webpack from 'webpack';
import config from '../webpack.config';

export default async () => {
  return new Promise(function(resolve, reject) {
    const bundler = webpack(config);
    const run = (err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(config.stats));
        resolve();
      }
    };
    bundler.run(run);
  });
}
