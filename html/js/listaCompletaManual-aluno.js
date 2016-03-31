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
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/apresentacao/'
	},
	{
		'manual'		: 	'Plágio acidental e plágio intencional',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/acidental-e-intencional/'
	},
	{
		'manual'		: 	'Categorizações de plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/categorizacao/'
	},
	{
		'manual'		: 	'Trabalhos colaborativos ou em grupo',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/trabalhos-colaborativos-ou-em-grupo/'
	},
	{
		'manual'		: 	'Conhecimento comum',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/conhecimento-comum/'
	},
	{
		'manual'		: 	'Como evitar o plágio',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/como-evitar/'
	},
	{
		'manual'		: 	'Documentos e sites consultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/documentos-sites-consultados/'
	},
	{
		'manual'		: 	'Sites recomendados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/plagio-academico/sites-recomendados/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CURSO ONLINE HARVARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.curso_online = [
	{
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/curso-online/apresentacao/'
	},
	{
		'manual'		: 	'Como acessar ',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/curso-online/como-acessar/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CLICKERS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.clikcers = [
	{
		'manual'		: 	'Realizar cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/clikcers/realizar-cadastro/'
	},
	{
		'manual'		: 	'Participar da votação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/clikcers/participar-votacao/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	$scope.catme = [
	{
		'manual'		: 	'Apresentação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/catme/apresentacao/'
	},
	{
		'manual'		: 	'Cadastro',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/catme/cadastro/'
	},
	{
		'manual'		: 	'Calibragem',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/catme/calibragem/'
	},
	{
		'manual'		: 	'Processo de Avaliação',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/catme/processo-avaliacao/'
	},
	{
		'manual'		: 	'Resultados',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/aluno/catme/resultados/'
	}
	];

	/*
        Esta função add o '.selectedCategory' no menu
        incluir na marcação class='ng-class: addMark()'
        Atribuir apenas na categoria referente ao manual
    */
	$scope.addMark = function() {
        var title = $(".nameCategory");
        var links = $(".sublist").find("a");

        links.each( function () {
            if( $(this).text() == $(title).text() ) {
                $(this).parent().addClass("selectedCategory");
            }
        });
	}
	
});
