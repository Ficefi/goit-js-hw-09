!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),d=document.querySelector(".flexbox"),o=document.querySelector("body"),a=document.querySelector("a"),l=a.textContent;e.addEventListener("click",(function(){t=setInterval((function(){o.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,n.disabled=!1,a.textContent=""})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,n.disabled=!0,a.textContent=l})),d.style.display="flex",d.style.justifyContent="center",d.style.marginTop="20%",e.style.padding="10px 20px",n.style.padding="10px 20px"}();
//# sourceMappingURL=01-color-switcher.62f0e664.js.map
