frappe.ui.form.on("Locate Address On Map", "refresh", function(frm, dt, dn) {
  //  appending map div to address field
  $( "#map" ).remove();
  $(cur_frm.get_field("address").wrapper).append('<div id="map" style="width:350px; height: 350px;"></div>');

  var lat='18.5131446168834'
  var lon='73.7825059890747'
  var zoom=6;

  if (cur_frm.doc.lat && cur_frm.doc.lon){
    lat=cur_frm.doc.lat;
    lon=cur_frm.doc.lon;
    zoom=13;  
  }
  var map = L.map('map').setView([lat, lon], zoom);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
      maxZoom: 22,
      attribution: 'Map data ',
      id: 'mapbox.streets'
  }).addTo(map);
  
  var marker = new L.marker([lat,lon],{
    draggable: true
  }).addTo(map);

  marker.on("dragend", function(e) {
    var marker = e.target;
    var position = marker.getLatLng();
    map.panTo(new L.LatLng(position.lat, position.lng));
    cur_frm.doc.lat=position.lat;
    cur_frm.doc.lon=position.lng;
    refresh_field('lat');
    refresh_field('lon');
    frappe.call({
        method:"map.locate_your_address_on_map.doctype.locate_address_on_map.locate_address_on_map.get_address",
        args:{
            "lat":cur_frm.doc.lat,
            "lon":cur_frm.doc.lon,
        },
        callback: function(r) {
          if (r.message){ 
            cur_frm.doc.address= r.message; 
            refresh_field('address');
            //cur_frm.refresh();  
          }
        }
    });
    //map.panTo(new L.LatLng(position.lat, position.lng));
  });

});

frappe.ui.form.on("Locate Address On Map", "address_form", function(frm, dt, dn) {
  // trigger on address form field for settings lat lon from postal address
      frappe.call({
        method:"map.locate_your_address_on_map.doctype.locate_address_on_map.locate_address_on_map.get_latlon",
        args:{
            "address_form":cur_frm.doc.address_form
        },
        callback: function(r) {
          if (r.message){ 
            cur_frm.doc.lat=r.message['lat'];
            cur_frm.doc.lon=r.message['lng'];  
            cur_frm.doc.address= r.message['address']; 
            refresh_field('lat');         
            refresh_field('lon');         
            refresh_field('address');    
            cur_frm.refresh();        
          }
        }
      });
});


