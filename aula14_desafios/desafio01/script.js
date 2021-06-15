function Count(){
    let ini = document.querySelector("input#txtIni").value
    let end = document.querySelector("input#txtEnd").value
    let feet = document.querySelector("input#txtFeet").value

    let msg = document.querySelector("div#msg");
    for (let i = ini; i < end; i + feet) {
        msg.innerHTML = `a`
    }
}
    
