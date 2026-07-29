import { useState, useEffect } from "react";
import Card from "../common/Card";

export default function ScoreSimulator({ passport }) {

    const [scores, setScores] = useState({
        ...passport.scores
    });

    const [trust, setTrust] = useState(passport.trustScore);

    useEffect(() => {

        const avg = Math.round(

            (
                scores.security +
                scores.privacy +
                scores.fairness +
                scores.explainability +
                scores.governance +
                scores.robustness
            ) / 6

        );

        setTrust(avg);

    }, [scores]);

    function update(metric, value) {

        setScores(prev => ({
            ...prev,
            [metric]: Number(value)
        }));

    }

    return (

        <Card className="mt-10">

            <h2 className="text-2xl font-bold mb-6">
                AI Governance Simulator
            </h2>

            <h1 className="text-6xl font-bold text-blue-400 mb-8">
                {trust}
            </h1>

            {Object.keys(scores).map(metric => (

                <div
                    key={metric}
                    className="mb-5"
                >

                    <div className="flex justify-between">

                        <span className="capitalize">
                            {metric}
                        </span>

                        <span>
                            {scores[metric]}
                        </span>

                    </div>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={scores[metric]}
                        onChange={(e)=>
                            update(metric,e.target.value)
                        }
                        className="w-full"
                    />

                </div>

            ))}

        </Card>

    );

}