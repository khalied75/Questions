const acrodingContent = document.querySelectorAll(".acroding-items");
acrodingContent.forEach((items)=>
{
    const content = items.querySelector(".acroding-content");
    const acrodingHeader = items.querySelector(".acroding-header");
    const btn = items.querySelector(".btn-toogle");
    acrodingHeader.addEventListener("click", (e) =>
    {
        content.classList.toggle("active");    
        if (btn.innerHTML === "+") {
            btn.innerHTML = "-";
        }
        else
        {
            btn.innerHTML = "+";
         }
        
    });
 });