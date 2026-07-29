import CountUp from "react-countup";

export default function KPI({ title, value, suffix = "" }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <p className="text-slate-400">{title}</p>

      <h2 className="text-4xl font-bold mt-3">
        <CountUp end={value} duration={2} />
        {suffix}
      </h2>
    </div>
  );
}