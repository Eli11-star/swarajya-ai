import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function ImprovementPlan() {

    const { aiModel } = useApp();

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-5">
                Recommended Improvements
            </h2>

            <div className="space-y-3">

                {aiModel.recommendations.map((item, index) => (

                    <div
                        key={index}
                        className="bg-slate-800 rounded-xl p-4"
                    >
                        ✅ {item}
                    </div>

                ))}

            </div>

        </Card>

    );

}