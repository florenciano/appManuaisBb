/* ===============================================================
	
	MATRIZ DOS MANUAIS COMPLEMENTARES

   	Este documento é responsável por alimentar a lista dos
   	'Materiais complementares' de cada manual.

   	Local do arquivo base:
   	U:\TAI\Projetos\Projetos 2014\Reformulacao_manuais\Professor\DI\Para_Producao

   	Nome:
   	Blackboard_Sintaxe_Relacao_Materiais_Prof_vf

   	Nomes das classe:
   	1- arquivo
   	2- video
   	3- site
   	4- curso
   	5- livro
   	6- discussao

================================================================== */

manuaisBB.controller("materiaisComplementares", function ($scope) { 

	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// ASSUNTO: BLACKBOARD
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	// CATEGORIA: Materiais
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// "Carregar materiais no ambiente virtual"
	$scope.Carregar_materiais_no_ambiente_virtual = 
	[
	{	"manual"	: 	"Upload Multiple Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_content_collection_upload_files.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Adding Files to Course Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_files_adding_files.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Linking a File to Multiple Courses",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_content_collection_link_file_to_courses.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Attaching Files from Course Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_files_attach_course_file_to_content_item.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Create Multiple Rules for a Contente item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_adaptive_release_create_multiple_rules_for_content_item.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Delivering Documents to your Students (Kevin Reeve, Utah State University)",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/documents/Kevin_Reeve_Delivering_Documents_to_your_Students_12-08.docx",
		"tipoIcone" : 	"arquivo"
	}
	];

	// "Compartilhar materiais com os alunos"
	$scope.Compartilhar_materiais_com_os_alunos = 
	[
	{	"manual"	: 	"Upload Multiple Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_content_collection_upload_files.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Adding Files to Course Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_files_adding_files.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Linking a File to Multiple Courses",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_content_collection_link_file_to_courses.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Attaching Files from Course Files",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_files_attach_course_file_to_content_item.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Create Multiple Rules for a Contente item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_adaptive_release_create_multiple_rules_for_content_item.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Delivering Documents to your Students (Kevin Reeve, Utah State University)",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/documents/Kevin_Reeve_Delivering_Documents_to_your_Students_12-08.docx",
		"tipoIcone" : 	"arquivo"
	}
	];

	// "Alterar ou excluir um manual compartilhado"
	$scope.Alterar_ou_excluir_um_material_compartilhado = 
	[
	];

	// CATEGORIA: Comunicação e Interação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// "Enviar avisos aos alunos"
	$scope.Enviar_avisos_aos_alunos = 
	[
	{	
		"manual"	: 	"How to Create Announcements in Your Course",
		"Link" 		: 	"http://youtu.be/xYW_jWcCbf4",
		"tipoIcone" : 	"video"
	},
	];

	// "Enviar e-mail pelo ambiente"
	$scope.Enviar_eMail_pelo_ambiente = 
	[
	{	
		"manual"	: 	"Sending Email",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_student_sending_email.htm",
		"tipoIcone" : 	"video"
	},
	];

	// "Criar fórum de discussão"
	$scope.Criar_forum_de_discussao = 
	[
	{	"manual"	: 	"Creating a Forum",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_create_forum.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Interacting in Discussions",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_interacting.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading Discussion Board Forums",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_grade_forum.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading Discussion Board Threads",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_grade_threads.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Searching and Collecting Discussion Board Posts",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_search_and_collect_discussion_board_posts.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Moderating Forums",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_moderate_forums.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Criar blog"
	$scope.Criar_blog = 
	[
	{	
		"manual"	: 	"Creating a Blog",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_blogs_journals_creating_a_blog.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Creating and Editing a Blog Entry",
		"Link" 		: 	"http://youtu.be/OBTsn60Qm-I",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Commenting on a Blog Entry",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_blogs_journals_commenting_blog_entry.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Criar diário"
	$scope.Criar_diário = 
	[
	{	
		"manual"	: 	"Getting Started with Journal Prompts to Improve Student",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_journal_prompts.pdf",
		"tipoIcone" : 	"arquivo"
	},
	{	
		"manual"	: 	"Creating a Journal",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_blogs_journals_create_journal.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Creating and Editing Journal Entries",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_blogs_journals_create_edit_journal_entry.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Commenting on a Journal Entry",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_blogs_journals_comment_journal_entry.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Criar wiki"
	$scope.Criar_wiki = 
	[
	{	
		"manual"	: 	"Creating and Managing Wikis",
		"Link" 		: 	"http://youtu.be/-l6778cP0jM",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Viewing a Wiki Page History",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_viewing_wiki_page_history.htm",
		"tipoIcone" : 	"video"
	}
	];

	// CATEGORIA: Trabalhos
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Receber trabalhos sem verificação de plágio (Exercício)"
	$scope.Receber_trabalhos_sem_verificacao_de_plagio = 
	[
	{	
		"manual"	: 	"Inline Assignment Grading",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_inline_grading.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Downloading Assignments",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_assignments_downloading_assignments.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Receber trabalhos com verificação de plágio (SafeAssignment)"
	$scope.Receber_trabalhos_com_verificacao_de_plagio = 
	[
	{	
		"manual"	: 	"Using SafeAssign",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_assignments_safeassign.htm",
		"tipoIcone" : 	"video"
	}
	];

	// CATEGORIA: Testes e Pesquisas
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar ou alterar testes (com nota)"
	$scope.Criar_ou_alterar_testes = 
	[
	{
		"manual"  		: 	"Creating a Test", 
		"Link" 			: 	"http://www.youtube.com/watch?v=ef08mqN4rIY",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Setting Test Options (includes setting the timer for a test)", 
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_set_test_options.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Automatic Regrading",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_auto_regrading.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Getting Started with Automatic Regrading",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_automatic_regrading_9_1_8.pdf",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Reading Survey Results",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_reading_survey_submissions.htm",
		"tipoIcone" 	:   "video"
	},
	{
		"manual"  		: 	"Getting Started with Building a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_building_a_test.pdf",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Tour the Question Finder Feature",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_question_finder_tour.htm",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Exporting and Importing a Test or Survey",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_exporting_and_importing_test_survey.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Uploading Test Questions from Microsoft® Excel",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_upload_test_questions_excel.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Awarding Negative Points for Incorrect Answers to Test Questions",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_negative_points.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Tagging Questions for Reuse",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_tagging_a_question.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Building a Pool",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_building_a_pool.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Adding an Existing Question to a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_add_existing_question_to_a_test.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Random Block and Adding It to a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_random_block_add_test.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Fill in the Blank Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_fill_blank_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Short Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_short_answer_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Matching Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_matching_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a True or False Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_true_false_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Calculated Formula Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_formula_quest.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Calculated Numeric Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_numeric_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating an Essay Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_essay_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Fill in Multiple Blanks Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_fill_multiple_blanks_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Jumbled Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_jumbled_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Likert Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_likert_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Multiple Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_answer_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Multiple Choice Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_choice_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating an Ordering Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_ordering_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Quiz Bowl Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_quiz_bowl_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"The Sample Quiz - Help Prepare Students for Online Tests (Kate Britt)",
		"Link" 			: 	"http://connections.blackboard.com/posts/d6c87e40ac",
		"tipoIcone" 	: 	"arquivo"
	} 
	];

	// "Criar ou alterar pesquisas (sem nota)"
	$scope.Criar_ou_alterar_pesquisas = 
	[
	{
		"manual"  		: 	"Creating a Test", 
		"Link" 			: 	"http://www.youtube.com/watch?v=ef08mqN4rIY",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Setting Test Options (includes setting the timer for a test)", 
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_set_test_options.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Automatic Regrading",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_auto_regrading.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Getting Started with Automatic Regrading",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_automatic_regrading_9_1_8.pdf",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Reading Survey Results",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_reading_survey_submissions.htm",
		"tipoIcone" 	:   "video"
	},
	{
		"manual"  		: 	"Getting Started with Building a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_building_a_test.pdf",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Tour the Question Finder Feature",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_question_finder_tour.htm",
		"tipoIcone" 	: 	"arquivo" 
	}, 
	{
		"manual"  		: 	"Exporting and Importing a Test or Survey",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_exporting_and_importing_test_survey.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Uploading Test Questions from Microsoft® Excel",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_upload_test_questions_excel.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Awarding Negative Points for Incorrect Answers to Test Questions",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_negative_points.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Tagging Questions for Reuse",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_tagging_a_question.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Building a Pool",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_building_a_pool.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Adding an Existing Question to a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_add_existing_question_to_a_test.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Random Block and Adding It to a Test",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_random_block_add_test.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Fill in the Blank Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_fill_blank_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Short Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_short_answer_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Matching Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_matching_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a True or False Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_true_false_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Calculated Formula Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_formula_quest.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Calculated Numeric Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_numeric_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating an Essay Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_essay_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Fill in Multiple Blanks Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_fill_multiple_blanks_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Jumbled Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_jumbled_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Likert Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_likert_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Multiple Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_answer_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Multiple Choice Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_choice_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating an Ordering Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_ordering_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Quiz Bowl Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_quiz_bowl_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"The Sample Quiz - Help Prepare Students for Online Tests (Kate Britt)",
		"Link" 			: 	"http://connections.blackboard.com/posts/d6c87e40ac",
		"tipoIcone" 	: 	"arquivo"
	} 
	];

	// "Conhecer os tipos de pergunta dos testes e pesquisas"
	$scope.Conhecer_os_tipos_de_pergunta_dos_testes_e_pesquisas = 
	[
	{
		"manual"  		: 	"Creating a Fill in the Blank Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_fill_blank_question.htm ",
		"tipoIcone" 	:   "video"
	},
	{
		"manual"  		: 	"Creating a Short Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_short_answer_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Matching Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_test_surveys_create_matching_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a True or False Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_survey_create_true_false_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Calculated Formula Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_formula_quest.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Calculated Numeric Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_calculated_numeric_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating an Essay Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_essay_question.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Creating a Fill in Multiple Blanks Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_fill_multiple_blanks_question.htm",
		"tipoIcone" 	: 	"video" 
	},
	{
		"manual"  		: 	"Creating a Jumbled Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_jumbled_question.htm",
		"tipoIcone" 	: 	"video" 
	}, 
	{
		"manual"  		: 	"Creating a Likert Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_likert_question.htm",
		"tipoIcone" 	: 	"video"
	},
	{
		"manual"  		: 	"Creating a Multiple Answer Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_answer_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Multiple Choice Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_multiple_choice_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating an Ordering Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_ordering_question.htm",
		"tipoIcone" 	: 	"video"
	}, 
	{
		"manual"  		: 	"Creating a Quiz Bowl Question",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/bb91_tests_surveys_create_quiz_bowl_question.htm",
		"tipoIcone" 	: 	"video" 
	}
	];

	// "Gerar relatórios de testes"
	$scope.Gerar_relatorios_de_testes = 
	[
	{
		"manual"  		: 	"Item Analysys",
		"Link" 			: 	"http://help.blackboard.com/en-us/Learn/9.1_SP_14/Instructor/110_Tests_Surveys_Pools/140_Item_Analysis",
		"tipoIcone" 	:   "arquivo"
	},
	{
		"manual"  		: 	"Item Analysys",
		"Link" 			: 	"http://ondemand.blackboard.com/r91/movies/Bb91_tools_item_analysis.htm",
		"tipoIcone" 	: 	"video" 
	}
	];

	// CATEGORIA: Rubric
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

	// "Criar Rubric"
	$scope.Criar_Rubric = 
	[
	{	
		"manual"	: 	"Creating a Grading Rubric",
		"Link" 		: 	"http://youtu.be/ReR0icb-4Vk",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Associating a Rubric with a Gradable Item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_associate_rubric.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading with Rubrics",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_with_rubrics.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Associar Rubric a atividades"
	$scope.Associar_Rubric_a_atividades = 
	[
	{	
		"manual"	: 	"Creating a Grading Rubric",
		"Link" 		: 	"http://youtu.be/ReR0icb-4Vk",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Associating a Rubric with a Gradable Item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_associate_rubric.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading with Rubrics",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_with_rubrics.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Associar Rubric a colunas na Central de Notas"
	$scope.Associar_Rubric_a_colunas_na_Central_de_Notas = 
	[
	{	
		"manual"	: 	"Creating a Grading Rubric",
		"Link" 		: 	"http://youtu.be/ReR0icb-4Vk",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Associating a Rubric with a Gradable Item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_associate_rubric.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading with Rubrics",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_with_rubrics.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Associar Rubric a colunas na Central de Notas"
	$scope.Associar_Rubric_a_colunas_na_Central_de_Notas = 
	[
	{	
		"manual"	: 	"Creating a Grading Rubric",
		"Link" 		: 	"http://youtu.be/ReR0icb-4Vk",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Associating a Rubric with a Gradable Item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_associate_rubric.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading with Rubrics",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_with_rubrics.htm",
		"tipoIcone" : 	"video"
	}
	];

	// CATEGORIA: Avaliação
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// "Configurar a Central de Notas"
	$scope.Configurar_a_Central_de_Notas = 
	[
	{	
		"manual"	: 	"Getting Started with Grade Center",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_the_grade_center_9_1_8.pdf",
		"tipoIcone" : 	"arquivo"
	},
	{	
		"manual"	: 	"Getting Started with Needs Grading",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/documents/getting_started_with_the_needs_grading_page_9_1_8.pdf",
		"tipoIcone" : 	"arquivo"
	},
	{	
		"manual"	: 	"Customizing the Grade Center View",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_grade_center_customizing_grade_center_view.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Working Offline With the Grade Center",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_grade_center_working_offline.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Dar nota a atividades feitas fora do ambiente"
	$scope.Dar_nota_a_atividades_feitas_fora_do_ambiente = 
	[
	];

	// "Calcular a média do aluno"
	$scope.Calcular_a_media_do_aluno  = 
	[
	];

	// "Corrigir trabalhos sem verificação de plágio (Exercício)"
	$scope.Corrigir_trabalhos_sem_verificacao_de_plagio = 
	[
	{	
		"manual"	: 	"Inline Assignment Grading",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_inline_grading.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Downloading Assignments",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_assignments_downloading_assignments.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Avaliar fórum de discussão"
	$scope.Avaliar_forum_de_discussao = 
	[
	{	
		"manual"	: 	"Grading Discussion Board Forums",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_grade_forum.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading Discussion Board Threads",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_discussion_board_grade_threads.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Avaliar wiki"
	$scope.Avaliar_wiki = 
	[
	{	
		"manual"	: 	"Grading a Wiki",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_a_wiki.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Avaliar com Rubric"
	$scope.Corrigir_com_Rubric = 
	[
	{	
		"manual"	: 	"Creating a Grading Rubric",
		"Link" 		: 	"http://youtu.be/ReR0icb-4Vk",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Associating a Rubric with a Gradable Item",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_associate_rubric.htm",
		"tipoIcone" : 	"video"
	},
	{	
		"manual"	: 	"Grading with Rubrics",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_grade_with_rubrics.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Exportar as notas para o sistema acadêmico"
	$scope.Exportar_as_notas_para_o_sistema_academico = 
	[
	];

	// CATEGORIA: Calendário
	/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
	
	// "Criar e visualizar eventos"
	$scope.Criar_e_visualizar_eventos = 
	[
	{	
		"manual"	: 	"Calendar",
		"Link" 		: 	"http://ondemand.blackboard.com/r91/movies/bb91_course_tools_calendar.htm",
		"tipoIcone" : 	"video"
	}
	];

	// "Sincronizar com e-mail pessoal"
	$scope.Sincronizar_com_eMail_pessoal = 
	[
	];

});