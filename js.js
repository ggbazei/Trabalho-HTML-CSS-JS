function limpaDados() {
    document.getElementById('nomeDados').value = '';
	document.getElementById('senhaDados').value = '';
	document.getElementById('sexoDados').value = 'Masculino';
	document.getElementById('telefoneResidencialDados').value = '';
	document.getElementById('celularDados').value = '';
	document.getElementById('fumanteDados').value = 'Sim';
	document.getElementById('dataNascimentoDados').value = 'dd/mm/aaaa';
	document.getElementById('municipioOrigemDados').value = '';
    document.getElementById('emailDados').value = '';
}
function limpaCadastro() {
	document.getElementById('nome').value = '';
	document.getElementById('senha').value = '';
	document.getElementById('sexo').value = 'Masculino';
	document.getElementById('telefoneResidencial').value = '';
	document.getElementById('celular').value = '';
	document.getElementById('fumante').value = 'Sim';
	document.getElementById('dataNascimento').value = 'dd/mm/aaaa';
	document.getElementById('municipioOrigem').value = '';
    document.getElementById('email').value = '';
}
function cadastrar() {
	document.getElementById('nomeDados').value = document.getElementById('nome').value;
	document.getElementById('senhaDados').value = document.getElementById('senha').value;
	document.getElementById('sexoDados').value = document.getElementById('sexo').value;
	document.getElementById('telefoneResidencialDados').value = document.getElementById('telefoneResidencial').value;
	document.getElementById('celularDados').value = document.getElementById('celular').value;;
	document.getElementById('fumanteDados').value = document.getElementById('fumante').value;;
	document.getElementById('dataNascimentoDados').value = document.getElementById('dataNascimento').value;
	document.getElementById('municipioOrigemDados').value = document.getElementById('municipioOrigem').value;;
    document.getElementById('emailDados').value = document.getElementById('email').value;;
}