var downloader = require('./index');
var fs = require('fs');

var url = 'https://docs.google.com/presentation/d/1HsdP94BUaT2xCV3vjvu-3O9fiFfnTrNyKYRQTBUWnYY/embed';
var url2 = 'https://docs.google.com/presentation/d/16M1roku_Z49q5loX4UVwA4p2soJHE1zasfS_yccP4HA/embed';
var url3 = 'https://docs.google.com/presentation/d/16M1roku_Z49q5loX4UVwA4p2soJHE1zasfS_yccP4HA/embed';

downloader.getSVGs(url3, function (err, res) {
  res.forEach(function (svg, i) {
    fs.writeFile(i + '.svg', svg, function (err, result) {
      if (err) console.error(err);
      else console.log('done');
    })
  })
});
