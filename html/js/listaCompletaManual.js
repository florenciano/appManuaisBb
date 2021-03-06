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
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/o-que-e-blackboard/'
	},
	{
		'manual'		: 	'Acessar pelo computador',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-pelo-computador/'
	},
	{
		'manual'		: 	'Acessar por dispositivos móveis',
		'linkManual'	: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/conhecendo-o-ambiente/acessar-por-dispositivos-moveis/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/carregar-materiais-no-ambiente-virtual/'
	},
	{
		'manual'			: 	'Compartilhar materiais com os alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/compartilhar-materiais-com-os-alunos/'
	},
	{
		'manual'			: 	'Alterar ou excluir um material compartilhado',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/alterar-ou-excluir-um-material-compartilhado/'
	},
	{
		'manual'			: 	'Aproveitar materiais de um curso para outro',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/materiais/aproveitar-materiais-de-um-curso-para-outro/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/enviar-avisos-aos-alunos/'
	},
	{
		'manual'			: 	'Enviar e-mail pelo ambiente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/enviar-email-pelo-ambiente/'
	},
	{
		'manual'			: 	'Planejar uma discussão via fórum',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/planejar-discussao-via-forum/'
	},
	{
		'manual'			: 	'Criar fórum de discussão',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-forum-de-discussao/'
	},
	{
		'manual'			: 	'Criar blog',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-um-blog/'
	},
	{
		'manual'			: 	'Criar diário',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-diario/'
	},
	{
		'manual'			: 	'Criar wiki',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/criar-wiki/'
	},
	{
		'manual'			: 	'Exemplos de dinâmicas – atividades colaborativas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/comunicacao-e-interacao/exemplos-dinamicas/'
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
		'manual'			: 	'Receber trabalhos com ou sem verificação de plágio (Exercício)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-ou-sem-verificacao-de-plagio/'
	},
	// {
	// 	'manual'			: 	'Receber trabalhos com verificação de plágio (SafeAssignment)',
	// 	'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-com-verificacao-de-plagio/'
	// },
	{
		'manual'			: 	'Receber trabalhos para autoavaliação e avaliação de colegas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/receber-trabalhos-para-autoavaliacao-e-avaliacao-de-colegas/'
	},
	{
		'manual'			: 	'Submeter arquivos para verificação de plágio ou criar base de comparação (SafeAssign)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/trabalhos/submeter-arquivos-para-verificacao-de-plagio-ou-criar-base-de-comparacao/'
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
		'manual'			: 	'Criar ou alterar grupos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/grupos/criar-alterar-grupos/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-testes-com-nota/'
	},
	{
		'manual'			: 	'Criar ou alterar pesquisas (sem nota)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/criar-ou-alterar-pesquisas-sem-nota/'
	},
	{
		'manual'			: 	'Conhecer os tipos de pergunta dos testes e pesquisas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/conhecer-os-tipos-de-pergunta-dos-testes-e-pesquisas/'
	},
	{
		'manual'			: 	'Copiar Testes e Pesquisas para outra Disciplina',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/copiar-testes-e-pesquisas/'
	},
	{
		'manual'			: 	'Importar testes e pesquisas do Word',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/importar-testes-e-pesquisas-do-word/'
	},
	{
		'manual'			: 	'Gerar relatórios de testes',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/gerar-relatorios-de-testes/'
	},
	{
		'manual'			: 	'Boas práticas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/testes-e-pesquisas/boas-praticas/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/criar-uma-rubric/'
	},
	{
		'manual'			: 	'Associar Rubric a atividades',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-atividades/'
	},
	{
		'manual'			: 	'Associar Rubric a colunas na Central de Notas',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/rubrics/associar-rubric-a-colunas-na-central-de-notas/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/configurar-a-central-de-notas/'
	},
	{
		'manual'			: 	'Dar nota a atividades feitas fora do ambiente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/dar-nota-a-atividades-feitas-fora-do-ambiente/'
	},
	{
		'manual'			: 	'Calcular a média do aluno',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/calcular-a-media-do-aluno/'
	},
	{
		'manual'			: 	'Corrigir trabalhos com ou sem verificação de plágio (Exercício)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-com-ou-sem-verificacao-de-plagio/'
	},
	// {
	// 	'manual'			: 	'Corrigir trabalhos sem verificação de plágio (Exercício)',
	// 	'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-sem-verificacao-de-plagio/'
	// },
	// {
	// 	'manual'			: 	'Corrigir trabalhos com verificação de plágio (SafeAssignment)',
	// 	'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-trabalhos-com-verificacao-de-plagio/'
	// },
	{
		'manual'			: 	'Avaliar fórum de discussão',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-forum-de-discussao/'
	},
	{
		'manual'			: 	'Avaliar blog',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-blog/'
	},
	{
		'manual'			: 	'Avaliar diário',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-diario/'
	},
	{
		'manual'			: 	'Avaliar wiki',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-wiki/'
	},
	{
		'manual'			: 	'Corrigir com Rubric',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/corrigir-com-rubric/'
	},
	{
		'manual'			: 	'Avaliar monografias da Graduação (ADM e ECO)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/avaliar-monografia-graduacao/'
	},
	{
		'manual'			: 	'Exportar as notas para o sistema acadêmico',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/avaliacao/exportar-as-notas-para-o-sistema-academico/'
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
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/calendario/criar-e-visualizar-eventos/'
	},
	{
		'manual'			: 	'Sincronizar com e-mail pessoal',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/calendario/sincronizar-com-email-pessoal/'
	}
	];

	// NOVO *
	// CATEGORIA: Geral
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.BbGeral = [
	{
		'categoria' 		: 	'Geral',
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	/////////////////////////////////////////////////////////////////
	{
		'manual'			: 	'Restringir visualização de materiais ou atividades a público específico',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/restringir-visualizacao-de-materiais/'
	},
	{
		'manual'			: 	'Simular como os alunos visualizam o ambiente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/simular-como-alunos-visualizam-o-ambiente/'
	},
	{
		'manual'			: 	'Padronização dos ambientes online da PGLS',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/padronizacao-ambiente-online-pgls/'
	},
	{
		'manual'			: 	'Visualizar fotos dos alunos (carômetro)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/visualizar-foto-alunos/'
	},
	{
		'manual'			: 	'Editar as disciplinas disponíveis na página inicial',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Blackboard/geral/editar-disciplinas-disponiveis-pagina-inicial/'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: DIARIO DE CLASSE
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// CATEGORIA: Informações
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.diarioClasseInformacoes = [
	{
		'categoria' 		: 	'Informações', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Informações sobre ementário, plano de ensino e plano de aula (PGLS)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/informacoes/informacoes-sobre-ementario/'
	}
	];

	// CATEGORIA: Sobre o sistema
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.diarioClasseSistema = [
	{
		'categoria' 		: 	'O sistema', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Sobre o sistema',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/'
	},
	{
		'manual'			: 	'Acesso ao sistema',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/#acesso-sistema'
	},
	{

		'manual'			: 	'Publicar plano de aula',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/#publicar-plano-aula'
	},
	{
	
		'manual'			: 	'Editar plano de aula já publicado',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/#editar-plano-de-aula-ja-publicado'
	},
	{
	
		'manual'			: 	'Replicar plano de aula',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-ssitema/#replicar-plano-aula'
	},
	{
	
		'manual'			: 	'Publicar plano de aula atualizado',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Gestao-registro-disciplinas/sistema/sobre-sistema/#publicar-plano-aula-atualizado'
	}
	];


	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// CATEGORIA: sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.catmeSobreFerramenta = [
	{
		'categoria' 		: 	'Sobre a ferramenta', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'O que é Catme',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/sobre-a-ferramenta/'
	},
	{
		'manual'			: 	'Funcionamento do Catme',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/sobre-a-ferramenta/#funcionamento'
	},
	{
		'manual'			: 	'Criar conta',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/sobre-a-ferramenta/#criar-conta'
	}
	];

	// CATEGORIA: Aplicar uma pesquisa de avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.catmeAplicarPesquisaAval = [
	{
		'categoria' 		: 	'Aplicar uma pesquisa de avaliação', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Preparar listagem de alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/'
	},
	{
		'manual'			: 	'Criar classe',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/#criar-classe'
	},
	{
		'manual'			: 	'Criar pesquisa de avaliação',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/#criar-pesquisa'
	},
	{
		'manual'			: 	'Editar informações da pesquisa',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/#editar-informacoes-pesquisa'
	},
	{
		'manual'			: 	'Trocar aluno de grupo com pesquisa em andamento',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/aplicar-uma-pesquisa-de-avaliacao/#trocar-aluno-grupo'
	}
	];

	// CATEGORIA: Analisar os resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.catmeAnalisarResultados = [
	{
		'categoria' 		: 	'Analisar os resultados', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Acessar resultados de uma avaliação existente',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/analisar-os-resultados/'
	},
	// {
	// 	'manual'			: 	'Trabalhar resultados no Excel',
	// 	'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/analisar-os-resultados/trabalhar-resultados-no-excel/'
	// }
	{
		'manual'			: 	'Trabalhar resultados no Excel',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Catme/analisar-os-resultados/#resultados-no-excel'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: VOTADORES ELETRÔNICOS: CLICKERS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerSobreFerramenta = [
	{
		'categoria' 		: 	'Sobre a ferramenta', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Promover votação eletrônica em sala de aula',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/promover-votacao-eletronica-em-sala-de-aula/'
	},
	{
		'manual'			: 	'Funcionamento dos votadores eletrônicos físicos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/funcionamento-votadores-fisicos'
	},
	{
		'manual'			: 	'Funcionamento dos votadores eletrônicos mobile',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/sobre-a-ferramenta/funcionamento-votadores-mobile'
	}
	];

	// CATEGORIA: Utilizar votadores eletrônicos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerUtilizarVotadores = [
	{
		'categoria' 		: 	'Utilizar votadores eletrônicos', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Instalar software TurningPoint',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/#instalar-software'
	},
	{
		'manual'			: 	'Reservar aparelhos ou licenças com Help Desk',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/#reservar-aparelhos'
	},
	{
		'manual'			: 	'Abrir PowerPoint com plug-in do TurningPoint',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/utilizar-votadores-eletronicos/#abrir-turning-point'
	}
	];

	// CATEGORIA: Preparar slides
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerPrepararSlides = [
	{
		'categoria' 		: 	'Preparar slides', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Criar questões e configurar votação nos slides',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/#criar-questoes'
	},
	{
		'manual'			: 	'Inserir cronômetro nos slides (opcional)',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/preparar-slides/#inserir-cronometro'
	}
	];

	// CATEGORIA: Identificar os votos dos alunos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerIdentificarVoto = [
	{
		'categoria' 		: 	'Identificar os votos dos alunos', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Criar lista de alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/#criar-lista-alunos'
	},
	{
		'manual'			: 	'Vincular lista de alunos aos slides',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/#vincular-lista-alunos'
	},
	{
		'manual'			: 	'Editar lista de alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/identificar-votos-alunos/#editar-lista-alunos'
	}
	];

	// CATEGORIA: Iniciar votação eletrônica em sala
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerPromoverVotacao = [
	{
		'categoria' 		: 	'Iniciar votação eletrônica em sala', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Criar lista de controle',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/iniciar-votacao-eletronica-em-sala/#criar-lista-controle'
	},
	{
		'manual'			: 	'Preparar apresentação para votadores eletrônicos físicos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/iniciar-votacao-eletronica-em-sala/#preparar-apresentacao-votadores-fisicos'
	},
	{
		'manual'			: 	'Preparar apresentação para votadores eletrônicos mobile',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/iniciar-votacao-eletronica-em-sala/#preparar-apresentacao-votadores-mobile'
	},
	{
		'manual'			: 	'Durante a aula',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/iniciar-votacao-eletronica-em-sala/#durante-aula'
	},
	{
		'manual'			: 	'Salvar ou continuar sessão',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/iniciar-votacao-eletronica-em-sala/#salvar-continuar-sessao'
	}
	];

	// CATEGORIA: Analisar os resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.clickerAnalisarResultados = [
	{
		'categoria' 		: 	'Analisar os resultados', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Visualizar resultados da votação',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/#visualizar-resultados-votacao'
	},
	{
		'manual'			: 	'Trabalhar resultados no Excel',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Clickers/analisar-resultados/#trabalhar-resultados-excel'
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CASOS, SIMULADORES E CURSOS ONLINE
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre os recursos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.SobreOsRecursos = [
	{
		'categoria' 		: 	'Sobre os recursos', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Casos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/sobre-recursos/'
	},
	{
		'manual'			: 	'Simuladores',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/sobre-recursos/#simuladores'
	},
	{
		'manual'			: 	'Cursos online',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/sobre-recursos/#cursos-online'
	}
	];

	// CATEGORIA: Consultar recursos disponíveis
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.ConsultarRecursosDisponiveis = [
	{
		'categoria' 		: 	'Consultar recursos disponíveis', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Casos, simuladores e cursos online de Harvard',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/consultar-recursos-disponiveis/'
	},
	// {
	// 	'manual'			: 	'Casos de Darden',
	// 	'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/consultar-recursos-disponiveis/#casos-darden'
	// },
	{
		'manual'			: 	'Casos Insper',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/consultar-recursos-disponiveis/#casos-insper'
	}
	];

	// CATEGORIA: Utilizar recursos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	$scope.UtilizarRecursos = [
	{
		'categoria' 		: 	'Utilizar recursos', // Este equivale ao nome da categoria
		'manual'			: 	'',
		'linkManual'		: 	''
	},
	{
		'manual'			: 	'Solicitar, acompanhar e cancelar casos pelo CUCA',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/'
	},
	{
		'manual'			: 	'Solicitar, acompanhar e cancelar simuladores',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/#solicitar-simuladores'
	},
	{
		'manual'			: 	'Solicitar, acompanhar e cancelar cursos online',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/#solicitar-cursos'
	},
	{
		'manual'			: 	'Disponibilizar links de casos, simuladores e cursos online aos alunos',
		'linkManual'		: 	'https://insper.blackboard.com/bbcswebdav/institution/DEA/manuais/Recursos/utilizar-recursos/#disponibilizar-links'
	}
	];


	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	/*
        Função que informa abaixo no 'input' de busca um display
        totalizando o número de manuais encontrados.
        NOTA: Esta função foi desativada a partir da versão 5
    */
	$scope.countLink = function() {
		var display = $( "#display");
		if( display.css( "display", "none" ) ) { display.css( "display", "block" ); }
	}

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	/*
        Esta função add o '.selectedCategory' no menu
        incluir na marcação class='ng-class: addMark()'
        Atribuir apenas na categoria referente ao manual
    */
	$scope.addMark = function() {
        var title = $( ".contentMain h1" );
        var links = $( ".sublist a" );
        
        links.each( function () {
            if( $( this ).text() == $( title ).text() ) {
                $( this ).parent().addClass( "selectedCategory" );
            }
        });
	}
});
