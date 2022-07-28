"use strict";// ==UserScript==
// @name         b 站黑名单加强
// @description  b 站黑名单加强
// @version      0.0.1
// @namespace    https://github.com/Cansiny0320/bilibili-block-plus
// @author       Cansiny0320
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @match        https://www.bilibili.com/*
// @supportURL   https://github.com/Cansiny0320/bilibili-block-plus/issues
// @installURL   https://github.com/Cansiny0320/bilibili-block-plus
// @updateURL    https://github.com/Cansiny0320/bilibili-block-plus/dist/index.meta.js
// @downloadURL  https://github.com/Cansiny0320/bilibili-block-plus/dist/index.user.js
// @run-at       document-start
// @license      MIT License
// @grant        none
// ==/UserScript==

window.blockList = [];

(()=>{var m=t=>{let n=document.querySelector(".nav-tabs");console.log(n);let o={attributes:!0,childList:!0,subtree:!0},e=function(r){for(let s of r)s.type==="attributes"&&t()};n&&new MutationObserver(e).observe(n,o)},a=t=>{let n=!1;requestAnimationFrame(()=>{let o=Array.from(document.querySelectorAll(".up-name__text"));o.length||(o=Array.from(document.querySelectorAll(".detail a"))),o.length&&(n=!0),o.filter(e=>e.textContent&&t.includes(e.innerText)).map(e=>{var r,s,c;return(c=(s=(r=e.parentElement)==null?void 0:r.parentElement)==null?void 0:s.parentElement)==null?void 0:c.parentElement}).forEach(e=>e==null?void 0:e.remove()),n||requestAnimationFrame(()=>a(t))})},i=t=>{a(t),m(()=>a(t))};var d=window.blockList,l={popular:[i]},u=()=>{let t=window.location.pathname;Object.keys(l).some(n=>t.includes(t)?(l[n].forEach(e=>e(d)),!0):!1)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();})();
