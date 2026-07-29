import Card from "../common/Card";

export default function CompareTable({ models }) {

    if (!models || models.length === 0) {
        return (
            <Card>
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold">
                        No Models Available
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Evaluate at least one AI model to compare.
                    </p>
                </div>
            </Card>
        );
    }

    const metrics = [
        ["Trust Score", "trustScore"],
        ["Security", "security"],
        ["Privacy", "privacy"],
        ["Fairness", "fairness"],
        ["Explainability", "explainability"],
        ["Governance", "governance"],
        ["Robustness", "robustness"],
        ["Risk", "risk"],
        ["Status", "status"],
    ];

    const highestTrust = Math.max(
        ...models.map((m) => m.trustScore || 0)
    );

    return (
        <Card>

            <div className="overflow-x-auto">

                <table className="w-full text-left border-collapse">

                    <thead>

                        <tr className="border-b border-slate-700">

                            <th className="py-4 px-4">
                                Metric
                            </th>

                            {models.map((model) => (

                                <th
                                    key={model.passportId}
                                    className={`py-4 px-4 ${
                                        model.trustScore === highestTrust
                                            ? "text-green-400"
                                            : ""
                                    }`}
                                >
                                    <div className="font-bold text-lg">
                                        {model.modelName}
                                    </div>

                                    <div className="text-slate-400 text-sm">
                                        {model.organization}
                                    </div>

                                    {model.trustScore === highestTrust && (
                                        <div className="mt-2 text-xs bg-green-500/20 text-green-400 rounded-full px-3 py-1 inline-block">
                                            🏆 Best Score
                                        </div>
                                    )}
                                </th>

                            ))}

                        </tr>

                    </thead>

                    <tbody>

                        {metrics.map(([label, key]) => (

                            <tr
                                key={key}
                                className="border-b border-slate-800"
                            >

                                <td className="py-4 px-4 font-semibold">
                                    {label}
                                </td>

                                {models.map((model) => {

                                    let value;

                                    if (key === "risk") {
                                        value = model.risk;
                                    }
                                    else if (key === "status") {
                                        value = model.status;
                                    }
                                    else if (key === "trustScore") {
                                        value = `${model.trustScore}%`;
                                    }
                                    else {
                                        value = `${model.scores?.[key] ?? 0}%`;
                                    }

                                    return (
                                        <td
                                            key={model.passportId + key}
                                            className="py-4 px-4"
                                        >

                                            {key === "risk" ? (

                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm ${
                                                        model.risk === "Low"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : model.risk === "Medium"
                                                            ? "bg-yellow-500/20 text-yellow-400"
                                                            : "bg-red-500/20 text-red-400"
                                                    }`}
                                                >
                                                    {value}
                                                </span>

                                            ) : key === "status" ? (

                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm ${
                                                        model.status === "Approved"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : model.status === "Conditional"
                                                            ? "bg-yellow-500/20 text-yellow-400"
                                                            : "bg-red-500/20 text-red-400"
                                                    }`}
                                                >
                                                    {value}
                                                </span>

                                            ) : (

                                                value

                                            )}

                                        </td>
                                    );

                                })}

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </Card>
    );
}