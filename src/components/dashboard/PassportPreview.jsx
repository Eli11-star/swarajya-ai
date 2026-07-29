import Card from "../common/Card";

export default function PassportPreview() {
  return (
    <Card>

      <h2 className="text-xl font-bold mb-6">
        Latest Passport
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Model:</strong> CitizenGPT
        </p>

        <p>
          <strong>Trust Score:</strong> 94%
        </p>

        <p>
          <strong>Status:</strong> Approved
        </p>

      </div>

    </Card>
  );
}