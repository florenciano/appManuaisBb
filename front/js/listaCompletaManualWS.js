/* ===============================================================
	
	MATRIZ DA LISTA DOS MANUAIS

   	Este documento é responsável por alimentar a lista
   	de todos os manuais existentes.

   	Local do arquivo base:
   	U:\TAI\Projetos\Projetos 2014\Reformulacao_manuais\Professor\DI\Para_Producao

   	Nome:
   	_Geral_Estrutura_Menu_Prof_vf.doc

================================================================== */

var manuaisBB = angular.module('manuaisBB', []);

manuaisBB.controller('listaMenu', function ($scope) {

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// CATEGORIA: Conhecendo o ambiente
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbConhecerAmbiente = [
	{
		'categoria' 	: 	'Conhecendo o ambiente',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'		: 	'O que é Blackboard',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/conhecendo-o-ambiente/o-que-e-blackboard/'
	},
	{
		'manual'		: 	'Acessar pelo computador',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/conhecendo-o-ambiente/acessar-pelo-computador/'
	},
	{
		'manual'		: 	'Acessar por dispositivos móveis',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/'
	}
	];

	// CATEGORIA: Materiais
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbMateriais = [
	{
		'categoria' 	: 	'Materiais',
		'manual'		: 	'',
		'linkManual'	: 	'' 
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Carregar materiais no ambiente virtual',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/materiais/carregar-materiais-no-ambiente-virtual/'
	},
	{
		'manual'			: 	'Compartilhar materiais com os alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/materiais/compartilhar-materiais-com-os-alunos/'
	},
	{
		'manual'			: 	'Alterar ou excluir um material compartilhado',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/materiais/alterar-ou-excluir-um-material-compartilhado/'
	},
	{
		'manual'			: 	'Aproveitar materiais de um curso para outro',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/materiais/aproveitar-materiais-de-um-curso-para-outro/'
	}
	];


	// CATEGORIA: Comunicação e Interação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbComunicacaoInteracao = [
	{
		'categoria' 	: 	'Comunicação e Interação',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Enviar avisos aos alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/enviar-avisos-aos-alunos/'
	},
	{
		'manual'			: 	'Enviar e-mail pelo ambiente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/enviar-email-pelo-ambiente/'
	},
	{
		'manual'			: 	'Criar fórum de discussão',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/criar-um-forum-de-discussao/'
	},
	{
		'manual'			: 	'Criar blog',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/criar-um-blog/'
	},
	{
		'manual'			: 	'Criar diário',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/criar-diario/'
	},
	{
		'manual'			: 	'Criar wiki',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/comunicacao-e-interacao/criar-wiki/'
	}
	];

	// CATEGORIA: Trabalhos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbTrabalhos = [
	{
		'categoria' 	: 	'Trabalhos',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Receber trabalhos sem verificação de plágio (Exercício)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/trabalhos/receber-trabalhos-sem-verificacao-de-plagio/'
	},
	{
		'manual'			: 	'Receber trabalhos com verificação de plágio (SafeAssignment)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/trabalhos/receber-trabalhos-com-verificacao-de-plagio/'
	},
	{
		'manual'			: 	'Submeter arquivos para verificação de plágio ou criar base de comparação (SafeAssign)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/trabalhos/submeter-arquivos-para-verificacao-de-plagio-ou-criar-base-de-comparacao/'
	}
	];

	// CATEGORIA: Grupos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbGrupos = [
	{
		'categoria' 	: 	'Grupos',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Criar Grupos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/grupos/criar-grupos/'
	}
	];

	// CATEGORIA: Testes e Pesquisas
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbTestesPesquisas = [
	{
		'categoria' 	: 	'Testes e Pesquisas',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Criar ou alterar testes (com nota)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/'
	},
	{
		'manual'			: 	'Criar ou alterar pesquisas (sem nota)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/'
	},
	{
		'manual'			: 	'Conhecer os tipos de pergunta dos testes e pesquisas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/'
	},
	{
		'manual'			: 	'Importar testes e pesquisas do Word',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/'
	},
	{
		'manual'			: 	'Gerar relatórios de testes ',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/testes-e-pesquisas/gerar-relatorios-de-testes/'
	}
	];

	// CATEGORIA: Rubrics
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbRubrics = [
	{
		'categoria' 	: 	'Rubrics',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Criar Rubric',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/rubrics/criar-uma-rubric/'
	},
	{
		'manual'			: 	'Associar Rubric a atividades',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/rubrics/associar-rubric-a-atividades/'
	},
	{
		'manual'			: 	'Associar Rubric a colunas na Central de Notas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/rubrics/associar-rubric-a-colunas-na-central-de-notas/'
	}
	];

	// CATEGORIA: Avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbAvaliacao = [
	{
		'categoria' 	: 	'Avaliação',
		'manual'		: 	'',
		'linkManual'	: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Configurar a Central de Notas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/configurar-a-central-de-notas/'
	},
	{
		'manual'			: 	'Dar nota a atividades feitas fora do ambiente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/dar-nota-a-atividades-feitas-fora-do-ambiente/'
	},
	{
		'manual'			: 	'Calcular a média do aluno',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/calcular-a-media-do-aluno/'
	},
	{
		'manual'			: 	'Corrigir trabalhos sem verificação de plágio (Exercício)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/corrigir-trabalhos-sem-verificacao-de-plagio/'
	},
	{
		'manual'			: 	'Corrigir trabalhos com verificação de plágio (SafeAssignment)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/corrigir-trabalhos-com-verificacao-de-plagio/'
	},
	{
		'manual'			: 	'Avaliar fórum de discussão',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/avaliar-forum-de-discussao/'
	},
	{
		'manual'			: 	'Avaliar blog',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/avaliar-blog/'
	},
	{
		'manual'			: 	'Avaliar diário',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/avaliar-diario/'
	},
	{
		'manual'			: 	'Avaliar wiki',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/avaliar-wiki/'
	},
	{
		'manual'			: 	'Corrigir com Rubric',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/corrigir-com-rubric/'
	},
	{
		'manual'			: 	'Exportar as notas para o sistema acadêmico',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/avaliacao/exportar-as-notas-para-o-sistema-academico/'
	}
	];

	// CATEGORIA: Calendário
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbCalendario = [
	{
		'categoria' 		: 	'Calendario',
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Criar e visualizar eventos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/calendario/criar-e-visualizar-eventos/'
	},
	{
		'manual'			: 	'Sincronizar com e-mail pessoal',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/TAI/Manuais/html/BlackboardWorkshops/calendario/sincronizar-com-email-pessoal/'
	}
	];

});
