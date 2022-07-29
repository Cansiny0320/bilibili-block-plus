"use strict";
// ==UserScript==
// @name         b 站黑名单加强
// @description  b 站黑名单加强
// @version      0.1.0
// @namespace    https://github.com/Cansiny0320/bilibili-block-plus
// @author       Cansiny0320 <Cansiny1220@gmail.com>
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @match        https://www.bilibili.com/*
// @supportURL   https://github.com/Cansiny0320/bilibili-block-plus/issues
// @updateURL    https://github.com/Cansiny0320/bilibili-block-plus/raw/master/dist/index.meta.js
// @downloadURL  https://github.com/Cansiny0320/bilibili-block-plus/raw/master/dist/index.user.js
// @run-at       document-start
// @license      MIT License
// @grant        none
// ==/UserScript==

window.blockList = [];

(()=>{var c=e=>{requestAnimationFrame(()=>{e()||requestAnimationFrame(()=>c(e))})},m=({selector:e,onChange:r})=>{c(()=>{let n=!1,t=document.querySelector(e);if(!t)return n;n=!0;let o={attributes:!0,childList:!0,subtree:!0},s=function(){r==null||r()};return new MutationObserver(s).observe(t,o),n})};var i=e=>{let r=!1,n=Array.from(document.querySelectorAll(".up-name__text"));return n.length||(n=Array.from(document.querySelectorAll(".detail a"))),n.length&&(r=!0),n.filter(t=>t.textContent&&e.includes(t.innerText)).map(t=>{var o,s,a;return(a=(s=(o=t.parentElement)==null?void 0:o.parentElement)==null?void 0:s.parentElement)==null?void 0:a.parentElement}).forEach(t=>t==null?void 0:t.remove()),r},u=e=>{c(()=>i(e)),m({selector:".nav-tabs",onChange:()=>i(e)})};var p=e=>{let r=!1,n=Array.from(document.querySelectorAll(".reply-list .reply-item .user-name"));return n.length>0&&(r=!0),n.forEach(o=>{var s,a,l;o.textContent&&e.includes(o.textContent)&&((l=(a=(s=o.parentElement)==null?void 0:s.parentElement)==null?void 0:a.parentElement)==null||l.remove())}),Array.from(document.querySelectorAll(".sub-reply-item .sub-user-name")).forEach(o=>{var s,a;o.textContent&&e.includes(o.textContent)&&((a=(s=o.parentElement)==null?void 0:s.parentElement)==null||a.remove())}),r},d=e=>{let r=!1,n=Array.from(document.querySelectorAll(".card-box"));return n.length>0&&(r=!0),n.forEach(t=>{var s;let o=(s=t.querySelector(".name"))==null?void 0:s.textContent;o&&e.includes(o)&&t.remove()}),r},f=e=>{c(()=>p(e)),m({selector:".reply-list",onChange:()=>p(e)}),c(()=>d(e)),m({selector:".rec-list",onChange:()=>d(e)})};var v=window.blockList,E={popular:[u],video:[f]},b=()=>{let e=window.location.pathname;Object.keys(E).some(r=>e.includes(r)?(E[r].forEach(t=>t(v)),!0):!1)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();})();
