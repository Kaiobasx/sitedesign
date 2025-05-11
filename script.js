function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (!nome || !email || !usuario || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find(u => u.email === email);
    if (usuarioExistente) {
        alert('Este email já está cadastrado.');
        return;
    }

    const novoUsuario = { nome, email, usuario, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuário cadastrado com sucesso!');
    window.location.href = 'ahome.html';
}

function verificacaoLogin() {
    const usuario = document.getElementById('Usuario').value.trim();
    const senha = document.getElementById('Senha').value.trim();
    const mensagemErro = document.getElementById('mensagemErro');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioValido) {
        alert('Login realizado com sucesso!');
        mensagemErro.textContent = '';
        window.location.href = 'ahome.html';
    } else {
        alert('Usuário ou senha inválidos!');
        mensagemErro.textContent = 'Usuário ou senha incorretos!';
        mensagemErro.style.color = 'red';
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




