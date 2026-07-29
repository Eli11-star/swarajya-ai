const steps = [
  "Reading Model Metadata",
  "Security Assessment",
  "Privacy Assessment",
  "Bias & Fairness Analysis",
  "Explainability Evaluation",
  "Governance Validation",
  "Generating AI Passport"
];

export default function AnalysisPipeline() {
    return (

        <div className="bg-slate-900 rounded-3xl p-12 text-center">

            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

            <h2 className="text-3xl mt-8 font-bold">
                Evaluating AI Model...
            </h2>

            <p className="text-slate-400 mt-3">
                Reading document • Running trust assessment • Generating passport
            </p>

        </div>

    );
}