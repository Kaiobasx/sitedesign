function verificacaoLogin() {
    const usuario = document.getElementById("Usuario").value.trim();
    const senha = document.getElementById("Senha").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");

    if (usuario === "admin@" && senha === "1234") {
        alert("Login realizado com sucesso!");
        mensagemErro.textContent = "";
        window.location.href = "ahome.html";
    } else {
        alert("Usuário ou senha inválidos!");
        mensagemErro.textContent = "Usuário ou senha incorretos!";
        mensagemErro.style.color = "red";
    }
}
function buscarEndereco() {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado.");
            } else {

                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            }
        })
        .catch(error => console.error("Erro ao buscar dados do CEP:", error));
}