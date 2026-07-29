import Layout from "../../components/layout/Layout";
import HealthBanner from "../../components/dashboard/HealthBanner";
import PassportPreview from "../../components/dashboard/PassportPreview";
import TrustChart from "../../components/dashboard/TrustChart";
import QuickActions from "../../components/dashboard/QuickActions";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import SecurityAlerts from "../../components/dashboard/SecurityAlerts";
import NationalCoverage from "../../components/dashboard/NationalCoverage";
import TopStates from "../../components/dashboard/TopStates";
import KPIs from "../../components/dashboard/KPIs";
import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">
            🇮🇳 SwarajyaAI Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            National AI Governance & Trust Monitoring Platform
          </p>
        </div>

        {/* Health Banner */}
        <HealthBanner />

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <StatCard
    title="AI Models"
    value="12"
    icon={<span className="text-3xl">🤖</span>}
  />

  <StatCard
    title="Approved"
    value="10"
    icon={<span className="text-3xl">✅</span>}
  />

  <StatCard
    title="Average Trust"
    value="91%"
    icon={<span className="text-3xl">🛡️</span>}
  />

  <StatCard
    title="High Risk"
    value="2"
    icon={<span className="text-3xl">⚠️</span>}
  />

</div>

        {/* Passport + Trust Chart */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PassportPreview />
          </div>

          <TrustChart />
        </div>

        {/* Quick Actions + Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          <QuickActions />

          <div className="lg:col-span-2">
            <ActivityFeed />
          </div>
        </div>

        {/* Coverage + Top States */}
        <div className="grid lg:grid-cols-2 gap-6">
          <NationalCoverage />

          <TopStates />
        </div>

        {/* Security Alerts */}
        <SecurityAlerts />

      </div>
    </Layout>
  );
}