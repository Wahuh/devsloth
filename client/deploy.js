var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
var AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_KEY;

const path = require('path');
var AWS = require('aws-sdk');
var s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

var fs = require('fs');

function uploadToS3(bucketName, keyPrefix, filePath, contentType) {
  // ex: /path/to/my-picture.png becomes my-picture.png
  var fileName = path.basename(filePath);
  var fileStream = fs.createReadStream(filePath);

  // If you want to save to "my-bucket/{prefix}/{filename}"
  //                    ex: "my-bucket/my-pictures-folder/my-picture.png"
  var keyName = path.join(keyPrefix, fileName);

  return new Promise(function(resolve, reject) {
    fileStream.once('error', reject);
    s3.upload(
      {
        Bucket: bucketName,
        Key: keyName,
        Body: fileStream,
        ContentType: contentType,
        ACL: 'public-read',
      },
      function(err, result) {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      },
    );
  });
}

uploadToS3('www.slothy.io', '', './dist/main.js', 'application/javascript');
uploadToS3('www.slothy.io', '', './dist/main.css', 'text/css');
uploadToS3('www.slothy.io', '', './dist/index.html', 'text/html');
