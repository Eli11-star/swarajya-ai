import Layout from "../../components/layout/Layout";

import AIStatistics from "../../components/mission/AIStatistics";
import LiveFeed from "../../components/mission/LiveFeed";
import StatusCard from "../../components/mission/StatusCard";
import LiveAlerts from "../../components/mission/LiveAlerts";
import SystemHealth from "../../components/mission/SystemHealth";
import ActivityTimeline from "../../components/mission/ActivityTimeline";
import NationalDeployment from "../../components/mission/NationalDeployment";

export default function MissionControl() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">
            Mission Control
          </h1>

          <p className="text-slate-400 mt-2">
            Real-time monitoring of AI governance across evaluated models.
          </p>
        </div>

        {/* Statistics */}
        <AIStatistics />

        {/* Live Feed + Status */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <LiveFeed />
          </div>

          <StatusCard />

        </div>

        {/* Alerts + Health */}
        <div className="grid lg:grid-cols-2 gap-6">

          <LiveAlerts />

          <SystemHealth />

        </div>

        {/* Timeline */}
        <ActivityTimeline />

        {/* Deployment */}
        <NationalDeployment />

      </div>
    </Layout>
  );
}