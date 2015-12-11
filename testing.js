var downloader = require('./index');

var url = 'https://docs.google.com/presentation/d/1HsdP94BUaT2xCV3vjvu-3O9fiFfnTrNyKYRQTBUWnYY/embed';
var url2 = 'https://docs.google.com/presentation/d/16M1roku_Z49q5loX4UVwA4p2soJHE1zasfS_yccP4HA/embed';

downloader.getSVGs(url2)
.then(function (svgs) {
  console.log(svgs);
});
