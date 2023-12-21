$(document).ready(function() {
    $('#teste').click(function(event) {
        event.preventDefault(); 

        var cep = $('#cep').val();

        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(retorno) {
            if (!('erro' in retorno)) {
                $('#rua').text(retorno.logradouro);
                $('#bairro').text(retorno.bairro);
                $('#cidade').text(retorno.localidade);
                $('#uf').text(retorno.uf);
                $('#ibge').text(retorno.ibge);
            } else {
                alert('CEP não encontrado!');
            }
        });
    });
});
