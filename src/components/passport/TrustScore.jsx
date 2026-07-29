import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function TrustScore({ value }) {
  return (
    <div className="w-40 h-40">
      <CircularProgressbar
        value={value}
        text={`${value}`}
      />
    </div>
  );
}
