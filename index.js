// Remember to import the data and Dog class!

import { dogs } from "./data.js"




    















function getDogHtml(){
document.getElementById("body").innerHTML = `
<section style="background-image: url(${avatar})">
      <div>${name}, <span>${age}</span></div>
      <div id="bio">${bio}</div>
    </section>
    <div class="bttm-icons">
      <img src="images/icon-cross.png" alt="icon cross" />
      <img src="images/icon-heart.png" alt="icon heart" />
    </div>
`
}

getDogHtml()