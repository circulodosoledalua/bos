function fazerLogin() {

	const username = document.getElementById('username').value.trim().toLowerCase();

// Lista de usuários válidos

const usuariosPaginas = {

	'nariel': 'nariel.html',
	'inaie': 'inaie.html',
	'aislimn': 'aislimn.html',
	'aponi': '../pagamento/aponi.html',
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
usuariosAutorizados = ['nariel', 'inaie', 'aislimn', 'aponi', 'vida'];

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


function buscarH3() {
  const termo = document.getElementById("buscaH3").value.toLowerCase();
  const h3s = document.querySelectorAll("h3");

  let encontrou = false;

  h3s.forEach(h3 => {
    h3.classList.remove("highlight");
    if (h3.textContent.toLowerCase().includes(termo)) {
      h3.classList.add("highlight");
      if (!encontrou) {
        h3.scrollIntoView({ behavior: "smooth", block: "center" });
        encontrou = true;
      }
    }
  });
}

