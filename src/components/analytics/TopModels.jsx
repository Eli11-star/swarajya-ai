import Card from "../common/Card";
import { Trophy, ShieldCheck } from "lucide-react";

export default function TopModels() {
  const models = [
    {
      name: "CitizenGPT",
      organization: "National Informatics Centre",
      score: 94,
      risk: "Low",
    },
    {
      name: "WaferVision AI",
      organization: "Bharat Semi Technologies",
      score: 92,
      risk: "Low",
    },
    {
      name: "BhashaAI",
      organization: "CDAC India",
      score: 90,
      risk: "Medium",
    },
    {
      name: "AgriVision",
      organization: "ICAR",
      score: 89,
      risk: "Medium",
    },
    {
      name: "RailGPT",
      organization: "Indian Railways",
      score: 88,
      risk: "Low",
    },
  ];

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-yellow-400" size={28} />

        <h2 className="text-2xl font-bold">
          Top Trusted AI Models
        </h2>
      </div>

      <div className="space-y-4">
        {models.map((model, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 rounded-xl p-4"
          >
            <div>
              <h3 className="font-semibold text-lg">
                {model.name}
              </h3>

              <p className="text-slate-400 text-sm">
                {model.organization}
              </p>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <ShieldCheck
                  className="text-green-400"
                  size={18}
                />

                <span className="text-xl font-bold text-green-400">
                  {model.score}
                </span>
              </div>

              <span
                className={`text-sm ${
                  model.risk === "Low"
                    ? "text-green-400"
                    : "text-yellow-400"
                }`}
              >
                {model.risk} Risk
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}