document.addEventListener("DOMContentLoaded", function(){
    
    //faz leitura do botao gravar
    let btn = document.querySelector("#btnGravar");

btn.addEventListener("click", gravar);

    function gravar(){
        //ler todos os campos e valida-los,,,,
        let nome = document.querySelector("#inputNome");
        let email = document.querySelector("#inputEmail");
        let senha = document.querySelector("#inputSenha");
        let perfil = document.querySelector("#selPerfil");
        let ativo = document.querySelector("#cbAtivo");

        //valida de maneira simples.
        if(nome.value != "" && email.value != "" && senha.value != "" && perfil.value != 0){

            // monta o objeto que deve ser enviado ao backend!
            let obj = {
                nome: nome.value,
                email: email.value,
                senha: senha.value,
                perfil: perfil.value,
                ativo: ativo.checked ? "S" : "N"
            };

            //escrita do FetchAPI
            fetch("/usuario/cadastrar", 
                {method: "POST",
                body: JSON.stringify(obj),
                headers: {"Content-Type": "application/json"}
        }).then(function(resposta) {
            console.log(resposta);
            return resposta.json();
        }).then(function(corpoResposta){
            console.log(corpoResposta)
            if(corpoResposta.ok){
                alert("Cadastrado com sucesso")
                window.location.href="/usuario"
            }else{
                alert("Não foi possivel cadastrar")
            }
        })
        }else{
            alert("Preencha corretamente todos os campos do formulario!");
        }
    }
})