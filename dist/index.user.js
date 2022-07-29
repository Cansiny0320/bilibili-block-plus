"use strict";
// ==UserScript==
// @name         b 站黑名单加强
// @description  b 站黑名单加强
// @version      0.2.0
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

(()=>{var c=e=>{requestAnimationFrame(()=>{e()||requestAnimationFrame(()=>c(e))})},m=({selector:e,onChange:r})=>{c(()=>{let t=!1,n=document.querySelector(e);if(!n)return t;t=!0;let o={attributes:!0,childList:!0,subtree:!0},s=function(){r==null||r()};return new MutationObserver(s).observe(n,o),t})},l=(e,r)=>e.some(t=>t instanceof RegExp?t.test(r):t===r);var u=e=>{let r=!1,t=Array.from(document.querySelectorAll(".bili-video-card.is-rcmd"));return t.length>0&&(r=!0),t.forEach(n=>{var s;let o=(s=n.querySelector(".bili-video-card__info--author"))==null?void 0:s.textContent;o&&l(e,o)&&n.remove()}),r},p=e=>{c(()=>u(e)),m({selector:".recommend-container__2-line",onChange:()=>u(e)})};var d=e=>{let r=!1,t=Array.from(document.querySelectorAll(".up-name__text"));return t.length||(t=Array.from(document.querySelectorAll(".detail a"))),t.length&&(r=!0),t.filter(n=>n.textContent&&l(e,n.innerText)).map(n=>{var o,s,a;return(a=(s=(o=n.parentElement)==null?void 0:o.parentElement)==null?void 0:s.parentElement)==null?void 0:a.parentElement}).forEach(n=>n==null?void 0:n.remove()),r},f=e=>{c(()=>d(e)),m({selector:".nav-tabs",onChange:()=>d(e)})};var g=e=>{let r=!1,t=Array.from(document.querySelectorAll(".reply-list .reply-item .user-name"));return t.length>0&&(r=!0),t.forEach(o=>{var s,a,i;o.textContent&&e.includes(o.textContent)&&((i=(a=(s=o.parentElement)==null?void 0:s.parentElement)==null?void 0:a.parentElement)==null||i.remove())}),Array.from(document.querySelectorAll(".sub-reply-item .sub-user-name")).forEach(o=>{var s,a;o.textContent&&l(e,o.textContent)&&((a=(s=o.parentElement)==null?void 0:s.parentElement)==null||a.remove())}),r},E=e=>{let r=!1,t=Array.from(document.querySelectorAll(".card-box"));return t.length>0&&(r=!0),t.forEach(n=>{var s;let o=(s=n.querySelector(".name"))==null?void 0:s.textContent;o&&l(e,o)&&n.remove()}),r},h=e=>{c(()=>g(e)),m({selector:".reply-list",onChange:()=>g(e)}),c(()=>E(e)),m({selector:".rec-list",onChange:()=>E(e)})};var x=window.blockList,v={popular:[f],video:[h],"/":[p]},b=()=>{let e=window.location.pathname;Object.keys(v).some(r=>e.includes(r)?(v[r].forEach(n=>n(x)),!0):!1)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();})();
