function fazerLogin() {

	const username = document.getElementById('username').value.trim().toLowerCase();

// Lista de usuários válidos

const usuariosPaginas = {

	'nariel': 'nariel.html',
	'inaie': 'inaie.html',
	'aislimn': 'aislin.html',
};

if (usuariosPaginas[username]) {

// Redireciona para o card da pessoa

window.location.href = usuariosPaginas[username];

} else {

	alert('Usuario inválido!');
}

}






// index


//Lista fixa de usuários autorizados

	const
usuariosAutorizados = ['nariel', 'inaie', 'aislimn'];

document.getElementById('btnAcessar').addEventListener('click', function() {

	const usuario =
document.getElementById('usuario').value.trim().toLowerCase();

	if (usuario === '') {

		alert ('Insira seu nome mágico');
		return;
	}

// Verifica se o usuário está na lista de autorizados

	if (usuariosAutorizados.includes(usuario)) {

// armazena o nome no localStorage

localStorage.setItem('usuarioAutenticado', usuario);

// redireciona para a pagina home

	window.location.href = 'home.html';
} else {

	alert('Acesso Negado');
	}
});



