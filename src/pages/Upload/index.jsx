import Layout from "../../components/layout/Layout";
import UploadCard from "../../components/upload/UploadCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Upload() {

    const navigate = useNavigate();

    const { addModel } = useApp();

    const [selectedFile, setSelectedFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {

        if (!selectedFile) {
            toast.error("Please select a PDF");
            return;
        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("file", selectedFile);

            const response = await api.post(
                "/evaluate",
                formData
            );

            addModel(response.data);

            toast.success("AI Passport Generated!");

            navigate("/passport");

        } catch (error) {

            toast.error("Evaluation Failed");

        } finally {

            setLoading(false);

        }

    };

    

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Upload AI Model
        </h1>

        <p className="text-slate-400 mt-2">
          Submit an AI model to generate its Sovereign AI Passport.
        </p>
      </div>

      <UploadCard
    loading={loading}
    onFileChange={handleFileChange}
    onUpload={handleUpload}
/>
    </Layout>
  );
}