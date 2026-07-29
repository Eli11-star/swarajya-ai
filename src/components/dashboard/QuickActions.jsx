import Card from "../common/Card";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <Card>

      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">

        <Link
          to="/upload"
          className="block bg-blue-600 rounded-xl p-4 text-center"
        >
          Upload AI Model
        </Link>

        <Link
          to="/passport"
          className="block bg-green-600 rounded-xl p-4 text-center"
        >
          View Passport
        </Link>

        <Link
          to="/trust"
          className="block bg-purple-600 rounded-xl p-4 text-center"
        >
          Trust Engine
        </Link>

      </div>

    </Card>
  );
}