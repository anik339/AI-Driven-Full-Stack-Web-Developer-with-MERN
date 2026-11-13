const form=document.querySelector("#form"),status=document.querySelector("#status"),result=document.querySelector("#result");
async function searchUser(name){
  status.textContent="Searching GitHub…";result.replaceChildren();
  try{
    const response=await fetch(`https://api.github.com/users/${encodeURIComponent(name.trim())}`);
    if(response.status===404)throw new Error("User not found.");
    if(response.status===403)throw new Error("GitHub API rate limit reached. Try later.");
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    render(await response.json());status.textContent="Profile loaded.";status.className="status success";
  }catch(error){status.textContent=error.message;status.className="status error";}
}
function render(user){
  const card=document.createElement("article");card.className="profile panel";
  const img=document.createElement("img");img.src=user.avatar_url;img.alt=`${user.login} avatar`;
  const info=document.createElement("div");
  const title=document.createElement("h2");title.textContent=user.name??user.login;
  const bio=document.createElement("p");bio.textContent=user.bio??"No public bio.";
  const stats=document.createElement("p");stats.textContent=`Repositories: ${user.public_repos??0} · Followers: ${user.followers??0} · Following: ${user.following??0}`;
  const link=document.createElement("a");link.href=user.html_url;link.target="_blank";link.rel="noreferrer";link.textContent="Open GitHub profile";
  info.append(title,bio,stats,link);card.append(img,info);result.replaceChildren(card);
}
form.addEventListener("submit",event=>{event.preventDefault();searchUser(document.querySelector("#username").value);});
searchUser("octocat");
