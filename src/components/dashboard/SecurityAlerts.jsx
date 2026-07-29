import Card from "../common/Card";
import { AlertTriangle } from "lucide-react";

export default function SecurityAlerts() {
  return (
    <Card>

      <div className="flex items-center gap-3 mb-6">

        <AlertTriangle
          className="text-yellow-400"
          size={28}
        />

        <h2 className="text-xl font-bold">
          Security Alerts
        </h2>

      </div>

      <div className="space-y-4">

        <div className="bg-yellow-500/10 border border-yellow-500 rounded-xl p-4">
          No critical security incidents detected.
        </div>

        <div className="bg-green-500/10 border border-green-500 rounded-xl p-4">
          All monitored AI deployments are compliant.
        </div>

      </div>

    </Card>
  );
}