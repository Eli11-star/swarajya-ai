import Layout from "../../components/layout/Layout";
import TrustRadar from "../../components/trust/TrustRadar";
import RiskPanel from "../../components/trust/RiskPanel";
import RecommendationPanel from "../../components/trust/RecommendationPanel";
import AICopilot from "../../components/trust/AICopilot";
import ScoreCard from "../../components/trust/ScoreCard";
import { useApp } from "../../context/AppContext";

export default function TrustEngine() {
  const { aiModel } = useApp();

  if (!aiModel) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold">
            No AI Passport Loaded
          </h1>

          <p className="text-slate-400 mt-4">
            Upload and evaluate an AI model first.
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
          AI Trust Engine
        </h1>

        <p className="text-slate-400 mt-2">
          Multi-dimensional evaluation of AI systems.
        </p>

      </div>

      {/* Radar + Risk */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <TrustRadar />
        </div>

        <RiskPanel />

      </div>

      {/* Score Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <ScoreCard
          title="Security"
          score={aiModel.scores.security}
        />

        <ScoreCard
          title="Privacy"
          score={aiModel.scores.privacy}
        />

        <ScoreCard
          title="Fairness"
          score={aiModel.scores.fairness}
        />

        <ScoreCard
          title="Explainability"
          score={aiModel.scores.explainability}
        />

        <ScoreCard
          title="Governance"
          score={aiModel.scores.governance}
        />

        <ScoreCard
          title="Robustness"
          score={aiModel.scores.robustness}
        />

      </div>

      {/* Recommendations */}

      <RecommendationPanel />

      {/* AI Copilot */}

      <AICopilot passport={aiModel} />

    </div>

  </Layout>
);
}