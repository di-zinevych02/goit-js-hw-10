import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as m}from"./assets/vendor-BbbuE1sJ.js";const h=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let i=null;t.disabled=!0;f("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0],i<=new Date?(t.disabled=!0,m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"})):(t.disabled=!1,m.success({title:"Success",message:"Valid date selected!",position:"topRight"}))}});function s(e){const o=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:u,minutes:d,seconds:y}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));const n=e=>e.toString().padStart(2,"0");t.addEventListener("click",()=>{t.disabled=!0,h.disabled=!0,setInterval(()=>{const l=i-new Date,{days:a,hours:r,minutes:c,seconds:o}=s(l);p.textContent=n(a),S.textContent=n(r),g.textContent=n(c),D.textContent=n(o),[a,r,c,o].every(d=>d===0)&&(clearInterval(intervalBack),h.disabled=!1)},1e3)});
//# sourceMappingURL=1-timer.js.map
