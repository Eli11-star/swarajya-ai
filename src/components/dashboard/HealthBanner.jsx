import Card from "../common/Card";
import { ShieldCheck } from "lucide-react";

export default function HealthBanner() {
  return (
    <Card className="mb-8 bg-green-500/10 border border-green-500/30">
      <div className="flex items-center gap-4">
        <ShieldCheck className="text-green-400" size={34} />

        <div>
          <h2 className="text-xl font-bold text-green-400">
            National AI Infrastructure Healthy
          </h2>

          <p className="text-slate-300">
            All monitored AI systems are operating normally.
          </p>
        </div>
      </div>
    </Card>
  );
}