export default function Metric({ label, value }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-800">
      <span className="text-slate-400">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}