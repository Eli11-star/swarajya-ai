import Card from "../common/Card";

export default function StatusCard({
  title,
  value,
  color = "text-blue-400",
}) {
  return (
    <Card>

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {value}
      </h2>

    </Card>
  );
}