var manuaisBbAluno = angular.module('manuaisBb-aluno', []);

manuaisBbAluno.controller('materiaisComplementares-aluno', function ($scope) {
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Analisar resultados"
	$scope.Catme_analisarResultados = 
	[
	{
		"manual" 	: 	"CATME Instructor Videos",
		"Link" 		: 	"http://info.catme.org/instructor-videos/",
		"tipoIcone"	: 	"video"
	}
	];

	// "Aplicar uma pesquisa de avaliação"
	$scope.Catme_aplicarPesquisaAvaliacao = 
	[
	{
		"manual" 	: 	"CATME Instructor Videos",
		"Link" 		: 	"http://info.catme.org/instructor-videos/",
		"tipoIcone"	: 	"video"
	}
	];

	// "Sobre a ferramenta"
	$scope.Catme_sobreFerramenta = 
	[
	{
		"manual" 	: 	"CATME Instructor Videos",
		"Link" 		: 	"http://info.catme.org/instructor-videos/",
		"tipoIcone"	: 	"video"
	}
	];
});