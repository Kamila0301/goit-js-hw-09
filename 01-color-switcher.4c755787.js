!function(){var t=document.querySelector("[data-stop]"),e=document.querySelector("[data-start]"),r=document.querySelector("body"),n=null;function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor=t}e.addEventListener("click",(function(){n=setInterval(o,1e3),e.toggleAttribute("disabled")})),t.addEventListener("click",(function(){clearInterval(n),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.4c755787.js.map