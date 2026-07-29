import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-slate-800 flex items-center justify-between px-8">

      <div>

        <h2 className="text-2xl font-bold">

          National AI Trust Platform

        </h2>

        <p className="text-slate-400">

          Sovereign Technology for India

        </p>

      </div>

      <div className="flex items-center gap-5">

        <Bell />

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

          A

        </div>

      </div>

    </header>
  );
}