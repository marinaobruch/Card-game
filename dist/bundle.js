(()=>{"use strict";const t=t=>{let e,s=t.length;for(;0!==s;)e=Math.floor(Math.random()*s),s--,[t[s],t[e]]=[t[e],t[s]];return t},e=document.querySelector(".header"),s=document.querySelector(".game-section__container"),n=()=>{e.innerHTML="",s.innerHTML='\n        <form class="common-block center">\n            <h1 class="common-text">Выбери сложность</h1>\n            <div class="common-options options-form">\n\n                <label for="1">\n                    <div class="item">\n                        <input class="input" id="1" name="item" value="1" type="radio">\n                        1\n                    </div>\n                </label>\n\n                <label for="2">\n                    <div class="item">\n                        <input class="input" id="2" name="item" value="2" type="radio">\n                        2\n                    </div>\n                </label>\n\n                <label for="3">\n                    <div class="item">\n                        <input class="input" id="3" name="item" value="3" type="radio">\n                        3\n                    </div>\n                </label>\n\n            </div>\n            <button type="submit" class="start-button" disabled>Старт</button>\n        </form>\n        ';const a=document.querySelector(".options-form"),c=document.querySelector(".start-button"),i=document.querySelectorAll(".item");for(const t of i)t.addEventListener("click",(function(){for(const t of i)t.classList.remove("select-border");this.classList.add("select-border")}));a.addEventListener("change",(t=>{t.target.matches('input[type="radio"]')&&(c.disabled=!1)})),c.addEventListener("click",(()=>{const s=a.querySelector('input[type="radio"]:checked').value;console.log(s),(s=>{let a=null,c=null,i=!0,l=!1;const o=document.createElement("button");o.textContent="Начать заново",o.classList.add("restart-btn");const r=document.createElement("div");r.textContent="00.00",r.classList.add("timer-count");const d=document.querySelector(".game-section__container"),p=document.createElement("div");p.classList.add("game-table");const u=document.createElement("button");u.textContent="Показать карты",u.classList.add("show-btn");const m=(e=>{const s=["static/6_baptize.png","static/7_baptize.png","static/8_baptize.png","static/9_baptize.png","static/10_baptize.png","static/jack_baptize.png","static/queen_baptize.png","static/king_baptize.png","static/ace_baptize.png","static/6_bubi.png","static/7_bubi.png","static/8_bubi.png","static/9_bubi.png","static/10_bubi.png","static/jack_bubi.png","static/queen_bubi.png","static/king_bubi.png","static/ace_bubi.png","static/6_hearst.png","static/7_hearst.png","static/8_hearst.png","static/9_hearst.png","static/10_hearst.png","static/jack_hearst.png","static/queen_hearst.png","static/king_hearst.png","static/ace_hearst.png","static/6_spades.png","static/7_spades.png","static/8_spades.png","static/9_spades.png","static/10_spades.png","static/jack_spades.png","static/queen_spades.png","static/king_spades.png","static/ace_spades.png"];switch(e){case"1":return t(s).slice(0,3);case"2":return t(s).slice(0,6);case"3":return t(s).slice(0,9)}})(s),b=m.reduce(((t,e)=>t.concat([e,e])),[]);d.innerHTML="",e.innerHTML="",u.classList.remove("disabled"),t(b),b.forEach((t=>p.append(((t,e)=>{const s=document.createElement("div");s.classList.add("game-card");const n=document.createElement("img"),a=document.createElement("img");return n.setAttribute("src","static/back.jpg"),a.setAttribute("src",`${e}`),s.append(a,n),s})(0,t)))),e.append(r,o),d.append(p,u);const g=document.querySelectorAll(".game-card");o.addEventListener("click",n),u.addEventListener("click",(()=>{!1===l&&(setTimeout((()=>{g.forEach((t=>t.classList.remove("flip"))),u.classList.add("disabled")}),5e3),g.forEach((t=>t.classList.add("flip"))),l=!0)})),g.forEach(((t,e)=>t.addEventListener("click",(()=>{!0!==i||t.classList.contains("successfully")||(t.classList.add("flip"),null===a?a=e:e!==a&&(c=e,i=!1),null!==a&&null!==c&&a!==c&&(g[a].firstElementChild.src===g[c].firstElementChild.src?setTimeout((()=>{g[a].classList.add("successfully"),g[c].classList.add("successfully"),a=null,c=null,i=!0}),500):setTimeout((()=>{g[a].classList.remove("flip"),g[c].classList.remove("flip"),a=null,c=null,i=!0}),500)))}))))})(s)}))};n()})();