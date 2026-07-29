import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShieldCheck,
  Upload,
  BrainCircuit,
  FileText,
  Database,
  Radar,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Upload, label: "Upload AI", path: "/upload" },
  { icon: ShieldCheck, label: "AI Passport", path: "/passport" },
  { icon: BrainCircuit, label: "Trust Engine", path: "/trust" },
  { icon: FileText, label: "Decision Ledger", path: "/ledger" },
  { icon: Database, label: "AI Registry", path: "/registry" },
  { icon: Radar, label: "Mission Control", path: "/mission-control" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800">

      <div className="p-6 border-b border-slate-800">

    <h1 className="text-2xl font-bold">
        🇮🇳 SwarajyaAI
    </h1>

    <p className="text-sm text-slate-400 mt-2">

        National AI Governance Platform

    </p>

</div>

      <nav className="px-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 mb-2 transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}