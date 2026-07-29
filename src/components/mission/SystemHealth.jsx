import Card from "../common/Card";

export default function SystemHealth() {

  return (

    <Card>

      <h2 className="text-2xl font-bold mb-6">
        System Health
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span>AI Models</span>
          <span className="text-green-400">Healthy</span>
        </div>

        <div className="flex justify-between">
          <span>Trust Engine</span>
          <span className="text-green-400">Online</span>
        </div>

        <div className="flex justify-between">
          <span>Passport Service</span>
          <span className="text-green-400">Running</span>
        </div>

        <div className="flex justify-between">
          <span>Registry</span>
          <span className="text-green-400">Connected</span>
        </div>

      </div>

    </Card>

  );

}