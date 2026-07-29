import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useApp } from "../../context/AppContext";

export default function Ledger() {

    const { aiModel } = useApp();

    const [events, setEvents] = useState([]);

    useEffect(() => {

        if (!aiModel) return;

        fetch(
            `http://127.0.0.1:8000/ledger/${aiModel.passportId}`
        )
            .then(r => r.json())
            .then(setEvents);

    }, [aiModel]);

    if (!aiModel) {

        return (
            <Layout>
                <div className="text-center py-20">
                    No passport loaded.
                </div>
            </Layout>
        );

    }

    return (

        <Layout>

            <h1 className="text-4xl font-bold mb-8">
                Decision Ledger
            </h1>

            <div className="space-y-6">

                {events.map((event, index) => (

                    <div
                        key={index}
                        className="border-l-4 border-blue-500 bg-slate-900 rounded-xl p-6"
                    >

                        <p className="text-blue-400">
                            {event.time}
                        </p>

                        <h2 className="text-xl font-bold mt-2">
                            {event.title}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            {event.description}
                        </p>

                    </div>

                ))}

            </div>

        </Layout>

    );

}