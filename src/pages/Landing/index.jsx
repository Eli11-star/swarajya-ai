import { ArrowRight, ShieldCheck, Cpu, BrainCircuit } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
const navigate = useNavigate();



  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-10 py-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold">
          🇮🇳 SwarajyaAI
        </h1>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg">
          Dashboard
        </button>

      </nav>

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="text-center">

          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Sovereign AI for India
          </p>

          <h1 className="text-6xl font-bold mt-6 leading-tight">

            Trust Every AI.

            <br />

            Build for India.

          </h1>

          <p className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto">

            Generate AI Passports, evaluate trust,
            ensure compliance, and monitor AI systems
            through one unified governance platform.

          </p>
          <section className="max-w-6xl mx-auto px-8 pb-24">

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <ShieldCheck
        className="text-blue-500 mb-4"
        size={40}
      />

      <h2 className="text-2xl font-semibold mb-3">
        AI Passport
      </h2>

      <p className="text-slate-400">
        Create digital trust passports for every AI model
        before deployment.
      </p>

    </div>

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <BrainCircuit
        className="text-green-500 mb-4"
        size={40}
      />

      <h2 className="text-2xl font-semibold mb-3">
        Trust Engine
      </h2>

      <p className="text-slate-400">
        Evaluate fairness, privacy, explainability,
        governance and robustness.
      </p>

    </div>

    <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

      <Cpu
        className="text-yellow-500 mb-4"
        size={40}
      />

      <h2 className="text-2xl font-semibold mb-3">
        Mission Control
      </h2>

      <p className="text-slate-400">
        Monitor all AI deployments from one national dashboard.
      </p>

    </div>

  </div>

</section>

          <div className="flex justify-center gap-5 mt-12">

            <button
  onClick={() => navigate("/dashboard")}
  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl flex items-center gap-2"
>
  Get Started
  <ArrowRight size={18} />
</button>

            <button className="border border-slate-700 px-8 py-4 rounded-xl hover:bg-slate-900">

              Learn More

            </button>

          </div>

        </div>

      </section>

    </div>
  );
}