import Card from "../common/Card";

export default function ScoreComparison({ models }) {
    if (!models || models.length === 0) {
        return null;
    }

    return (
        <Card>
            <h2 className="text-2xl font-bold mb-6">
                Score Comparison
            </h2>

            <div className="space-y-4">
                {models.map((model) => (
                    <div
                        key={model.passportId}
                        className="border-b border-slate-700 pb-4"
                    >
                        <div className="flex justify-between mb-2">
                            <span>{model.modelName}</span>
                            <span className="font-bold">
                                {model.trustScore}%
                            </span>
                        </div>

                        <div className="w-full bg-slate-700 rounded-full h-3">
                            <div
                                className="bg-green-500 h-3 rounded-full"
                                style={{ width: `${model.trustScore}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}