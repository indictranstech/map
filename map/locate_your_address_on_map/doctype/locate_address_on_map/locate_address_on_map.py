# -*- coding: utf-8 -*-
# Copyright (c) 2015, New Indictrans Technologies Pvt Ltd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class LocateAddressOnMap(Document):
	pass



@frappe.whitelist()
def get_latlon(args):
	"""
	Get employee id and return points according to his attendance assumed the working days are 365 and points are 100
	"""
	# frappe.errprint("deleting documents")
	frappe.errprint("hi")
	import requests
	r = requests.get("http://api.geonames.org/postalCodeSearchJSON?postalcode=411032&maxRows=1&country=IN&username=gangadhar_kadam")

	frappe.msgprint(r)
	return r