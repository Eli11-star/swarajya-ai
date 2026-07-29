import Card from "../common/Card";

export default function KPICards({ models }) {

    if (!models.length) return null;

    const avgTrust = Math.round(
        models.reduce((sum, m) => sum + (m.trustScore || 0), 0) /
        models.length
    );

    const approved = models.filter(
        m => m.status === "Approved"
    ).length;

    const lowRisk = models.filter(
        m => m.risk === "Low"
    ).length;

    const organizations = new Set(
        models.map(m => m.organization)
    ).size;

    const cards = [
        {
            title: "Models Evaluated",
            value: models.length,
            color: "text-blue-400"
        },
        {
            title: "Average Trust",
            value: `${avgTrust}%`,
            color: "text-green-400"
        },
        {
            title: "Approved",
            value: approved,
            color: "text-emerald-400"
        },
        {
            title: "Organizations",
            value: organizations,
            color: "text-purple-400"
        },
        {
            title: "Low Risk",
            value: lowRisk,
            color: "text-yellow-400"
        }
    ];

    return (

        <div className="grid md:grid-cols-5 gap-6">

            {cards.map(card => (

                <Card key={card.title}>

                    <p className="text-slate-400">
                        {card.title}
                    </p>

                    <h2 className={`text-4xl font-bold mt-3 ${card.color}`}>
                        {card.value}
                    </h2>

                </Card>

            ))}

        </div>

    );
}