import ComplianceBadge from "./ComplianceBadge";

export default function ComplianceStatus() {
  return (
    <div className="mt-12">

      <h3 className="text-2xl font-bold mb-6">
        Compliance Status
      </h3>

      <div className="flex flex-wrap gap-4">

        <ComplianceBadge text="DPDP Act" />
        <ComplianceBadge text="AI Governance" />
        <ComplianceBadge text="Explainable AI" />
        <ComplianceBadge text="Secure Deployment" />

      </div>

    </div>
  );
}