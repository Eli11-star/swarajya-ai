import Card from "../common/Card";
import { useApp } from "../../context/AppContext";

export default function ReportPreview(){

const { aiModel } = useApp();

   if (!aiModel) {
        return null;
    }


return(

<Card className="mt-8">

<h2 className="text-2xl font-bold">

Report Preview

</h2>

<div className="space-y-4 mt-6">

<p><strong>Model:</strong> {aiModel.modelName}</p>

<p><strong>Organization:</strong> {aiModel.organization}</p>

<p><strong>Trust Score:</strong> {aiModel.trustScore}%</p>

<p><strong>Status:</strong> {aiModel.status}</p>

<p><strong>Risk:</strong> {aiModel.risk}</p>

<p><strong>Summary:</strong></p>

<p className="text-slate-300">

{aiModel.summary}

</p>

</div>

</Card>

);

}