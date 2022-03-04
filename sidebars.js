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
		{
			type: "category",
			label: "API",
			collapsible: true,
			collapsed: false,
			items: [
				//"api/api_overview",
				// To Do List methods
				{
					type: "category",
					label: "To Do List methods",
					collapsible: true,
					collapsed: true,
					items: [
						"api/methods/addtask_method",
						"api/methods/assignuser_method",
            			"api/methods/checktask_method",
						"api/methods/closetaskeditor_method",
						"api/methods/closetaskmenu_method",
						"api/methods/closeuserlist_method",
						"api/methods/collapsetask_method",
						"api/methods/copytask_method",
						"api/methods/createproject_method",
						"api/methods/deletetask_method",
						"api/methods/deleteproject_method",
            			"api/methods/expandtask_method",
            			"api/methods/indenttask_method",
            			"api/methods/movetask_method",
            			"api/methods/opentaskeditor_method",
            			"api/methods/opentaskmenu_method",
            			"api/methods/openuserlist_method",
            			"api/methods/pastetask_method",
						"api/methods/selecttask_method",
						"api/methods/setproject_method",
						"api/methods/unassignuser_method",
						"api/methods/unchecktask_method",
						"api/methods/unindenttask_method",
						"api/methods/unselecttask_method",
						"api/methods/updatetask_method",
					]
				},
				{
					type: "category",
					label: "To Do List events",
					collapsible: true,
					collapsed: true,
					items: [
						// To Do List events
						"api/events/addtask_event",
						"api/events/assignuser_event",
						"api/events/checktask_event",
						"api/events/clickmenuitem_event",
            			"api/events/closetaskeditor_event",
            			"api/events/closetaskmenu_event",
            			"api/events/closeuserlist_event",
						"api/events/collapsetask_event",
						"api/events/copytask_event",
						"api/events/createproject_event",
						"api/events/deletetask_event",
						"api/events/deleteproject_event",
						"api/events/editingtask_event",
            			"api/events/expandtask_event",
            			"api/events/indenttask_event",
						"api/events/keypressontodo_event",
						"api/events/movetask_event",
						"api/events/opentaskeditor_event",
						"api/events/opentaskmenu_event",
						"api/events/openuserlist_event",
						"api/events/pastetask_event",
						"api/events/selecttask_event",
						"api/events/setproject_event",
						"api/events/unassignuser_event",
						"api/events/unchecktask_event",
						"api/events/unindenttask_event",
						"api/events/unselecttask_event",
						"api/events/updatetask_event",
					]
				},
				{
					type: "category",
					label: "To Do List properties",
					collapsible: true,
					collapsed: true,
					items: [
						// To Do List properties
						"api/configs/activeproject_config",
						"api/configs/data_config",
						"api/configs/taskshape_config",
						"api/configs/projects_config",
						"api/configs/readonly_config",
						"api/configs/users_config",
					]
				}
			]
		},
		{
			type: "category",
			label: "Guides",
			collapsible: true,
			collapsed: true,
			items: [
				"guides/initialization",
				"guides/configuration",
				{
					type: "category",
					label: "Managing tasks",
					collapsible: true,
					collapsed: true,
					items: [
						"guides/task_operations",
						"guides/task_menu",
						"guides/assigning_users",
						"guides/inline_editing",
					]
				},
				"guides/work_with_projects",
			]
		}
	]
};