import Metric from "./Metric";

export default function ModelInformation({ model }) {
  return (
    <div className="mt-10">

      <h3 className="text-2xl font-bold mb-6">
        Model Information
      </h3>

      <Metric label="Passport ID" value={model.passportId} />
      <Metric label="Model" value={model.modelName} />
      <Metric label="Organization" value={model.organization} />
      <Metric label="Version" value={model.version} />
      <Metric label="Issue Date" value={model.issueDate} />
      <Metric label="Risk Level" value={model.risk} />

    </div>
  );
}