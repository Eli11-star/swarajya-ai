export default function ScoreCard({
    title,
    score,
}) {
    return (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

            <p className="text-slate-400">
                {title}
            </p>

            <h2 className="text-4xl font-bold mt-4">
                {score}%
            </h2>

            <div className="mt-5 h-2 bg-slate-700 rounded-full">

                <div
                    className="h-2 rounded-full bg-blue-500"
                    style={{
                        width: `${score}%`,
                    }}
                />

            </div>

        </div>
    );
}