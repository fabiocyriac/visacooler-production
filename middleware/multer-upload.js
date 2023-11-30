import AWS from "aws-sdk"
import multer from "multer"
import multerS3 from "multer-s3"
import dotenv from 'dotenv';
dotenv.config();


const awsConfig = {
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  Bucket: process.env.S3_BUCKET,
  region: process.env.S3_REGION,
};

export const s3 = new AWS.S3(awsConfig);

export const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET,
      key: function (req, file, cb) {
          console.log(file);
          cb(null, `${Date.now().toString()}_${file.originalname}`)
      }
  })
})




