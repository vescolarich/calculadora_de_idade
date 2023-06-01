function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById("res")

    if(fano.value.lenght ==0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','criançah.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src','jovemh.jpg')
            }else if(idade<60){
                //adulto
                img.setAttribute('src','adultoh.jpg')
            }else{
                img.setAttribute('src','idosoh.jpg')
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','criançam.jpg')
            }else if(idade <21){
                //Jovem
                img.setAttribute('src','jovemm.jpg')
            }else if(idade<60){
                //adulto
                img.setAttribute('src','adultom.jpg')
            }else{
                //idoso
                img.setAttribute('src','idosom.jpg')
            }
        }
        res.innerHTML = ` ${genero} com ${idade} anos`
        res2.appendChild(img)

    }

}