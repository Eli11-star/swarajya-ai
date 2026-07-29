import Layout from "../../components/layout/Layout";

import IndiaMap from "../../components/command/IndiaMap";
import LiveModels from "../../components/command/LiveModels";
import ThreatFeed from "../../components/command/ThreatFeed";
import IncidentTable from "../../components/command/IncidentTable";
import KillSwitch from "../../components/command/KillSwitch";
import ComplianceAlerts from "../../components/command/ComplianceAlerts";

export default function CommandCenter(){

return(

<Layout>

<div className="max-w-7xl mx-auto">

<h1 className="text-4xl font-bold">

National AI Command Center

</h1>

<p className="text-slate-400 mt-2">

Real-time monitoring of India's AI ecosystem

</p>

<div className="grid grid-cols-3 gap-6 mt-8">

<div className="col-span-2">

<IndiaMap/>

</div>

<ThreatFeed/>

</div>

<div className="grid grid-cols-2 gap-6 mt-8">

<LiveModels/>

<ComplianceAlerts/>

</div>

<IncidentTable/>

<KillSwitch/>

</div>

</Layout>

);

}