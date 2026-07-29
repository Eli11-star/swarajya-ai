export default function ScoreCard({
    label,
    score,
}) {

    return (

        <div className="bg-slate-800 rounded-xl p-5">

            <div className="text-slate-400">

                {label}

            </div>

            <div className="flex items-center justify-between mt-3">

                <h2 className="text-3xl font-bold">

                    {score}%

                </h2>

            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-700">

                <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                        width: `${score}%`,
                    }}
                />

            </div>

        </div>

    );

}