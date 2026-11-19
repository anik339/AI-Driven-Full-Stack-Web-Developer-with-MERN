const KEY="module8-finance";
const money=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});
function load(){try{const data=JSON.parse(localStorage.getItem(KEY)??"[]");return Array.isArray(data)?data:[];}catch{return [];}}
let transactions=load();
function save(){localStorage.setItem(KEY,JSON.stringify(transactions));}
function totals(){return transactions.reduce((sum,{amount,type})=>{sum[type]+=amount;return sum;},{income:0,expense:0});}
function render(){
  const sum=totals();
  document.querySelector("#income").textContent=money.format(sum.income);
  document.querySelector("#expense").textContent=money.format(sum.expense);
  document.querySelector("#balance").textContent=money.format(sum.income-sum.expense);
  const rows=transactions.map(item=>{
    const li=document.createElement("li"),label=document.createElement("span"),amount=document.createElement("strong"),remove=document.createElement("button");
    label.textContent=item.description;amount.textContent=`${item.type==="income"?"+":"−"}${money.format(item.amount)}`;
    remove.textContent="Remove";remove.className="btn danger";remove.dataset.id=item.id;li.append(label,amount,remove);return li;
  });
  document.querySelector("#list").replaceChildren(...rows);document.querySelector("#empty").hidden=transactions.length>0;
}
document.querySelector("#form").addEventListener("submit",event=>{
  event.preventDefault();
  const description=document.querySelector("#description").value.trim(),amount=Number(document.querySelector("#amount").value),type=document.querySelector("#type").value;
  if(!description||!Number.isFinite(amount)||amount<=0){document.querySelector("#status").textContent="Enter a description and amount greater than zero.";return;}
  transactions=[{id:crypto.randomUUID(),description,amount,type},...transactions];save();render();event.target.reset();
});
document.querySelector("#list").addEventListener("click",event=>{
  const button=event.target.closest("button[data-id]");if(!button)return;
  transactions=transactions.filter(item=>item.id!==button.dataset.id);save();render();
});
document.querySelector("#clear").addEventListener("click",()=>{transactions=[];save();render();});
render();
