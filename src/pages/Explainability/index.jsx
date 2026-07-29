import Layout from "../../components/layout/Layout";
import { useApp } from "../../context/AppContext";

import ModelSummary from "../../components/explainability/ModelSummary";
import RiskBreakdown from "../../components/explainability/RiskBreakdown";
import ExplanationCard from "../../components/explainability/ExplanationCard";
import ImprovementPlan from "../../components/explainability/ImprovementPlan";

export default function Explainability() {

    const { aiModel } = useApp();

    if (!aiModel) {
        return (
            <Layout>
                <div className="text-center mt-24">
                    <h1 className="text-3xl font-bold">
                        No AI Passport Loaded
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Upload and evaluate a model first.
                    </p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>

            <div className="max-w-7xl mx-auto space-y-8">

                <div>

                    <h1 className="text-4xl font-bold">
                        Explainability Center
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Understand how the governance decision was made.
                    </p>

                </div>

                <ModelSummary passport={aiModel} />

                <RiskBreakdown passport={aiModel} />

                <ExplanationCard passport={aiModel} />

                <ImprovementPlan passport={aiModel} />

            </div>

        </Layout>
    );
}