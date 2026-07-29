import Card from "../common/Card";
import { ShieldCheck } from "lucide-react";

export default function PassportVerification() {
    return (
        <Card className="mt-8">

            <div className="flex items-center gap-4">

                <ShieldCheck
                    size={36}
                    className="text-green-500"
                />

                <div>

                    <h2 className="text-xl font-bold">
                        Passport Verification
                    </h2>

                    <p className="text-slate-400">
                        This AI Passport has been digitally verified by the
                        SwarajyaAI Trust Engine.
                    </p>

                </div>

            </div>

        </Card>
    );
}