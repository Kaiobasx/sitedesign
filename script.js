function Cadastro() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmar-senha").value.trim();
    const mensagemErroCadastro = document.getElementById("mensagemErroCadastro");

    if (!nome || !email || !usuario || !senha || !confirmarSenha) {
        mensagemErroCadastro.textContent = "Todos os campos devem ser preenchidos!";
        mensagemErroCadastro.style.color = "red";
        return;
    }

    if (senha !== confirmarSenha) {
        mensagemErroCadastro.textContent = "As senhas não coincidem!";
        mensagemErroCadastro.style.color = "red";
        return;
    }

    // Recupera os usuários já cadastrados
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se já existe esse usuário
    const usuarioExistente = usuarios.find(u => u.usuario === usuario);

    if (usuarioExistente) {
        mensagemErroCadastro.textContent = "Este usuário já está cadastrado!";
        mensagemErroCadastro.style.color = "red";
        return;
    }

    // Salva novo usuário
    usuarios.push({ nome, email, usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "clogin.html";
}

function verificacaoLogin() {
    const usuario = document.getElementById("Usuario").value.trim();
    const senha = document.getElementById("Senha").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");

    // Recupera os dados do usuário do localStorage
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o usuário existe e a senha está correta
    const usuarioValido = usuariosSalvos.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioValido) {
        alert("Login realizado com sucesso!");
        mensagemErro.textContent = "";
        window.location.href = "ahome.html";
    } else {
        alert("Usuário ou senha inválidos!");
        mensagemErro.textContent = "Usuário ou senha incorretos!";
        mensagemErro.style.color = "red";
    }
}
