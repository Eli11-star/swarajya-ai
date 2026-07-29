import DecisionCard from "./DecisionCard";

export default function DecisionTimeline({ passport }) {

    const timeline = [

        {
            title: "Model Uploaded",
            status: "Approved",
            time: passport.issueDate,
            description:
                "AI documentation successfully received."
        },

        {
            title: "Governance Analysis",
            status: passport.status,
            time: passport.issueDate,
            description:
                "Multi-dimensional governance assessment completed."
        },

        {
            title: "Risk Classification",
            status: passport.status,
            time: passport.issueDate,
            description:
                `Risk classified as ${passport.risk}.`
        },

        {
            title: "Passport Issued",
            status: "Approved",
            time: passport.issueDate,
            description:
                `Passport ${passport.passportId} generated.`
        }

    ];

    return (

        <div className="mt-8">

            {timeline.map((item, index) => (

                <DecisionCard
                    key={index}
                    {...item}
                />

            ))}

        </div>

    );

}