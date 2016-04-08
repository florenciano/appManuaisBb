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
		'manual'		: 	'Apresentação do curso online de Havard',
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
		'manual'		: 	'Realizar cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/'
	},
	{
		'manual'		: 	'Participar da votação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/#subTitulo1'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.catme = [
	{
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
	},
	{
		'manual'		: 	'Cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
	},
	{
		'manual'		: 	'Calibragem',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
	},
	{
		'manual'		: 	'Processo de Avaliação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
	},
	{
		'manual'		: 	'Resultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/'
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
