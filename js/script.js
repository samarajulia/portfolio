function copiarEmail() {
    // pega o texto do span mail
    const emailTexto = document.getElementById('mail').innerText

    // copia 
    navigator.clipboard.writeText(emailTexto)

    // balao de copiado 
    const aviso = document.getElementById('aviso')
    aviso.classList.add('mostrar')

    // balao sumir 
    setTimeout(() => {
        aviso.classList.remove('mostrar')
    }, 2000);
}