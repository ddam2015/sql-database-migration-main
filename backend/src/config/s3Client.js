import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const awsAccessKey = process.env.AWS_ACCESS_KEY;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const awsBucketRegion = process.env.AWS_BUCKET_REGION;

const s3Client = new S3Client({
  credentials: {
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecretAccessKey,
  },
  region: awsBucketRegion,
});

export default s3Client;
