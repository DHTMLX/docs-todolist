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
						"api/methods/additem_method",
						"api/methods/assignuser_method",
            			"api/methods/checkitem_method",
						"api/methods/closeitemeditor_method",
						"api/methods/closeitemmenu_method",
						"api/methods/closeuserlist_method",
						"api/methods/collapseitem_method",
						"api/methods/copyitem_method",
						"api/methods/deleteitem_method",
            			"api/methods/expanditem_method",
            			"api/methods/indentitem_method",
            			"api/methods/moveitem_method",
            			"api/methods/openitemeditor_method",
            			"api/methods/openitemmenu_method",
            			"api/methods/openuserlist_method",
            			"api/methods/pasteitem_method",
						"api/methods/selectitem_method",
						"api/methods/unassignuser_method",
						"api/methods/uncheckitem_method",
						"api/methods/unindentitem_method",
						"api/methods/unselectitem_method",
						"api/methods/updateitem_method",
					]
				},
				{
					type: "category",
					label: "To Do List events",
					collapsible: true,
					collapsed: true,
					items: [
						// To Do List events
						"api/events/additem_event",
						"api/events/assignuser_event",
						"api/events/checkitem_event",
						"api/events/clickmenuitem_event",
            			"api/events/closeitemeditor_event",
            			"api/events/closeitemmenu_event",
            			"api/events/closeuserlist_event",
						"api/events/collapseitem_event",
						"api/events/copyitem_event",
						"api/events/deleteitem_event",
						"api/events/editingitem_event",
            			"api/events/expanditem_event",
            			"api/events/indentitem_event",
						"api/events/keypressontodo_event",
						"api/events/moveitem_event",
						"api/events/openitemeditor_event",
						"api/events/openitemmenu_event",
						"api/events/openuserlist_event",
						"api/events/pasteitem_event",
						"api/events/selectitem_event",
						"api/events/unassignuser_event",
						"api/events/uncheckitem_event",
						"api/events/unindentitem_event",
						"api/events/unselectitem_event",
						"api/events/updateitem_event",
					]
				},
				{
					type: "category",
					label: "To Do List properties",
					collapsible: true,
					collapsed: true,
					items: [
						// To Do List properties
						"api/configs/data_config",
						"api/configs/itemshape_config",
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
			]
		}
	]
};