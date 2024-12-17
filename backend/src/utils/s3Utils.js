import { PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fetchImageData } from "./imageUtils.js";

const awsBucketName = process.env.AWS_BUCKET_NAME;

function logInfo(message, data = {}) {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data);
}

function logError(message, data = {}) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, data);
}

export async function uploadImageToS3(s3, basePath, filename) {
  if (!filename || typeof filename !== "string") {
    logError("Invalid filename provided", { filename, basePath });
    return null;
  }

  try {
    const fullUrl = `${basePath}/${filename}`;
    logInfo("Attempting to fetch image from URL", { fullUrl });

    // Fetch image data with proper error handling
    let buffer;
    try {
      buffer = await fetchImageData(fullUrl);
      logInfo("Image fetched successfully", { fullUrl });
    } catch (error) {
      logError("Failed to fetch image from URL", {
        fullUrl,
        error: error.message,
      });
      return null; // Return null if the image fetch fails
    }

    const { name, ext } = path.parse(filename);
    if (!name || !ext) {
      logError("Invalid filename format", { filename });
      return null;
    }

    const fileType = ext.slice(1).toLowerCase(); // Remove the leading dot and normalize
    if (!["jpg", "jpeg", "png", "gif"].includes(fileType)) {
      logError("Unsupported file type", { filename, fileType });
      return null;
    }

    const newFilename = `${name}_${uuidv4()}${ext}`;
    logInfo("Generated new filename", {
      originalFilename: filename,
      newFilename,
    });

    const params = {
      Bucket: awsBucketName,
      Key: `coaches/${newFilename}`,
      Body: buffer,
      ContentType: `image/${fileType === "jpg" ? "jpeg" : fileType}`,
    };

    logInfo("Uploading image to S3", {
      bucket: awsBucketName,
      key: params.Key,
    });

    const command = new PutObjectCommand(params);
    const result = await s3.send(command);

    if (
      !result ||
      !result.$metadata ||
      result.$metadata.httpStatusCode !== 200
    ) {
      logError("S3 upload failed", {
        bucket: awsBucketName,
        key: params.Key,
        httpStatusCode: result?.$metadata?.httpStatusCode,
      });
      return null;
    }

    const uploadedUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
    logInfo("File uploaded successfully", { uploadedUrl });

    // return the key to save to the db
    return params.Key;
  } catch (error) {
    logError("Error in uploadImageToS3", {
      error: error.message,
      filename,
      basePath,
    });
    return null;
  }
}
