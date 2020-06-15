const fs = require('fs');
const aws = require('aws-sdk');

const {
  ACCESS_KEY, SECRET_KEY, S3_ENDPOINT, BUCKET,
} = process.env;
const builtWidgetsDir = './dist/';

aws.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
});

const s3 = new aws.S3({
  endpoint: S3_ENDPOINT,
  s3ForcePathStyle: true,
});

const uploadWidget = (fileName) => {
  const fileContent = fs.readFileSync(builtWidgetsDir + fileName);
  const params = {
    ACL: 'public-read',
    Bucket: BUCKET,
    Key: fileName,
    Body: fileContent,
    ContentType: fileName.indexOf('.svg') >= 0 ? 'image/svg+xml' : undefined,
    ContentEncoding: fileName.indexOf('.gz') >= 0 ? 'gzip' : undefined,
  };

  s3.putObject(params, (err) => {
    if (err) {
      console.log('Error uploading data: ', err);
    } else {
      console.log(`Successfully uploaded data to: ${BUCKET}/${fileName}`);
    }
  });
};

if (ACCESS_KEY && SECRET_KEY && S3_ENDPOINT && BUCKET) {
  fs.readdirSync(builtWidgetsDir, { withFileTypes: true })
    .filter(file => file.isFile())
    .forEach((file) => {
      uploadWidget(file.name);
    });

  fs.readdirSync(`${builtWidgetsDir}/public/images`, { withFileTypes: true })
    .filter(file => file.isFile())
    .forEach((file) => {
      uploadWidget(`public/images/${file.name}`);
    });
} else {
  console.log('\n[Error: Missing S3 credentials or arguments!\n');
}
