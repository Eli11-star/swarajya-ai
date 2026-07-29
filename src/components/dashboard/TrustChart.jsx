import Card from "../common/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", score: 82 },
  { month: "Feb", score: 84 },
  { month: "Mar", score: 86 },
  { month: "Apr", score: 89 },
  { month: "May", score: 91 },
  { month: "Jun", score: 94 },
];

export default function TrustChart() {
  return (
    <Card className="h-[420px]">

      <h2 className="text-xl font-bold mb-6">
        National Trust Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </Card>
  );
}