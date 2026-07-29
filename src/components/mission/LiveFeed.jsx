import Card from "../common/Card";

const logs = [
  "CitizenGPT Passport Generated",
  "Healthcare AI Approved",
  "New AI Uploaded",
  "Trust Score Updated",
  "Registry Updated",
];

export default function LiveFeed() {

  return (

    <Card>

      <h2 className="text-2xl font-bold mb-6">
        Live Activity
      </h2>

      <div className="space-y-4">

        {logs.map((log, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4"
          >
            {log}
          </div>

        ))}

      </div>

    </Card>

  );

}