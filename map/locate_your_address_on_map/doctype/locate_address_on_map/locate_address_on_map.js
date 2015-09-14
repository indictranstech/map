
{% include "locate_your_address_on_map/map_plugin.js" %}


frappe.ui.form.on("Locate Address On Map", "refresh", function(frm, dt, dn) {
    if(!frm.doc.__islocal){
      load_map(cur_frm,13)
    }
});

frappe.ui.form.on("Locate Address On Map", "address_form", function(frm, dt, dn) {
  // trigger on address form field for settings lat lon from postal address
  if(cur_frm.doc.address_form){
      get_latlon(cur_frm)  
  }
});

function get_latlon(){
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
                    refresh_field(['address', 'lat', 'lon']);
                    load_map(cur_frm, 13)
                }
            }
    });
}

function load_map(cur_frm, zoom){
    data = get_args_details(cur_frm, zoom)
    $.extend(cur_frm.cscript, new GetMapInformation(data));
}

function get_args_details(cur_frm, zoom){
    return {
        lat : cur_frm.doc.lat,
        lon : cur_frm.doc.lon,
        mapid : $(cur_frm.get_field("address").wrapper),
        zoom : zoom,
        cur_frm: cur_frm
    }
}