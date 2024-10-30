export function convertBlobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("Failed to convert Blob to Base64.");
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
