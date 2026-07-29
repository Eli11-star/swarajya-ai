import ScoreCard from "./ScoreCard";

export default function TrustAssessment({ model }) {
  return (
    <div className="mt-12">

      <h3 className="text-2xl font-bold mb-6">
        Trust Assessment
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ScoreCard
          title="Security"
          score={model.scores.security}
        />

        <ScoreCard
          title="Privacy"
          score={model.scores.privacy}
        />

        <ScoreCard
          title="Fairness"
          score={model.scores.fairness}
        />

        <ScoreCard
          title="Explainability"
          score={model.scores.explainability}
        />

        <ScoreCard
          title="Governance"
          score={model.scores.governance}
        />

        <ScoreCard
          title="Robustness"
          score={model.scores.robustness}
        />

      </div>

    </div>
  );
}