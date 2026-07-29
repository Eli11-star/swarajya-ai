export default function ComplianceBadge({
    text,
}) {

    return (

        <span
            className="
                px-4
                py-2
                rounded-full
                bg-green-500/20
                text-green-400
                text-sm
            "
        >

            ✓ {text}

        </span>

    );

}