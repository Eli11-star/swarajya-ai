import TrustGauge from "./TrustGauge";

export default function PassportHeader({ model }) {
  return (
    <div className="flex justify-between items-start">

      <div>

        <h2 className="text-3xl font-bold">
          {model.modelName}
        </h2>

        <p className="text-slate-400 mt-2">
          {model.organization}
        </p>

      </div>

      <div className="text-center">

        <TrustGauge score={model.trustScore} />

        <p className="text-slate-400 mt-2">
          Trust Score
        </p>

      </div>

    </div>
  );
}