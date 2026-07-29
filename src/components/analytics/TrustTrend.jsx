import Card from "../common/Card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function TrustTrend({ models }) {

    const data = models.map((m, i) => ({
        name: `AI ${i + 1}`,
        trust: m.trustScore
    }));

    return (

        <Card>

            <h2 className="text-xl font-bold mb-5">
                Trust Score Trend
            </h2>

            <ResponsiveContainer width="100%" height={320}>

                <LineChart data={data}>

                    <XAxis dataKey="name"/>

                    <YAxis/>

                    <Tooltip/>

                    <Line
                        dataKey="trust"
                        stroke="#3b82f6"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </Card>

    );

}