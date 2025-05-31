function fazerLogin() {

	const username = document.getElementById('username').value.trim().toLowerCase();

// Lista de usuários válidos

const usuariosPaginas = {

	'nariel': 'nariel.html',
	'inaie': 'inaie.html',
	'aislin': 'aislin.html',
};

if (usuariosPaginas[username]) {

// Redireciona para o card da pessoa

window.location.href = usuariosPaginas[username];

} else {

	alert('Usuario inválido!');
}

}
