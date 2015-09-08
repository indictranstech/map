# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		"Locate your address on map": {
			"color": "blue",
			"icon": "icon-map-marker",
			"type": "module",
			"label": _("Locate your address on map")
		}
	}
