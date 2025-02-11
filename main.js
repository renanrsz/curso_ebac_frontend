const form = document.getElementById('form-maior-menor');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    const mensagemSucesso = `Sucesso: O valor de B: <b>${campoB.value}</b> é maior doque campo A: <b>${campoA.value}`;
    const mensagemErro = `Erro: O valor de A: <b>${campoA.value}</b> é maior doque campo B: <b>${campoB.value}`;

    if(campoA.value > campoB.value){
        //document.querySelector('.error-message').style.display = 'block';

        const containerMenssagemErro = document.querySelector('.error-message');
        containerMenssagemErro.innerHTML = mensagemErro;
        containerMenssagemErro.style.display = 'block';

        campoA.value = '';
        campoB.value = '';

    } else {
        const containerMenssagemSucesso = document.querySelector('.success-message');
        containerMenssagemSucesso.innerHTML = mensagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
});

form.addEventListener('reset', function(e) {
    e.preventDefault();

    window.location.reload(true);
    
});
