function Verificar(){
    let date = new Date()
    let ano = date.getFullYear()
    let txtAno = document.querySelector("input#txtAno")
    let res = document.querySelector("div#res")

    if (txtAno.value.length == 0 || txtAno.value > ano) {
        window.alert("[ERRO] Campo ano vazio ou inválido")
    }
    else{
        let radsex = document.getElementsByName("radsex")
        let idade = ano - Number(txtAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21) {
                //adolescente
                img.setAttribute("src", "foto-jovem-m.png")
            }else if (idade < 50) {
                //adulto
                img.setAttribute("src", "foto-adulto-m.png")
            }else{
                //idoso
                img.setAttribute("src", "foto-idoso-m.png")
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                //criança
                img.setAttribute("src", "foto-bebe-f.png")
            }else if (idade < 21) {
                //adolescente
                img.setAttribute("src", "foto-jovem-f.png")
            }else if (idade < 50) {
                //adulto
                img.setAttribute("src", "foto-adulto-f.png")
            }else{
                //idoso
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} de idade ${idade} anos`
        res.appendChild(img)
    }


}