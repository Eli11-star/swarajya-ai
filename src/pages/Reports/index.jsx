import Layout from "../../components/layout/Layout";
import ReportPreview from "../../components/reports/ReportPreview";
import DownloadReport from "../../components/reports/DownloadReport";

export default function Reports() {

    return (

        <Layout>

            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-bold">
                    AI Governance Report
                </h1>

                <p className="text-slate-400 mt-2">
                    Generate an official assessment report.
                </p>

                <ReportPreview />

                <DownloadReport />

            </div>

        </Layout>

    );

}