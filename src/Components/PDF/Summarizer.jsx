import React, { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setExtractedText(response.data.extracted_text);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed. Check the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-12 px-4 py-8 bg-gray-900 text-white rounded-xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-white text-center">
        Upload an Image or PDF
      </h2>

      <input
        type="file"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.pdf"
        className="w-full max-w-sm p-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full max-w-sm py-2 px-4 rounded-md font-medium transition 
          ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {loading ? "Uploading..." : "Upload & Extract"}
      </button>

      {extractedText && (
        <div className="mt-6 w-full max-w-xl p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold mb-2 text-white">Extracted Text:</h3>
          <p className="text-gray-300 whitespace-pre-wrap">{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
