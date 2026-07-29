import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

export default function TrustScoreChart({ models }) {

    const data = {
        labels: models.map(m => m.modelName),

        datasets: [
            {
                label: "Trust Score",
                data: models.map(m => m.trustScore)
            }
        ]
    };

    return (
        <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">
                Trust Score Comparison
            </h2>

            <Bar data={data} />
        </div>
    );
}