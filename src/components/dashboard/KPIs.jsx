export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {value}

          </h2>

        </div>

        {icon}

      </div>

    </div>
  );
}