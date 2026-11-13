const API="https://jsonplaceholder.typicode.com/users";
let users=[];
const status=document.querySelector("#status"),grid=document.querySelector("#grid"),search=document.querySelector("#search");
async function loadUsers(){
  status.textContent="Loading users…";grid.replaceChildren();search.disabled=true;
  try{
    const response=await fetch(API);
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const data=await response.json();
    if(!Array.isArray(data))throw new Error("Unexpected API response");
    users=data;search.disabled=false;render(users);
    status.textContent=`Loaded ${users.length} users.`;status.className="status success";
  }catch(error){status.textContent=`Could not load users: ${error.message}`;status.className="status error";}
}
function render(items){
  if(!items.length){grid.textContent="No matching users.";return;}
  const cards=items.map(user=>{
    const card=document.createElement("article");card.className="user panel";
    const name=document.createElement("h3");name.textContent=user.name??"Unknown";
    const email=document.createElement("p");email.textContent=user.email??"No email";
    const company=document.createElement("small");company.textContent=user.company?.name??"Company not provided";
    card.append(name,email,company);return card;
  });
  grid.replaceChildren(...cards);
}
search.addEventListener("input",()=>{
  const q=search.value.trim().toLowerCase();
  render(users.filter(user=>[user.name,user.username,user.email].some(value=>value?.toLowerCase().includes(q))));
});
document.querySelector("#load").addEventListener("click",loadUsers);
