import Layout from "../../components/layout/Layout";
import { useApp } from "../../context/AppContext";

import PassportHeader from "../../components/passport/PassportHeader";
import ModelInformation from "../../components/passport/ModelInformation";
import TrustAssessment from "../../components/passport/TrustAssessment";
import ComplianceStatus from "../../components/passport/ComplianceStatus";
import PassportVerification from "../../components/passport/PassportVerification";
import PassportFooter from "../../components/passport/PassportFooter";

import CopilotChat from "../../components/copilot/CopilotChat";
import ExecutiveReport from "../../components/reports/ExecutiveReport";
import ComplianceMatrix from "../../components/compliance/ComplianceMatrix";
import ScoreSimulator from "../../components/simulator/ScoreSimulator";

export default function Passport() {

    const { aiModel } = useApp();
    console.log(aiModel);
    if (!aiModel || !aiModel.scores) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold">
          No AI Passport Found
        </h2>

        <p className="text-slate-400 mt-4">
          Upload and evaluate an AI model first.
        </p>
      </div>
    </Layout>
  );
}
  

  return (
    <Layout>
    <div className="max-w-6xl mx-auto">

        <PassportHeader model={aiModel} />

        <ModelInformation model={aiModel} />

        <TrustAssessment model={aiModel} />

        <ComplianceStatus />

        <PassportVerification />

        <PassportFooter model={aiModel} />

         {/*<ExecutiveReport passport={aiModel} /> */}

         {/* <ComplianceMatrix passport={aiModel} /> */}

        {/* <ScoreSimulator passport={aiModel} /> */}

        <CopilotChat passport={aiModel} />

    </div>
</Layout>

    

  );

}