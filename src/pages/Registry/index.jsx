import Layout from "../../components/layout/Layout";
import { useApp } from "../../context/AppContext";
import RegistryTable from "../../components/registry/RegistryTable";
import { useState } from "react";


export default function Registry() {

    const { registry } = useApp();

const models = registry;
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
const [riskFilter, setRiskFilter] = useState("All");


const filteredModels = registry.filter((model) => {

    const matchesSearch =
        model.modelName.toLowerCase().includes(search.toLowerCase()) ||
        model.organization.toLowerCase().includes(search.toLowerCase()) ||
        model.passportId.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
        statusFilter === "All" ||
        model.status === statusFilter;

    const matchesRisk =
        riskFilter === "All" ||
        model.risk === riskFilter;

    return (
        matchesSearch &&
        matchesStatus &&
        matchesRisk
    );

});

    return (

        <Layout>

            <div className="max-w-7xl mx-auto">

                <h1 className="text-4xl font-bold mb-8">
                    National AI Registry
                </h1>

                {/* Statistics */}

                <div className="grid grid-cols-4 gap-6 mb-8">

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <h2 className="text-3xl font-bold">
                            {models.length}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Registered Models
                        </p>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <h2 className="text-3xl font-bold text-green-400">
                            {models.length ? `${models[0].trustScore}%` : "0%"}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Average Trust Score
                        </p>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <h2 className="text-3xl font-bold">
                            {models.length}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Organizations
                        </p>

                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6">

                        <h2 className="text-3xl font-bold text-blue-400">
                            {models.filter(m => m.status === "Approved").length}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Approved Models
                        </p>

                    </div>

                </div>

                {models.length === 0 ? (

    <div className="bg-slate-900 rounded-2xl p-8 text-center">

        <h2 className="text-2xl font-bold">

            No AI Models Yet

        </h2>

        <p className="text-slate-400 mt-3">

            Upload your first AI model to generate a passport.

        </p>

    </div>

) : (

    <RegistryTable models={models} />

)}

                <RegistryTable models={models} />

            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">

    <input
        type="text"
        placeholder="Search Passport ID, Model, Organization..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3"
    />

    <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-xl px-4"
    >
        <option>All</option>
        <option>Approved</option>
        <option>Conditional</option>
        <option>Rejected</option>
    </select>

    <select
        value={riskFilter}
        onChange={(e) => setRiskFilter(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-xl px-4"
    >
        <option>All</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
    </select>

</div>
{filteredModels.length === 0 && (

<div className="text-center py-20">

<h2 className="text-3xl font-bold">
No Matching AI Models
</h2>

<p className="text-slate-400 mt-3">
Try changing your search or filters.
</p>

</div>

)}

        </Layout>

    );
}