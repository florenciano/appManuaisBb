var manuaisBbAluno = angular.module('manuaisBb-aluno', []);

manuaisBbAluno.controller('listaMenu', function ($scope) {

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.blackboard = [
	{
		'manual'		: 	'Como acessar',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/como-acessar/'
	},
	{
		'manual'		: 	'Navegação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/navegacao/'
	},
	{
		'manual'		: 	'Configurações pessoais',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/configuracoes-pessoais/'
	},
	{
		'manual'		: 	'Ambiente das disciplinas',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/ambiente-disciplinas/'
	},
	{
		'manual'		: 	'Participação em atividades',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/participacao-atividades/'
	},
	{
		'manual'		: 	'Disciplinas online',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/disciplinas-online/'
	},
	{
		'manual'		: 	'Calendário',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/calendario/'
	},
	{
		'manual'		: 	'Webconferência',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Blackboard/webconferencia/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: PLAGIO ACADEMICO
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.plagio_academico = [
	{
		'manual'		: 	'Apresentação da Cartilha de Plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/'
	},
	{
		'manual'		: 	'Plágio acidental e plágio intencional',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo3'
	},
	{
		'manual'		: 	'Categorizações de plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo4'
	},
	{
		'manual'		: 	'Trabalhos colaborativos ou em grupo',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo8'
	},
	{
		'manual'		: 	'Conhecimento comum',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo10'
	},
	{
		'manual'		: 	'Como evitar o plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo11'
	},
	{
		'manual'		: 	'Documentos e sites consultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo12'
	},
	{
		'manual'		: 	'Sites recomendados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/#subTitulo13'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CURSO ONLINE HARVARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.curso_online = [
	{
		'manual'		: 	'Apresentação dos cursos',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Curso-online/'
	},
	{
		'manual'		: 	'Como acessar ',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Curso-online/#subTitulo1'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CLICKERS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.clikcers = [
	{
		'manual'		: 	'Apresentação dos votadores',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/'
	},
	{
		'manual'		: 	'Realizar cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/#subTitulo1'
	},
	{
		'manual'		: 	'Participar da votação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/#subTitulo2'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.catme = [
	{
		'manual'		: 	'Apresentação do Catme',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
	},
	{
		'manual'		: 	'Cadastro na ferramenta',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/#subTitulo1'
	},
	{
		'manual'		: 	'Calibragem',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/#subTitulo2'
	},
	{
		'manual'		: 	'Processo de Avaliação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/#subTitulo3'
	},
	{
		'manual'		: 	'Resultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/#subTitulo4'
	}
	];

	$scope.addMark = function(str) {
		var title = $(".nameCategory"), links = $(".sublist").find("a");
        links.each( function() {
            if($(this).text() == $(title).text()) {
                $(this).parent().addClass("selectedCategory");
            }
        });
    }
});

/*
	Apply italic in determinate words in nav menu
*/
function applyItalicWords (str) {
	// case add news words..
	for (var i = 0; i < arguments.length; i++) {
		replaceTerm(arguments[i]);
	}

	function replaceTerm (word) {
		 var a = document.querySelectorAll(".sublist a"),
	    	term = new RegExp(word,"g"), // in case of multiple occurrence per item
	    	txt;

	    for (var j = 0; j < a.length; j++) {
	    	txt = a[j].textContent; // take content text

	    	// if found item...
	        if (txt.search(term) >= 0 ) {
	        	// add around term the tag <em>
	        	txt = txt.replace(term,"<em>"+word+"</em>");
	        	// apply
	        	a[j].innerHTML = txt;
	        }
	    }
	}
}
window.onload = function() {
	// call fn() with many parameters as you want, ex:("foo", "foo2", ...)
	// OBS: case sensitive
    applyItalicWords("online");
}

manuaisBbAluno.controller('materiaisComplementares-aluno', function ($scope) {
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Analisar resultados"
	$scope.Catme_analisarResultados = 
	[
	{
		"manual" 	: 	"CATME Student Videos",
		"Link" 		: 	"http://info.catme.org/catme-student-videos/",
		"tipoIcone"	: 	"video"
	}
	];

	// "Aplicar uma pesquisa de avaliação"
	$scope.Catme_aplicarPesquisaAvaliacao = 
	[
	{
		"manual" 	: 	"CATME Student Videos",
		"Link" 		: 	"http://info.catme.org/catme-student-videos/",
		"tipoIcone"	: 	"video"
	}
	];

	// "Sobre a ferramenta"
	$scope.Catme_sobreFerramenta = 
	[
	{
		"manual" 	: 	"CATME Student Videos",
		"Link" 		: 	"http://info.catme.org/catme-student-videos/",
		"tipoIcone"	: 	"video"
	}
	];
});