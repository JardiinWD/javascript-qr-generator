/* console.log("Ciao"); */

/* Dichiaro una variabile wrapper dove vado a pescare il mio div */
const wrapper = document.querySelector(".wrapper")
/* Dichiaro il button per la generazione del QR */
/* Essendo il button parente di wrapper lo pesco da li */
generateBtn = wrapper.querySelector(".form button")
console.log("Questo è il button presente dentro a form");
console.log(generateBtn);

/* Ora al mio button devo lasciare un evento a cui reagire */
generateBtn.addEventListener("click", () => {
    console.log("Sono stato premuto");
})