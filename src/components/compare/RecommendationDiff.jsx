import Card from "../common/Card";

export default function RecommendationDiff({ models }) {

    if (!models?.length) return null;

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-6">
                Recommendations
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {models.map((model) => (

                    <div
                        key={model.passportId}
                        className="bg-slate-800 rounded-xl p-5"
                    >

                        <h3 className="font-bold text-lg mb-4">
                            {model.modelName}
                        </h3>

                        <ul className="space-y-2">

                            {model.recommendations?.map((item, index) => (

                                <li key={index}>
                                    • {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                ))}

            </div>

        </Card>

    );

}