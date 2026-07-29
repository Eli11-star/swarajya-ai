import Card from "../common/Card";

export default function WinnerCard({ models }) {

    if (!models?.length) return null;

    const winner = [...models].sort(
        (a, b) => b.trustScore - a.trustScore
    )[0];

    return (
        <Card>

            <h2 className="text-2xl font-bold mb-4">
                🏆 Best Performing Model
            </h2>

            <h1 className="text-3xl font-bold">
                {winner.modelName}
            </h1>

            <p className="text-slate-400 mt-2">
                {winner.organization}
            </p>

            <div className="mt-6 flex gap-8">

                <div>
                    <p className="text-slate-400">
                        Trust
                    </p>

                    <h2 className="text-2xl font-bold text-green-400">
                        {winner.trustScore}%
                    </h2>
                </div>

                <div>
                    <p className="text-slate-400">
                        Risk
                    </p>

                    <h2>{winner.risk}</h2>
                </div>

                <div>
                    <p className="text-slate-400">
                        Status
                    </p>

                    <h2>{winner.status}</h2>
                </div>

            </div>

        </Card>
    );
}