import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function ExplanationCard() {

    const { aiModel } = useApp();

    return (

        <Card>

            <h2 className="text-xl font-bold mb-5">
                Why this score?
            </h2>

            <p className="text-slate-300 leading-8">

                The Trust Score of

                <strong> {aiModel.trustScore}</strong>

                was calculated by combining six governance dimensions:

            </p>

            <ul className="mt-6 space-y-2 list-disc ml-6">

                <li>Security</li>

                <li>Privacy</li>

                <li>Fairness</li>

                <li>Explainability</li>

                <li>Governance</li>

                <li>Robustness</li>

            </ul>

        </Card>

    );

}