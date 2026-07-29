import Card from "../common/Card";

const states = [
  ["Karnataka", 28],
  ["Maharashtra", 23],
  ["Telangana", 18],
  ["Delhi", 15],
];

export default function TopStates() {
  return (
    <Card>

      <h2 className="text-xl font-bold mb-6">
        Top States
      </h2>

      <div className="space-y-4">

        {states.map(([state, value]) => (
          <div
            key={state}
            className="flex justify-between"
          >
            <span>{state}</span>

            <span>{value}</span>
          </div>
        ))}

      </div>

    </Card>
  );
}