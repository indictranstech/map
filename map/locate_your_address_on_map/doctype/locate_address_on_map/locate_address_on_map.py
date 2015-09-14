# -*- coding: utf-8 -*-
# Copyright (c) 2015, New Indictrans Technologies Pvt Ltd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import requests,json
from frappe.utils import cstr

class LocateAddressOnMap(Document):
	pass

@frappe.whitelist()
def get_latlon(address_form):
	"""
	Get address id and return address, lat lon and update it on form
	"""
	address_text= frappe.db.sql("select address_line1,ifnull(address_line2,' '), city ,ifnull(state,' '),ifnull(pincode,' '),country from tabAddress where name='{0}' and pincode is not null".format(address_form),as_list=1)
	ret={'lat':'', 'lon':''}
	if address_text:
		code=frappe.db.get_value("Country",address_text[0][5], "code")
		api_key=frappe.db.get_value("Map Settings",None, "api_key")
		if api_key:
			address_string=(' , '.join(address_text[0])).replace(',   ,',' , ')
			ret["address"]=address_string
			responce = requests.get("http://api.geonames.org/postalCodeSearchJSON?postalcode={0}&maxRows=1&country={1}&username={2}".format(address_text[0][4],code,api_key))
			responce_json=json.loads(responce.text)
			frappe.errprint(responce_json)
			if 'postalCodes' in responce_json:
				ret['lat']=responce_json['postalCodes'][0]['lat']
				ret['lng']=responce_json['postalCodes'][0]['lng']
	return ret

@frappe.whitelist()
def get_address(lat,lon):
	"""
	Get address from lat lon and update it on form
	"""
	api_key=frappe.db.get_value("Map Settings",None, "api_key")
	responce = requests.get("http://api.geonames.org/findNearbyJSON?lat={0}&lng={1}&username={2}".format(lat,lon,api_key))
	responce_json=json.loads(responce.text)
	address_string=""
	if 'geonames' in responce_json:
			address_string=responce_json['geonames'][0]['name']+" , "+responce_json['geonames'][0]['adminName1']+" , "+responce_json['geonames'][0]['countryName']	
	return address_string

