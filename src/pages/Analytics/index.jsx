import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import AIStatistics from "../../components/mission/AIStatistics";
import TrustTrend from "../../components/analytics/TrustTrend";
import RiskDistribution from "../../components/analytics/RiskDistribution";
import OrganizationRanking from "../../components/analytics/OrganizationChart";

export default function Analytics() {

    const [models, setModels] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/registry")
            .then(res => res.json())
            .then(data => setModels(data));

    }, []);

    return (
        <Layout>

            <div className="mb-8">

                <h1 className="text-4xl font-bold">
                    National AI Analytics
                </h1>

                <p className="text-slate-400">
                    Live statistics across all evaluated AI systems
                </p>

            </div>

            <AIStatistics models={models} />

            <div className="grid lg:grid-cols-2 gap-6 mt-8">

                <TrustTrend models={models} />

                <RiskDistribution models={models} />

            </div>

            <div className="mt-8">

                <OrganizationRanking models={models} />

            </div>

        </Layout>
    );
}