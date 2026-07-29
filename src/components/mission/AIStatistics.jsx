import Card from "../common/Card";

export default function AIStatistics() {

  return (

    <Card>

      <h2 className="text-2xl font-bold mb-6">
        AI Statistics
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between">
          <span>Total AI Models</span>
          <span>42</span>
        </div>

        <div className="flex justify-between">
          <span>Approved</span>
          <span>36</span>
        </div>

        <div className="flex justify-between">
          <span>Pending</span>
          <span>5</span>
        </div>

        <div className="flex justify-between">
          <span>Rejected</span>
          <span>1</span>
        </div>

      </div>

    </Card>

  );

}