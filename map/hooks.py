# -*- coding: utf-8 -*-
from __future__ import unicode_literals

app_name = "map"
app_title = "Map"
app_publisher = "New Indictrans Technologies Pvt Ltd"
app_description = "app for locating your exact address on map with lat lon"
app_icon = "icon-map-marker"
app_color = "blue"
app_email = "gangadhar.k@indictranstech.com"
app_version = "0.0.1"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = "/assets/map/css/leaflet.css"
#app_include_js = "http://openlayers.org/api/OpenLayers.js"
app_include_js = "/assets/map/js/leaflet.js"

# include js, css files in header of web template
#web_include_css = "/assets/map/css/leaflet.css"
#web_include_js = "/assets/map/js/leaflet.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "map.install.before_install"
# after_install = "map.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "map.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"map.tasks.all"
# 	],
# 	"daily": [
# 		"map.tasks.daily"
# 	],
# 	"hourly": [
# 		"map.tasks.hourly"
# 	],
# 	"weekly": [
# 		"map.tasks.weekly"
# 	]
# 	"monthly": [
# 		"map.tasks.monthly"
# 	]
# }

fixtures = ["Custom Field"]

# Testing
# -------

# before_tests = "map.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "map.event.get_events"
# }

