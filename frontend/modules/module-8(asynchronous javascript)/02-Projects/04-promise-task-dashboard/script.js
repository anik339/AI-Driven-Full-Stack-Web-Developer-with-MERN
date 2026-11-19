const jobs=[{name:"Load profile",delay:800,fail:false},{name:"Load messages",delay:1200,fail:false},{name:"Load report",delay:650,fail:true},{name:"Load settings",delay:1000,fail:false}];
const list=document.querySelector("#jobs"),status=document.querySelector("#status");
function run(job){return new Promise((resolve,reject)=>setTimeout(()=>job.fail?reject(new Error(job.name+" failed (demo).")):resolve(job.name+" completed."),job.delay));}
function addResult(name,message,ok){const row=document.createElement("article");row.className=`job ${ok?"ok":"bad"}`;const title=document.createElement("strong");title.textContent=name;const text=document.createElement("p");text.textContent=message;row.append(title,text);list.append(row);}
document.querySelector("#all").addEventListener("click",async()=>{
  list.replaceChildren();status.textContent="Running concurrently…";
  const results=await Promise.allSettled(jobs.map(run));
  results.forEach((result,index)=>addResult(jobs[index].name,result.status==="fulfilled"?result.value:result.reason.message,result.status==="fulfilled"));
  status.textContent=`${results.filter(item=>item.status==="fulfilled").length}/${results.length} succeeded.`;
});
document.querySelector("#race").addEventListener("click",async()=>{
  list.replaceChildren();status.textContent="Waiting for first settled job…";
  try{const result=await Promise.race(jobs.map(run));addResult("First result",result,true);status.textContent="First fulfilled result returned.";}
  catch(error){addResult("First result",error.message,false);status.textContent="First settled Promise rejected.";}
});
document.querySelector("#reset").addEventListener("click",()=>{list.replaceChildren();status.textContent="Ready.";});
