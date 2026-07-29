import Card from "../common/Card";
import { Bot } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function AICopilot() {

    const { aiModel } = useApp();

    return (

        <Card className="mt-6">

            <div className="flex items-center gap-3 mb-6">

                <Bot
                    className="text-blue-400"
                    size={30}
                />

                <h2 className="text-2xl font-bold">
                    AI Governance Copilot
                </h2>

            </div>

            {/* Executive Summary */}

            <div className="mb-8">

                <h3 className="font-semibold text-blue-400 mb-3">
                    Executive Summary
                </h3>

                <p className="text-slate-300 leading-7">

                    {aiModel.summary ||
                        "Upload an AI model to generate an AI governance assessment."}

                </p>

            </div>

            {/* Deployment Recommendation */}

            <div className="mb-8">

                <h3 className="font-semibold text-green-400 mb-3">
                    Deployment Recommendation
                </h3>

                <p className="text-slate-300">

                    {aiModel.status === "Approved"
                        ? "✅ This AI model satisfies the required trust and governance criteria and is recommended for deployment."
                        : "⚠ This AI model requires additional review before deployment."}

                </p>

            </div>

            {/* Confidence */}

            <div>

                <p className="text-slate-400 mb-2">

                    AI Confidence

                </p>

                <div className="w-full h-3 rounded-full bg-slate-700">

                    <div
                        className="h-3 rounded-full bg-green-500 transition-all duration-700"
                        style={{
                            width: `${aiModel.trustScore}%`,
                        }}
                    />

                </div>

                <p className="text-right mt-2 text-green-400 font-semibold">

                    {aiModel.trustScore}%

                </p>

            </div>

        </Card>

    );

}