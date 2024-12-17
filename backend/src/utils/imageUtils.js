import axios from "axios";

export async function fetchImageData(imageUrl) {
  try {
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
      timeout: 5000, // 5 second timeout
    });

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.data || response.data.length === 0) {
      throw new Error("No data received from the server");
    }

    const buffer = Buffer.from(response.data);

    if (buffer.length === 0) {
      throw new Error("Received an empty buffer");
    }

    return buffer;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      throw new Error("Request timed out while fetching the image");
    }
    console.error("Error fetching image:", error);
    throw new Error(`Failed to fetch image data: ${error.message}`);
  }
}
