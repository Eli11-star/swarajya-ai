import Card from "../common/Card";

export default function DecisionStats({ passport }) {

    return (

        <div className="grid md:grid-cols-3 gap-6 mb-8">

            <Card>

                <p className="text-slate-400">
                    Trust Score
                </p>

                <h2 className="text-4xl font-bold mt-3">
                    {passport.trustScore}
                </h2>

            </Card>

            <Card>

                <p className="text-slate-400">
                    Risk
                </p>

                <h2 className="text-3xl font-bold mt-3">
                    {passport.risk}
                </h2>

            </Card>

            <Card>

                <p className="text-slate-400">
                    Final Decision
                </p>

                <h2 className="text-3xl font-bold mt-3">
                    {passport.status}
                </h2>

            </Card>

        </div>

    );

}