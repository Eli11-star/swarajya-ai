import Card from "../common/Card";
import { Building2, ShieldCheck, Cpu } from "lucide-react";

export default function OrganizationChart({ model }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Building2 className="text-blue-500" size={28} />

        <h2 className="text-2xl font-bold">
          Organization Overview
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">
            Organization
          </span>

          <span className="font-semibold">
            {model?.organization || "Unknown"}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">
            AI Model
          </span>

          <span className="font-semibold">
            {model?.modelName || "Unknown"}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">
            Version
          </span>

          <span className="font-semibold">
            {model?.version || "1.0"}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">
            Passport Status
          </span>

          <span className="text-green-400 font-semibold">
            {model?.status || "Approved"}
          </span>
        </div>

        <div className="flex justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">
            Risk Level
          </span>

          <span className="text-yellow-400 font-semibold">
            {model?.risk || "Low"}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <ShieldCheck className="mx-auto text-green-400 mb-2" />
            <h3 className="text-xl font-bold">
              {model?.trustScore || 0}%
            </h3>

            <p className="text-sm text-slate-400">
              Trust
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <Cpu className="mx-auto text-blue-400 mb-2" />
            <h3 className="text-xl font-bold">
              6
            </h3>

            <p className="text-sm text-slate-400">
              Metrics
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <Building2 className="mx-auto text-purple-400 mb-2" />
            <h3 className="text-xl font-bold">
              GOI
            </h3>

            <p className="text-sm text-slate-400">
              Registry
            </p>
          </div>

        </div>
      </div>
    </Card>
  );
}