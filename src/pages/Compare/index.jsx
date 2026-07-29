import Layout from "../../components/layout/Layout";
import { useApp } from "../../context/AppContext";

import CompareTable from "../../components/compare/CompareTable";
import WinnerCard from "../../components/compare/WinnerCard";
import ScoreComparison from "../../components/compare/ScoreComparison";
import RecommendationDiff from "../../components/compare/RecommendationDiff";

export default function Compare() {

    const { registry } = useApp();

    if (registry.length < 2) {
        return (
            <Layout>
                <div className="text-center py-20">

                    <h1 className="text-4xl font-bold">
                        Compare AI Models
                    </h1>

                    <p className="text-slate-400 mt-4">
                        Evaluate at least two AI models to compare them.
                    </p>

                </div>
            </Layout>
        );
    }

    const modelA = registry[0];
    const modelB = registry[1];

    return (
        <Layout>

Header

<WinnerCard models={registry} />

<CompareTable models={registry} />

<ScoreComparison models={registry} />

<RecommendationDiff models={registry} />

</Layout>

        
    );

}