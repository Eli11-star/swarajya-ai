const alerts=[

{
title:"WaferVision AI",
status:"Healthy",
color:"text-green-400"
},

{
title:"CitizenGPT",
status:"Monitoring",
color:"text-yellow-400"
},

{
title:"AgriVision",
status:"Approved",
color:"text-green-400"
},

{
title:"HealthAssist",
status:"Policy Review",
color:"text-red-400"
}

];

export default function LiveAlerts(){

return(

<div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

<h2 className="text-xl font-bold mb-5">

Live AI Systems

</h2>

<div className="space-y-5">

{alerts.map((item)=>(
<div
key={item.title}
className="flex justify-between"
>

<span>

{item.title}

</span>

<span className={item.color}>

● {item.status}

</span>

</div>
))}

</div>

</div>

);

}