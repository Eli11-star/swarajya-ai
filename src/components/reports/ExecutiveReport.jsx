import { useState } from "react";
import api from "../../services/api";
import Card from "../common/Card";

export default function ExecutiveReport({ passport }) {

    const [report, setReport] = useState("");
    const [loading, setLoading] = useState(false);

    async function generate() {

        setLoading(true);

        const res = await api.get(
            `/report/${passport.passportId}`
        );

        setReport(res.data.report);

        setLoading(false);
    }

    return (
        <Card className="mt-10">

            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                    Executive AI Audit Report
                </h2>

                <button
                    onClick={generate}
                    className="bg-blue-600 px-6 py-3 rounded-xl"
                >
                    Generate Report
                </button>

            </div>

            {loading && (
                <p className="mt-6">
                    Generating report...
                </p>
            )}

            {report && (
                <pre className="mt-6 whitespace-pre-wrap text-slate-300">
                    {report}
                </pre>
            )}

        </Card>
    );
}