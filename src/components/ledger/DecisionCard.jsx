import Card from "../common/Card";

export default function DecisionCard({
    title,
    time,
    status,
    description
}) {

    const color =
        status === "Approved"
            ? "text-green-400"
            : status === "Conditional"
            ? "text-yellow-400"
            : "text-red-400";

    return (

        <Card className="mb-5">

            <div className="flex justify-between">

                <div>

                    <h3 className="text-lg font-bold">
                        {title}
                    </h3>

                    <p className="text-slate-400 mt-1">
                        {description}
                    </p>

                </div>

                <div className="text-right">

                    <p className={color}>
                        {status}
                    </p>

                    <p className="text-sm text-slate-500">
                        {time}
                    </p>

                </div>

            </div>

        </Card>

    );
}