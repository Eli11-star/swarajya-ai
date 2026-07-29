import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function RecommendationPanel() {

    const { aiModel } = useApp();

    return (

        <Card className="mt-6">

            <h2 className="text-xl font-bold mb-5">
                AI Recommendations
            </h2>

            {aiModel.recommendations &&
            aiModel.recommendations.length > 0 ? (

                <ul className="space-y-4">

                    {aiModel.recommendations.map((item, index) => (

                        <li
                            key={index}
                            className="bg-slate-800 rounded-xl p-4"
                        >
                            ✅ {item}
                        </li>

                    ))}

                </ul>

            ) : (

                <p className="text-slate-400">
                    Upload and evaluate an AI model to receive governance recommendations.
                </p>

            )}

        </Card>

    );

}