// Remember to import the data and Dog class!

import { dogsData } from "./data.js";


function renderDogs(){
    getDogHtml(dogsData.Rex)
}





function getDogHtml(data) {
document.getElementById("body").innerHTML = `
    <section style="background-image: url(${data.avatar})">
  <div>${data.name}, <span>${data.age}</span></div>
  <div id="bio">${data.bio}</div>
</section>
<div class="bttm-icons">
  <img id="cross-btn" src="images/icon-cross.png" alt="icon cross" />
  <img id="hearth-btn" src="images/icon-heart.png" alt="icon heart" />
</div>
    `;
}

renderDogs()