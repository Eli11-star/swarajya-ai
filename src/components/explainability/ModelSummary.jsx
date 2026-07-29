import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function ModelSummary() {

    const { aiModel } = useApp();

    return (

        <Card>

            <h2 className="text-2xl font-bold mb-4">
                AI Model Summary
            </h2>

            <p className="text-slate-300 leading-8">
                {aiModel.summary}
            </p>

        </Card>

    );

}