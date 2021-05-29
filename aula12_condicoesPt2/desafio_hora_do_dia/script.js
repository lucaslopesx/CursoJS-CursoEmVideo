function Carregar() {
    var now = new Date()
    hora = now.getHours()
    var img = document.querySelector("img#imagem")
    var msg = document.querySelector("div#msg")
    msg.innerHTML += `Agora são ${hora} horas.`
    if (hora > 5 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.backgroundColor = "lightsalmon"
    }else if(hora >= 12 && hora < 18){
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "darkorange"
    }else {
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = "darkblue"
    }
}