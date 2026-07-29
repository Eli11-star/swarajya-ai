import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function RiskPanel() {

    const { aiModel } = useApp();

    const riskColor = {
        Low: "text-green-400",
        Medium: "text-yellow-400",
        High: "text-red-400",
    };

    return (

        <Card>

            
            
            <h2 className="text-xl font-bold">
                Risk Summary
            </h2>

            <div className="space-y-5 mt-6">

                <div className="flex justify-between">

                    <span>Overall Risk</span>

                    <span
                        className={
                            riskColor[aiModel.risk] || "text-slate-300"
                        }
                    >
                        {aiModel.risk || "Pending"}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Trust Score</span>

                    <span>
                        {aiModel.trustScore}%
                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Deployment Status</span>

                    <span
                        className={
                            aiModel.status === "Approved"
                                ? "text-green-400"
                                : "text-yellow-400"
                        }
                    >
                        {aiModel.status || "Pending"}
                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Organization</span>

                    <span>
                        {aiModel.organization || "-"}
                    </span>

                </div>

            </div>

        </Card>

    );

}