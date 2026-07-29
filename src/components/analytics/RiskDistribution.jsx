import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function RiskDistribution({ models }) {

  const low = models.filter(m => m.risk === "Low").length;
  const medium = models.filter(m => m.risk === "Medium").length;
  const high = models.filter(m => m.risk === "High").length;

  const data = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [low, medium, high]
      }
    ]
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Risk Distribution
      </h2>

      <Pie data={data} />

    </div>
  );
}