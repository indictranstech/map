<!-- ## Locate your address on map

app for locating your exact address on map with lat lon

#### License

MIT -->


###Introduction:

This app will help you primarily geo-tag your address be it in association with Customer, Warehouse, Vendor or Users etc.. with the help of latitude and longitude of location. Pin-code to geo-location and vice versa is power by GeoNames API (freely available under CCA 3.0).<br>

Features:

1. User will select address link on "Locate Address On Map".
2. the map will be displayed and the map marker will be set at yor address (the pincode is used for map , if poincode is not for selected address then the map will not displayed)
3. your can move marker on map to change the location.
4. The link of "Locate Address On Map" can be added on any form.
![Map of address form ](map/public/js/images/add link of map.png)


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


#### Sign up for Free Genoanmes API
1. Sign up for free api account on "http://www.geonames.org/login"
2. You will receive confirmation email from geonames on your registered email address.
3. login and activate your account for api

![Register geonames](map/public/js/images/register geonames api.png)
![confrmation email](map/public/js/images/confermation email.png)
![Activate account](map/public/js/images/activate account for api.png)

#### add API key in map settiongs
<br>  Goto Map  > setup > Map Settings:  Set Api Key here.

Add link field of "Locate Address On Map" on any form 
