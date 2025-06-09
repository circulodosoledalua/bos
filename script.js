function fazerLogin() {

	const username = document.getElementById('username').value.trim().toLowerCase();

// Lista de usuários válidos

const usuariosPaginas = {

	'nariel1308': 'drive/driveindex.html',
	'inaie7':'drive/driveindex.html',
	'aislimn26': 'drive/driveindex.html',
	'aponi': 'drive/driveindex.html',
	'adarah': 'drive/driveindex.html',
	'vida0514': 'drive/driveindex.html',
	'tica': 'drive/driveindex.html',
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
usuariosAutorizados = ['nariel', 'inaie', 'aislimn', 'aponi', 'vida', 'adarah', 'tica'];

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



//  busca dos cristais 

function buscarCristal() {
  const termo = document.getElementById("buscaInput").value.toLowerCase();
  const ids = ["cristal", "ametista", "citrino", "onix"];

  const encontrado = 
  ids.find(id => id.toLowerCase().includes(termo));

  if (encontrado){

	document.getElementById(encontrado).scrollIntoView({behavior: 'smooth'});
  } else {
	alert("Pedra não encontrada");
  }
}


// busca para as ervas agora

function buscarErva() {
	const termo =
	document.getElementById("buscaInput").value.toLowerCase();

	const ids = ["mirra", "camomila", "hortelã"];

	const encontrado = ids.find(id => id.includes(termo));

	if (encontrado) {
		document.getElementById(encontrado).scrollIntoView({behavior: 'smooth'});
	} else {
		alert("Erva não encontrada");
	}
	}
