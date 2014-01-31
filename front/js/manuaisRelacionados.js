/*
    Este documento é responsável por alimentar a lista dos
    'Manuais relacionados' de cada manual.
*/
manuaisBB.controller("manuaisRelacionados", function ($scope) { 
	
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Conhecer o ambiente
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	//manual "O que é Blackboard"
	$scope.O_que_é_Blackboard = 
	[
	{	"manual"	: 	"Acessar pelo computador",
		"Link" 		: 	"#"
	},
	{	
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"#"
	}
	];

	//manual "Acessar pelo computador"
	$scope.Acessar_pelo_computador = 
	[
	{
		"manual"	: 	"Acessar por dispositivos móveis",
		"Link" 		: 	"#"
	}
	];

	//manual "Acessar por dispositivos móveis"
	$scope.Acessar_por_dispositivos_móveis = 
	[
	{
		"manual"	: 	"Acessar pelo computador",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Materiais
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Carregar materiais no ambiente virtual"
	$scope.Carregar_materiais_no_ambiente_virtual = 
	[
	{
		"manual"	: 	"Compartilhar materiais com os alunos",
		"Link" 		:  	"#"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro", 
		"Link" 		: 	"#"
	}
	];

	//manual "Compartilhar materiais com os alunos"
	$scope.Compartilhar_materiais_com_os_alunos = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"#"
	}
	];

	//manual "Alterar ou excluir um material compartilhado"
	$scope.Alterar_ou_excluir_um_material_compartilhado = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Aproveitar materiais de um curso para outro",
		"Link" 		: 	"#"
	}
	];

	//manual "Aproveitar materiais de um curso para outro"
	$scope.Aproveitar_materiais_de_um_curso_para_outro = 
	[
	{
		"manual"	: 	"Carregar materiais no ambiente virtual",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Compartilhar materiais com os alunos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Alterar ou excluir um material compartilhado",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Comunicação e interação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Enviar avisos aos alunos"
	$scope.Enviar_avisos_aos_alunos = 
	[
	{
		"manual"	: 	"Enviar e-mail pelo ambiente",
		"Link" 		: 	"#"
	}
	];

	//manual "Enviar e-mail pelo ambiente"
	$scope.Enviar_eMail_pelo_ambiente = 
	[
	{
		"manual"	: 	"Enviar avisos aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar um fórum de discussão"
	$scope.Criar_um_fórum_de_discussão = 
	[
	{
		"manual"	: 	"Avaliar fórum de discussão", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar um blog",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar um blog"
	$scope.Criar_um_blog = 
	[
	{
		"manual"	: 	"Avaliar blog",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar um fórum de discussão",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar wiki"
	$scope.Criar_wiki = 
	[
	{
		"Manual"	: 	"Avaliar wiki",
		"Link" 		: 	"#"
	}
	];


	// CATEGORIA: Trabalhos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Receber trabalhos sem verificação de plágio"
	$scope.Receber_trabalhos_sem_verificação_de_plágio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos sem verificação de plágio",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio",
		"Link" 		: 	"#"
	}
	];

	//manual "Receber trabalhos com verificação de plágio"
	$scope.Receber_trabalhos_com_verificação_de_plágio = 
	[
	{
		"manual"	: 	"Corrigir trabalhos com verificação de plágio",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Submeter arquivos para verificação de plágio ou criar base de comparação",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio",
		"Link" 		: 	"#"
	}
	];

	//manual "Submeter arquivos para verificação de plágio ou criar base de comparação"
	$scope.Submeter_arquivos_para_verificação_de_plágio_ou_criar_base_de_comparação = 
	[
	{	"manual"	: 	"Receber trabalhos com verificação de plágio",
		"Link" 		: 	"#"
	},
	{	"manual"	: 	"Corrigir trabalhos com verificação de plágio",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Grupos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Criar Grupos"
	$scope.Criar_Grupos = 
	[
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Testes e pesquisas
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Criar ou alterar testes (com nota)"
	$scope.Criar_ou_alterar_testes_com_nota = 
	[
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"#"
	}
	];

	//manual "Criar ou alterar pesquisas (sem nota)"
	$scope.Criar_ou_alterar_pesquisas_sem_nota = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Conhecer os tipos de pergunta dos testes e pesquisas", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"#"
	}
	];

	//manual "Conhecer os tipos de pergunta dos testes e pesquisas"
	$scope.Conhecer_os_tipos_de_pergunta_dos_testes_e_pesquisas = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"#"
	}
	];

	//manual "Importar testes e pesquisas do Word"
	$scope.Importar_testes_e_pesquisas_do_Word = 
	[
	{
		"manual"	: 	"Criar ou alterar testes (com nota)", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar ou alterar pesquisas (sem nota)", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Importar testes e pesquisas do Word", 
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Rubrics
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Criar uma Rubric"
	$scope.Criar_uma_Rubric = 
	[
	{
		"manual"	: 	"Associar Rubric a atividades",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Corrigir com Rubric",
		"Link" 		: 	"#"
	}
	];

	//manual "Associar Rubric a atividades"
	$scope.Associar_Rubric_a_atividades = 
	[
	{
		"manual"	: 	"Associar Rubric a colunas na Central de Notas", 
		"Link" 		: 	"#"
	}
	];

	//manual "Associar Rubric a colunas na Central de Notas"
	$scope.Associar_Rubric_a_colunas_na_Central_de_Notas = 
	[
	{
		"manual"	: 	"Corrigir com Rubric", 
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Configurar a Central de Notas"
	$scope.Configurar_a_Central_de_Notas = 
	[
	{
		"manual"		: 	"Calcular a média do aluno",
		"Link" 			: 	"#"
	},
	{
		"manual"		: 	"Exportar as notas para o sistema acadêmico",
		"Link" 			: 	"#"
	}
	];

	//manual "Dar nota a atividades feitas fora do ambiente"

	//manual "Calcular a média do aluno"
	$scope.Calcular_a_média_do_aluno = 
	[
	{
		"manual"	: 	"Exportar as notas para o sistema acadêmico",
		"Link" 		: 	"#"
	}
	];

	//manual "Corrigir trabalhos sem verificação de plágio"
	$scope.Corrigir_trabalhos_sem_verificação_de_plágio = 
	[
	{
		"manual"	: 	"Receber trabalhos sem verificação de plágio", 
		"Link" 		: 	"#"
	}
	];

	//manual "Corrigir trabalhos com verificação de plágio"
	$scope.Corrigir_trabalhos_com_verificação_de_plágio = 
	[
	{
		"manual"	: 	"Receber trabalhos com verificação de plágio", 
		"Link" 		: 	"#"
	}
	];

	//manual "Avaliar fórum de discussão"
	$scope.Avaliar_fórum_de_discussão = 
	[
	{
		"manual"	: 	"Criar um fórum de discussão", 
		"Link" 		: 	"#"
	}
	];

	//manual "Avaliar blog"
	$scope.Avaliar_blog = 
	[
	{
		"manual"	: 	"Criar um blog", 
		"Link" 		: 	"#"
	}
	];

	//manual "Corrigir com Rubric"
	$scope.Corrigir_com_Rubric = 
	[
	{
		"manual" 	: 	"Criar uma Rubric",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Associar Rubric a atividades",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Associar Rubric a colunas na Central de Notas",
		"Link" 		: 	"#"
	}
	];

	//manual "Exportar as notas para o sistema acadêmico"
	$scope.Exportar_as_notas_para_o_sistema_acadêmico = 
	[
	{
		"manual" 	: 	"Calcular a média do aluno",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Configurar a Central de Notas",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Calendário
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Criar e visualizar eventos"
	$scope.Criar_e_visualizar_eventos = 
	[
	{
		"manual" 	: 	"Sincronizar com e-mail pessoal",
		"Link" 		: 	"#"
	}
	];

	//manual "Sincronizar com e-mail pessoal"
	$scope.Sincronizar_com_eMail_pessoal = 
	[
	{
		"manual" 	: 	"Criar e visualizar eventos",
		"Link" 		: 	"#"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CATME
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Sobre a ferramenta
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "O que é Catme"
	$scope.O_que_é_Catme = 
	[
	{
		"manual"	: 	"Funcionamento do Catme",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar conta",
		"Link" 		: 	"#"
	}
	];

	//manual "Funcionamento do Catme"
	$scope.Funcionamento_do_Catme = 
	[
	{
		"manual"	: 	"O que é Catme",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar conta",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar conta"
	$scope.Criar_conta = 
	[
	{
		"manual"	: 	"O que é Catme",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Funcionamento do Catme",
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Aplicar uma pesquisa de avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Preparar listagem de alunos"
	$scope.Preparar_listagem_de_alunos = 
	[
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#"
	}
	];

	//manual "Criar classe"
	$scope.Criar_classe = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#"
	}
	];

	//manual "Criar pesquisa de avaliação"
	$scope.Criar_pesquisa_de_avaliação = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Editar informações", 
		"Link" 		: 	"#"
	}
	];

	//manual "Editar informações"
	$scope.Editar_informações = 
	[
	{
		"manual"	: 	"Preparar listagem de alunos", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar classe", 
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pesquisa de avaliação", 
		"Link" 		: 	"#"
	}
	];

	// CATEGORIA: Analisar os resultados
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Acessar resultados de uma avaliação existente"
	$scope.Acessar_resultados_de_uma_avaliação_existente = 
	[
	{
		"manual" 	: 	"Trabalhar resultados no Excel",
		"Link" 		: 	"#"
	}
	];

	//manual "Trabalhar resultados no Excel"
	$scope.Trabalhar_resultados_no_Excel = 
	[
	{
		"manual" 	: 	"Acessar resultados de uma avaliação existente",
		"Link" 		: 	"#"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: VOTADORES ELETRÔNICOS (CLICKERS)
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Informações do software"
	$scope.Informações_do_software = 
	[
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Informações do hardware"
	$scope.Informações_do_hardware = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Como utilizar"
	$scope.Como_utilizar = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar pergunta"
	$scope.Criar_pergunta = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Criar lista"
	$scope.Criar_lista = 
	[
	{
		"manual" 	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Salvar sessão"
	$scope.Salvar_sessão = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Gerar e acessar relatórios"
	$scope.Gerar_e_acessar_relatórios = 
	[
	{
		"manual" 	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Controle dos aparelhos",
		"Link" 		: 	"#"
	}
	];

	//manual "Controle dos aparelhos"
	$scope.Controle_dos_aparelhos = 
	[
	{
		"manual"	: 	"Informações do software",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Informações do hardware",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Como utilizar",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar pergunta",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Criar lista",
		"Link" 		: 	"#"
	},
	{
		"manual	" 	: 	"Salvar sessão",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Gerar e acessar relatórios",
		"Link" 		: 	"#"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CASOS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Sobre os casos"
	$scope.Sobre_os_casos = 
	[
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Cadastrar-se em base de dados"
	$scope.CadastrarSe_em_base_de_dados = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Consultar casos disponíveis"
	$scope.Consultar_casos_disponíveis = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Solicitar casos pelo CUCA"
	$scope.Solicitar_casos_pelo_CUCA = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Disponibilizar link aos alunos"
	$scope.Disponibilizar_link_aos_alunos = 
	[
	{
		"manual"	: 	"Sobre os casos",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Cadastrar-se em base de dados",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Consultar casos disponíveis",
		"Link" 		: 	"#"
	},
	{
		"manual"	: 	"Solicitar casos pelo CUCA",
		"Link" 		: 	"#"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: SIMULADORES
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Conhecer simuladores"
	$scope.Conhecer_simuladores = 
	[
	{
		"manual" 	: 	"Solicitar simulador",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Solicitar simulador"
	$scope.Solicitar_simulador = 
	[
	{
		"manual" 	: 	"Conhecer simuladores",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Disponibilizar link aos alunos",
		"Link" 		: 	"#"
	}
	];

	//manual "Disponibilizar link aos alunos"
	$scope.Disponibilizar_link_aos_alunos = 
	[
	{
		"manual" 	: 	"Conhecer simuladores",
		"Link" 		: 	"#"
	},
	{
		"manual" 	: 	"Solicitar simulador",
		"Link" 		: 	"#"
	}
	];

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: CURSOS
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	//manual "Acessar"
	$scope.Acessar = 
	[
	{
		"manual" 	: 	"Gerenciar",
		"Link" 		: 	"#"
	}
	];

	//manual "Gerenciar"
	$scope.Gerenciar = 
	[
	{
		"manual" 	: 	"Acessar",
		"Link" 		: 	"#"
	}
	]
});