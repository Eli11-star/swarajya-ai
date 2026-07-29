import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function RiskBreakdown() {

    const { aiModel } = useApp();

    return (

        <Card>

            <h2 className="text-xl font-bold mb-5">
                Risk Analysis
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span>Overall Risk</span>
                    <strong>{aiModel.risk}</strong>
                </div>

                <div className="flex justify-between">
                    <span>Security</span>
                    <strong>{aiModel.scores.security}%</strong>
                </div>

                <div className="flex justify-between">
                    <span>Privacy</span>
                    <strong>{aiModel.scores.privacy}%</strong>
                </div>

                <div className="flex justify-between">
                    <span>Fairness</span>
                    <strong>{aiModel.scores.fairness}%</strong>
                </div>

                <div className="flex justify-between">
                    <span>Explainability</span>
                    <strong>{aiModel.scores.explainability}%</strong>
                </div>

                <div className="flex justify-between">
                    <span>Governance</span>
                    <strong>{aiModel.scores.governance}%</strong>
                </div>

                <div className="flex justify-between">
                    <span>Robustness</span>
                    <strong>{aiModel.scores.robustness}%</strong>
                </div>

            </div>

        </Card>

    );

}