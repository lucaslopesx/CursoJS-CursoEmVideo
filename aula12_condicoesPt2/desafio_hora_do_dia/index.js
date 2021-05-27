function Carregar() {
    var now = new Date()
    hora = now.getHours()
    var img = document.querySelector("img#imagem")
    var msg = document.querySelector("div#msg")
    msg.innerHTML += `Agora são ${hora} horas.`
    if (hora > 12) {
        img.src = "fotoprimavera.png"
    }
}