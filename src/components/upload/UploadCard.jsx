import { UploadCloud, FileText, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import AnalysisPipeline from "./AnalysisPipeline";
import toast from "react-hot-toast";

export default function UploadCard({
  onFileChange,
  onUpload,
  loading,
}) {
  const [started, setStarted] = useState(false);
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: {
        "application/pdf": [".pdf"],
      },
      multiple: false,

      onDrop: (acceptedFiles) => {
        if (!acceptedFiles.length) return;

        const selected = acceptedFiles[0];

        setFile(selected);

        onFileChange({
          target: {
            files: [selected],
          },
        });

        toast.success("PDF Selected");
      },
    });

  const startEvaluation = async () => {
    if (!file) {
      toast.error("Please choose a PDF first.");
      return;
    }

    setStarted(true);

    await onUpload();
  };

  if (started || loading) {
    return <AnalysisPipeline />;
  }

  return (
    <div className="bg-slate-900 rounded-3xl p-12 border border-slate-800">

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-2xl p-12 transition cursor-pointer
        ${
          isDragActive
            ? "border-blue-500 bg-blue-500/10"
            : "border-slate-700 hover:border-blue-500"
        }`}
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center">

          <UploadCloud
            size={70}
            className="text-blue-500 mb-6"
          />

          <h2 className="text-3xl font-bold">
            Upload AI Documentation
          </h2>

          <p className="text-slate-400 mt-3 text-center max-w-xl">
            Drag & Drop your AI Model Card, Technical Report,
            or Documentation PDF here.
          </p>

          <button
            className="mt-8 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700"
            type="button"
          >
            Choose PDF
          </button>

          {file && (
            <div className="mt-8 flex items-center gap-3 bg-slate-800 px-5 py-3 rounded-xl">
              <FileText className="text-green-400" />
              <span>{file.name}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">

        <button
          onClick={startEvaluation}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl flex items-center gap-3 disabled:opacity-60"
        >
          {loading && (
            <Loader2
              className="animate-spin"
              size={20}
            />
          )}

          {loading
            ? "Evaluating..."
            : "Generate AI Passport"}
        </button>

      </div>

    </div>
  );
}