<!-- ## Locate your address on map

app for locating your exact address on map with lat lon

#### License

MIT -->


###Introduction:

This Leaflet Map app will help you primarily to geo-tag your addresses associated  with Customer, Warehouse, Vendor, User etc. This app will use latitude and longitude of address to Geo-Tag it. Pin-code to Geo-location and vice versa can happen and this is powered by GeoNames API (freely available under CCA 3.0).<br>

###Features:

* Making address on map interface.
* Locating any address using Pincode.
* Exact marking of location by moving map marker.
* Geo-tagging of address available in ERPNext.<br><br>

![Map of address form ](map/public/js/images/add link of map.png)

###Basic flow:

In "Locate Address On Map" form, user can select address from master and display it on Map.<br>
Map will be displayed and marker will be set on your address location using Pincode/Zipcode provided in address master.<br>
User can move marker on map to pin-point exact location.<br>
URL or Link of "Locate Address On Map" can be used in any form.<br>

###Depends on
- Frappe (To install: [bench page](https://github.com/frappe/bench) )
- ERPNext 
- python module: requests 

###Installation
Note: Compatible with frappe 5 and above.

1. bench get-app map [https://github.com/indictranstech/map.git](https://github.com/indictranstech/map.git)
2. bench install-app map<br>or install from frappe desk installer.
3. bench migrate

###Configuration Steps

## Sign up for Free Genoanmes API
1. Sign up for free api account on "http://www.geonames.org/login"
2. You will receive confirmation email from geonames on your registered email address.
3. login and activate your account for api

![Register geonames](map/public/js/images/register geonames api.png)<br>

![confrmation email](map/public/js/images/confermation email.png)<br>

![Activate account](map/public/js/images/activate account for api.png)<br>

## add API key in map settiongs
Goto Map  > setup > Map Settings:  Set Api Key here.
Add link field of "Locate Address On Map" on any form <br>

![Geo Tagging](map/public/js/images/geo tagging.png)


