import Card from "../common/Card";
import { CalendarClock } from "lucide-react";

export default function EvaluationTimeline() {
  const events = [
    {
      title: "Document Uploaded",
      time: "10:02 AM",
      status: "completed",
    },
    {
      title: "PDF Parsed",
      time: "10:03 AM",
      status: "completed",
    },
    {
      title: "AI Governance Analysis",
      time: "10:04 AM",
      status: "completed",
    },
    {
      title: "Risk Assessment",
      time: "10:05 AM",
      status: "completed",
    },
    {
      title: "Trust Score Generated",
      time: "10:06 AM",
      status: "completed",
    },
    {
      title: "Passport Issued",
      time: "10:07 AM",
      status: "completed",
    },
  ];

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <CalendarClock className="text-blue-500" size={28} />
        <h2 className="text-2xl font-bold">
          Evaluation Timeline
        </h2>
      </div>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {event.title}
              </h3>

              <p className="text-sm text-slate-400">
                {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}