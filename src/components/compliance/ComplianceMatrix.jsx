import Card from "../common/Card";

export default function ComplianceMatrix({ passport }) {

    const checks = [
        {
            name: "DPDP Act 2023",
            score: passport.scores?.privacy || 0
        },
        {
            name: "NITI Aayog Responsible AI",
            score: passport.scores?.governance || 0
        },
        {
            name: "Explainable AI",
            score: passport.scores?.explainability || 0
        },
        {
            name: "Security Standards",
            score: passport.scores?.security || 0
        },
        {
            name: "Bias & Fairness",
            score: passport.scores?.fairness || 0
        },
        {
            name: "Robustness",
            score: passport.scores?.robustness || 0
        }
    ];

    return (
        <Card className="mt-10">

            <h2 className="text-2xl font-bold mb-6">
                Compliance Matrix
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b border-slate-700">

                        <th className="text-left py-3">
                            Framework
                        </th>

                        <th className="text-left">
                            Score
                        </th>

                        <th className="text-left">
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {checks.map(item => (

                        <tr
                            key={item.name}
                            className="border-b border-slate-800"
                        >

                            <td className="py-4">
                                {item.name}
                            </td>

                            <td>
                                {item.score}%
                            </td>

                            <td>

                                <span
                                    className={`px-3 py-1 rounded-full ${
                                        item.score >= 90
                                            ? "bg-green-500/20 text-green-400"
                                            : item.score >= 70
                                            ? "bg-yellow-500/20 text-yellow-400"
                                            : "bg-red-500/20 text-red-400"
                                    }`}
                                >
                                    {item.score >= 90
                                        ? "Compliant"
                                        : item.score >= 70
                                        ? "Needs Review"
                                        : "Non-Compliant"}
                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Card>
    );
}