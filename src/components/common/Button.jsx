export default function Button({
    children,
    onClick,
    variant = "primary",
}) {

    const styles = {

        primary:
            "bg-blue-600 hover:bg-blue-700",

        secondary:
            "bg-slate-800 hover:bg-slate-700",

        success:
            "bg-green-600 hover:bg-green-700",

    };

    return (

        <button

            onClick={onClick}

            className={`
                px-6
                py-3
                rounded-xl
                transition
                font-medium
                ${styles[variant]}
            `}
        >

            {children}

        </button>

    );

}