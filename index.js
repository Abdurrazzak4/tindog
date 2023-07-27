// Remember to import the data and Dog class!

import { dogs } from "./data.js"





document.querySelector("#cross-btn").addEventListener("click", getDogHtml())
function getDogHtml() {
  let i = 0;
    
      document.querySelector("#body").innerHTML = `
    <section style="background-image: url(${dogs[i].avatar})">
      <div>${dogs[i].name}, <span>${dogs[i].age}</span></div>
      <div id="bio">${dogs[i].bio}</div>
    </section>
    <div class="bttm-icons">
      <img id="cross-btn" src="images/icon-cross.png" alt="icon cross" />
      <img id="hearth-btn" src="images/icon-heart.png" alt="icon heart" />
    </div>
    
`}

  getDogHtml()