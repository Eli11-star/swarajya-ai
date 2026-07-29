import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Passport from "../pages/Passport";
import TrustEngine from "../pages/TrustEngine";
import Ledger from "../pages/Ledger";
import Registry from "../pages/Registry";
import MissionControl from "../pages/MissionControl";
import Verify from "../pages/Verify";
import Analytics from "../pages/Analytics";
import Explainability from "../pages/Explainability";
import Reports from "../pages/Reports";
import Compare from "../pages/Compare";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/passport" element={<Passport />} />
            <Route path="/trust" element={<TrustEngine />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/mission-control" element={<MissionControl />} />
            <Route path="/verify/:id"element={<Verify />}/>
            <Route path="/analytics" element={<Analytics />}/>
            <Route path="/explainability" element={<Explainability />}/>
            <Route path="/reports" element={<Reports />}/>
            <Route path="/compare" element={<Compare />} />
        
         </Routes>
    );
}