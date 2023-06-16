let fraseP = document.getElementById('fraseDeSaudacao')
let frase =  '';

let data = new Date();
let hora = data.getHours();

if (hora >= 0 && hora < 12)
    frase = 'Bom dia';
else if (hora >= 12 && hora < 18)
    frase = 'Boa tarde';
else if (hora >= 18 && hora <= 23)
    frase = 'Boa noite';

fraseP.innerHTML = frase;