module.exports = {
	docs: [
		{
			type: "doc",
			id: "overview"
		},
		{
			type: "doc",
			id: "how_to_start"
		},
		{
			type: "doc",
			id: "whats_new"
		},
		// API
		{
			type: "category",
			label: "API",
			collapsible: true,
			collapsed: false,
			link: {
			  type: 'generated-index',
			  title: "API",
			  
			  keywords: ['api'],
			  image: '/img/docusaurus.png',
			},
			items: [
		{
			type: "category",
			label: "To Do List API",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'doc',
				id: 'api/api_overview'
			},
			items: [
				//"api/api_overview",
				// To Do List methods
				{
					type: "category",
					label: "To Do List methods",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'api/overview/methods_overview',
					},
					items: [
						"api/methods/addproject_method",
						"api/methods/addtask_method",
						"api/methods/assignuser_method",
            			"api/methods/checktask_method",
						"api/methods/closeinlineeditor_method",
						//"api/methods/closemenu_method",
						"api/methods/collapsetask_method",
						"api/methods/copytask_method",
						"api/methods/deleteproject_method",
						"api/methods/deletetask_method",
						"api/methods/destructor_method",
						"api/methods/existsproject_method",
						"api/methods/existstask_method",
            			"api/methods/expandtask_method",
            			"api/methods/getchildrenids_method",
            			"api/methods/getparentids_method",
            			"api/methods/getproject_method",
            			"api/methods/getselection_method",
            			"api/methods/gettask_method",
            			"api/methods/haschildren_method",
            			"api/methods/indenttask_method",
            			"api/methods/movetask_method",
            			"api/methods/openinlineeditor_method",
            			//"api/methods/openmenu_method",
            			"api/methods/parse_method",
            			"api/methods/pastetask_method",
						"api/methods/selecttask_method",
						"api/methods/serialize_method",
						"api/methods/setconfig_method",
						"api/methods/setfilter_method",
						"api/methods/setlocale_method",
						"api/methods/setproject_method",
						"api/methods/unassignuser_method",
						"api/methods/unchecktask_method",
						"api/methods/unindenttask_method",
						"api/methods/unselecttask_method",
						"api/methods/updateproject_method",
						"api/methods/updatetask_method",
					]
				},
				{
					type: "category",
					label: "To Do List internal API",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'generated-index',
						title: "API",
			  			keywords: ['internal api'],
			  			image: '/img/docusaurus.png',
					},
					items: [
						{
							type: "category",
							label: "Event Bus methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'generated-index',
								title: "Event Bus methods",
								  keywords: ['internal api'],
								  image: '/img/docusaurus.png',
							},
							items: [
								"api/internal/exec_method",
								"api/internal/intercept_method",
								"api/internal/on_method",
								"api/internal/setnext_method",
							]
						},
						{
							type: "category",
							label: "State methods",
							collapsible: true,
							collapsed: true,
							link: {
								type: 'generated-index',
								title: "State methods",
								  keywords: ['internal api'],
								  image: '/img/docusaurus.png',
							},
							items: [
								"api/internal/getreactivestate_method",
								"api/internal/getstate_method",
								"api/internal/getstores_method",
							]
						},
					]
				},
				{
					type: "category",
					label: "To Do List events",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'api/overview/events_overview',
					},
					items: [
						// To Do List events
						"api/events/addproject_event",
						"api/events/addtask_event",
						"api/events/assignuser_event",
						"api/events/checktask_event",
						//"api/events/clickmenuitem_event",
						"api/events/clonetask_event",
            			"api/events/closeinlineeditor_event",
            			//"api/events/closemenu_event",
						"api/events/collapsetask_event",
						"api/events/copytask_event",
						"api/events/deleteproject_event",
						"api/events/deletetask_event",
						"api/events/edititem_event",
            			"api/events/expandtask_event",
            			"api/events/indenttask_event",
						"api/events/keypressontodo_event",
						"api/events/movetask_event",
						"api/events/openinlineeditor_event",
						//"api/events/openmenu_event",
						"api/events/pastetask_event",
						"api/events/selecttask_event",
						"api/events/setfilter_event",
						"api/events/setproject_event",
						"api/events/unassignuser_event",
						"api/events/unchecktask_event",
						"api/events/unindenttask_event",
						"api/events/unselecttask_event",
						"api/events/updateproject_event",
						"api/events/updatetask_event",
					]
				},
				{
					type: "category",
					label: "To Do List properties",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'api/overview/configs_overview',
					},
					items: [
						// To Do List properties
						"api/configs/activeproject_config",
						"api/configs/id_config",
						"api/configs/locale_config",
						"api/configs/projects_config",
						"api/configs/readonly_config",
						"api/configs/tags_config",
						"api/configs/tasks_config",
						"api/configs/taskshape_config",
						"api/configs/users_config",
					]
				}
			]
		},

		// Toolbar api
		{
			type: "category",
			label: "Toolbar API",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: "Toolbar API",
				keywords: ['toolbar api'],
				image: '/img/docusaurus.png'
			},
			items: [
				{
					type: "category",
                	label: "Toolbar methods",
					collapsible: true,
                	collapsed: true,
                	link: {
                    	type: 'generated-index',
                    	title: "Toolbar methods",
                    	keywords: ['toolbar methods'],
                    	image: '/img/docusaurus.png'
                	},
					items: [
						"api/toolbar_api/methods/destructor_method",
						"api/toolbar_api/methods/setconfig_method",
						"api/toolbar_api/methods/setlocale_method",
					]
				},
				{
					type: "category",
                	label: "Toolbar properties",
					collapsible: true,
                	collapsed: true,
                	link: {
                    	type: 'generated-index',
                    	title: "Toolbar properties",
                    	keywords: ['toolbar properties'],
                    	image: '/img/docusaurus.png'
                	},
					items: [
						"api/toolbar_api/configs/api_config",
						"api/toolbar_api/configs/items_config",
						"api/toolbar_api/configs/locale_config",
					]
				}
			]
		},

		// RestDataProvider api
		{
			type: "category",
			label: "RestDataProvider API",
			collapsible: true,
			collapsed: true,
			link: {
				type: 'generated-index',
				title: "RestDataProvider API",
				keywords: ['rest api'],
				image: '/img/docusaurus.png'
			},
			items: [{
				type: "category",
                label: "REST methods",
                collapsed: true,
                link: {
                    type: 'generated-index',
                    title: "REST methods",
                    keywords: ['rest methods'],
                    image: '/img/docusaurus.png'
                },
				items: [
					"api/rest_api/methods/getprojects_method",
					"api/rest_api/methods/getprojecttasks_method",
					"api/rest_api/methods/gettags_method",
					"api/rest_api/methods/gettasks_method",
					"api/rest_api/methods/getusers_method",
					"api/rest_api/methods/setapi_method",
				]
			}]
		}]
	},
		{
			type: "category",
			label: "Guides",
			collapsible: true,
			collapsed: true,
			link: {
					type: 'generated-index',
					title: 'Guides',
					//description: '',
					//slug: '/category/docusaurus-guides',
					keywords: ['guides'],
					image: '/img/docusaurus.png',
			},
			items: [
				"guides/initialization",
				"guides/configuration",
				"guides/loading_data",
				"guides/working_with_server",
				{
					type: "category",
					label: "Managing tasks",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'guides/task_index',
					},
					items: [
						"guides/task_object",
						"guides/task_operations",
						"guides/task_users",
						"guides/readonly_mode",
					]
				},
				{
					type: "category",
					label: "Managing projects",
					collapsible: true,
					collapsed: true,
					link: {
						type: 'doc',
						id: 'guides/project_index',
					},
					items: [
						"guides/project_object_operations",
						"guides/project_operations",
					]
				},
				"guides/menu",
				"guides/inline_editing",
				"guides/localization",
			]
		}
	]
};