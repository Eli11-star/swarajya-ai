const activity=[

"AI Passport Generated",

"Registry Updated",

"Trust Assessment Completed",

"Security Scan Passed",

"Compliance Validated",

"Deployment Approved"

];

export default function ActivityTimeline(){

return(

<div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

<h2 className="text-xl font-bold mb-6">

National Activity Feed

</h2>

<div className="space-y-5">

{activity.map((item,index)=>(

<div
key={index}
className="flex gap-4"
>

<div className="text-blue-400">

●

</div>

<div>

<p>

{item}

</p>

<p className="text-slate-500 text-sm">

Just now

</p>

</div>

</div>

))}

</div>

</div>

);

}