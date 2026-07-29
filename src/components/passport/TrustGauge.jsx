import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function TrustGauge({ score }) {

    return (

        <div className="w-44">

            <CircularProgressbar

                value={score}

                text={`${score}`}

                styles={buildStyles({

                    pathColor: "#2563EB",

                    trailColor: "#1E293B",

                    textColor: "#fff",

                })}

            />

            <p className="text-center mt-5 text-slate-400">

                National Trust Score

            </p>

        </div>

    );

}