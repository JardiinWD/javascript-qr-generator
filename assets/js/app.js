/* console.log("Ciao"); */

/* Dichiaro una variabile wrapper dove vado a pescare il mio div */
const wrapper = document.querySelector(".wrapper")
/* Dichiaro il button per la generazione del QR */
/* Essendo il button parente di wrapper lo pesco da li */
generateBtn = wrapper.querySelector(".form button")
console.log("Questo è il button presente dentro a form");
console.log(generateBtn);
/* Dichiaro la costante che va a pescare l'input */
qrInput = wrapper.querySelector(".form input")
/* QR Image */
qrImg = wrapper.querySelector(".qr-code img")


/* Ora al mio button devo lasciare un evento a cui reagire */
generateBtn.addEventListener("click", () => {
    /* console.log("Sono stato premuto"); */
    let qrValue = qrInput.value
    console.log(`Questa è la verifica del valore di qrValue ${qrValue}`);
    /* Prevenire il click dell'utente in caso di input vuoto */
    if (!qrValue) return; // Se l'input fosse vuoto/undefined non ritorna la classe Active

    /* Al button, sul click il cambio testo durante caricamento */
    generateBtn.innerText = "Sto generando il QR Code.."

    /* Ora percorso del QR Code Generator con cambiamento alla query 
    in base a ciò che viene scritto dall'utente */
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    /* Ora lascio un evento alla mia immagine, al caricamento viene aggiunta
    la classe active */
    qrImg.addEventListener("load", () => {
        /* In questo modo al mio wrapper lascio la classe active nel 
        momento in cui il pulsante viene premuto*/
        wrapper.classList.add("active")
        /* Al button, sul click il cambio testo durante caricamento */
        generateBtn.innerText = "Genera il QR Code"
    })
})

/* Evento all'input in caso di click solo su tastiera (quindi enter senza nulla) */
qrInput.addEventListener("keyup", () => {
    /* Se l'input non andasse a buon fine */
    if (!qrValue.value) {
        /* Rimuovo la classe active */
        wrapper.classList.remove("active")
    }
})