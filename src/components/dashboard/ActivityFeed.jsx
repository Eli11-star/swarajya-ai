import Card from "../common/Card";

const activities = [
  "CitizenGPT Passport Generated",
  "Healthcare AI Approved",
  "Bias Audit Completed",
  "New AI Uploaded",
];

export default function ActivityFeed() {
  return (
    <Card>

      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-slate-800"
          >
            {item}
          </div>
        ))}
      </div>

    </Card>
  );
}