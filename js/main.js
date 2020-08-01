function consultaCep(){

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#localidade").html(response.localidade);     
            $("#bairro").html(response.bairro);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP" + response.cep);

            //document.getElementById("localidade").innerHTML = response.localidade;

            //alert(response.localidade);

        }
    })
}



