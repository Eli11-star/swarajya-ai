export default function StatusChip({
    status,
}) {

    const colors = {

        Approved:
            "bg-green-500/20 text-green-400",

        Pending:
            "bg-yellow-500/20 text-yellow-400",

        Rejected:
            "bg-red-500/20 text-red-400",

    };

    return (

        <span

            className={`
                px-3
                py-1
                rounded-full
                text-sm
                ${colors[status]}
            `}
        >

            {status}

        </span>

    );

}