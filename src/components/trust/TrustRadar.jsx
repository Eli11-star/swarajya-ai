import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function TrustRadar() {

  const { aiModel } = useApp();

  const data = [
    {
      subject: "Security",
      score: aiModel.scores.security,
    },
    {
      subject: "Privacy",
      score: aiModel.scores.privacy,
    },
    {
      subject: "Fairness",
      score: aiModel.scores.fairness,
    },
    {
      subject: "Explainability",
      score: aiModel.scores.explainability,
    },
    {
      subject: "Governance",
      score: aiModel.scores.governance,
    },
    {
      subject: "Robustness",
      score: aiModel.scores.robustness,
    },
  ];

  return (
    <Card className="h-[500px]">

      <h2 className="text-xl font-bold mb-6">
        Trust Radar
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <RadarChart data={data}>

          <PolarGrid />

          <PolarAngleAxis dataKey="subject" />

          <Radar
            dataKey="score"
            fill="#3B82F6"
            stroke="#3B82F6"
            fillOpacity={0.6}
          />

        </RadarChart>

      </ResponsiveContainer>

    </Card>
  );
}