from frappe import _

def get_data():
	return [
		{
			"label": _("Documents"),
			"icon": "icon-star",
			"items": [
				
				{
					"type":"doctype",
					"name": "Locate Address On Map",
					"description": _("Locate Address On Map")
				},			
			]
		},
		{
			"label": _("Setup"),
			"icon": "icon-star",
			"items": [
				{
					"type":"doctype",
					"name": "Map Settings",
					"description": _("Map Settings")
				},
				
			]
		},
	]

