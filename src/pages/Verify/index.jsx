import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import api from "../../services/api";

export default function Verify() {
  const { passportId } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get(`/verify/${passportId}`)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [passportId]);

  if (loading) {
    return (
      <Layout>
        <h1 className="text-3xl text-center mt-20">
          Verifying Passport...
        </h1>
      </Layout>
    );
  }

  if (!data?.verified) {
    return (
      <Layout>
        <div className="text-center mt-24">
          <h1 className="text-5xl">❌</h1>

          <h2 className="text-3xl font-bold mt-6">
            Passport Not Found
          </h2>
        </div>
      </Layout>
    );
  }

  const passport = data.passport;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">

        <div className="bg-slate-900 rounded-3xl p-10 border border-green-600">

          <div className="text-center">

            <h1 className="text-6xl mb-4">
              ✅
            </h1>

            <h2 className="text-4xl font-bold">
              Passport Verified
            </h2>

            <p className="text-green-400 mt-2">
              Government of India Registry
            </p>

          </div>

          <div className="mt-10 space-y-5">

            <div className="flex justify-between">
              <span>Passport ID</span>
              <span>{passport.passportId}</span>
            </div>

            <div className="flex justify-between">
              <span>Model</span>
              <span>{passport.modelName}</span>
            </div>

            <div className="flex justify-between">
              <span>Organization</span>
              <span>{passport.organization}</span>
            </div>

            <div className="flex justify-between">
              <span>Trust Score</span>
              <span>{passport.trustScore}</span>
            </div>

            <div className="flex justify-between">
              <span>Risk</span>
              <span>{passport.risk}</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-green-400">
                {passport.status}
              </span>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}
