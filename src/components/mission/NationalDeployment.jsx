import Card from "../common/Card";

const states = [
  { name: "Delhi", models: 18 },
  { name: "Maharashtra", models: 24 },
  { name: "Karnataka", models: 21 },
  { name: "Tamil Nadu", models: 15 },
  { name: "Telangana", models: 12 },
  { name: "Gujarat", models: 9 },
];

export default function NationalDeployment() {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">
        🇮🇳 National AI Deployment
      </h2>

      <div className="space-y-5">
        {states.map((state) => (
          <div key={state.name}>
            <div className="flex justify-between mb-2">
              <span>{state.name}</span>
              <span>{state.models} Models</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: `${state.models * 4}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}