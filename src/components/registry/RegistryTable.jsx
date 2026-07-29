import { useState } from "react";

export default function RegistryTable({ models }) {

    const [search, setSearch] = useState("");

    const filtered = models.filter(model =>

        model.modelName.toLowerCase().includes(search.toLowerCase()) ||

        model.organization.toLowerCase().includes(search.toLowerCase()) ||

        model.passportId.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <>

            <input

                placeholder="Search AI Models..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                className="w-full bg-slate-900 rounded-xl p-4 mb-6"

            />

            <table className="w-full bg-slate-900 rounded-2xl overflow-hidden">

                <thead className="bg-slate-800">

                    <tr>

                        <th className="p-4 text-left">Passport</th>

                        <th className="p-4 text-left">Model</th>

                        <th className="p-4 text-left">Organization</th>

                        <th className="p-4 text-left">Trust</th>

                        <th className="p-4 text-left">Risk</th>

                        <th className="p-4 text-left">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {filtered.map((model)=>(
                        <tr
                            key={model.passportId}
                            className="border-t border-slate-700 hover:bg-slate-800"
                        >

                            <td className="p-4">
                                {model.passportId}
                            </td>

                            <td className="p-4">
                                {model.modelName}
                            </td>

                            <td className="p-4">
                                {model.organization}
                            </td>

                            <td className="p-4">
                                {model.trustScore}%
                            </td>

                            <td className="p-4">
                                {model.risk}
                            </td>

                            <td className="p-4">

                                <span className="bg-green-600 px-3 py-1 rounded-full">

                                    {model.status}

                                </span>

                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

        </>

    );

}