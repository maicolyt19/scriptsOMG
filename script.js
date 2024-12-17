function copyToClipboard() {
    // Selecciona el texto del script
    const codeBox = document.querySelector("#codeBox code");
    const text = codeBox.innerText;

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(text).then(() => {
        alert("¡Script copiado al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
