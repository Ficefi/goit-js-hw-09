const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector(".flexbox"),n=document.querySelector("body"),a=document.querySelector("a");let l,o=a.textContent;e.addEventListener("click",(()=>{l=setInterval((()=>{n.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0,t.disabled=!1,a.textContent=""})),t.addEventListener("click",(()=>{clearInterval(l),e.disabled=!1,t.disabled=!0,a.textContent=o})),d.style.display="flex",d.style.justifyContent="center",d.style.marginTop="20%",e.style.padding="10px 20px",t.style.padding="10px 20px";
//# sourceMappingURL=01-color-switcher.65beb723.js.map