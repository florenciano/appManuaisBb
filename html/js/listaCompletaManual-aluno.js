/* ===============================================================
	
	MATRIZ DA LISTA DOS MANUAIS

   	Este documento é responsável por alimentar a lista
   	de todos os manuais existentes.

   	Local do arquivo base:
   	U:\TAI\Projetos\Projetos 2014\Reformulacao_manuais\Professor\DI\Para_Producao

   	Nome:
   	_Geral_Estrutura_Menu_Prof_vf.doc

================================================================== */

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
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/apresentacao/'
	},
	{
		'manual'		: 	'Plágio acidental e plágio intencional',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/acidental-e-intencional/'
	},
	{
		'manual'		: 	'Categorizações de plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/categorizacao/'
	},
	{
		'manual'		: 	'Trabalhos colaborativos ou em grupo',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/trabalhos-colaborativos-ou-em-grupo/'
	},
	{
		'manual'		: 	'Conhecimento comum',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/conhecimento-comum/'
	},
	{
		'manual'		: 	'Como evitar o plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/como-evitar/'
	},
	{
		'manual'		: 	'Documentos e sites consultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/documentos-sites-consultados/'
	},
	{
		'manual'		: 	'Sites recomendados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Plagio-academico/sites-recomendados/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CURSO ONLINE HARVARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.curso_online = [
	{
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Curso-online/apresentacao/'
	},
	{
		'manual'		: 	'Como acessar ',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Curso-online/como-acessar/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CLICKERS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.clikcers = [
	{
		'manual'		: 	'Realizar cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/realizar-cadastro/'
	},
	{
		'manual'		: 	'Participar da votação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Clickers/participar-votacao/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.catme = [
	{
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/apresentacao/'
	},
	{
		'manual'		: 	'Cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/cadastro/'
	},
	{
		'manual'		: 	'Calibragem',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/calibragem/'
	},
	{
		'manual'		: 	'Processo de Avaliação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/processo-avaliacao/'
	},
	{
		'manual'		: 	'Resultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/Catme/resultados/'
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
