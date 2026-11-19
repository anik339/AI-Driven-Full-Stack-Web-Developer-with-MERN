const form=document.querySelector("#form"),status=document.querySelector("#status"),grid=document.querySelector("#grid");
async function searchProducts(query){
  status.textContent="Searching…";grid.replaceChildren();
  try{
    const url=new URL("https://dummyjson.com/products/search");url.searchParams.set("q",query);
    const response=await fetch(url);if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const data=await response.json(),products=data.products??[];
    if(!products.length){status.textContent="No products found.";return;}
    const cards=products.map(({title,description,price,thumbnail,rating})=>{
      const card=document.createElement("article");card.className="product panel";
      const img=document.createElement("img");img.src=thumbnail;img.alt=title;
      const heading=document.createElement("h3");heading.textContent=title;
      const detail=document.createElement("p");detail.textContent=description;
      const priceLine=document.createElement("strong");priceLine.textContent=`$${Number(price).toFixed(2)} · ★ ${rating??"N/A"}`;
      card.append(img,heading,detail,priceLine);return card;
    });
    grid.replaceChildren(...cards);status.textContent=`${products.length} products found.`;status.className="status success";
  }catch(error){status.textContent=`Search failed: ${error.message}`;status.className="status error";}
}
form.addEventListener("submit",event=>{event.preventDefault();searchProducts(document.querySelector("#query").value.trim());});
