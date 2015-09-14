
GetMapInformation = Class.extend({
    init: function(opts) {
        this.lat = opts.lat;
        this.lon = opts.lon;
        this.mapid= opts.mapid;
        this.zoom = opts.zoom;
        this.frm = opts.cur_frm
        this.makeMap();
        this.tileLayerMap();
        this.markMap();
    },

    makeMap: function() {
        var me = this;
        $( "#map" ).remove();
        this.mapview = $('<div id="map" style="width:350px; height: 350px;"></div>').appendTo($(me.mapid));
        this.map = L.map('map').setView([this.lat, this.lon], this.zoom);
    },

    tileLayerMap: function(){
        var me = this;
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
            maxZoom: 22,
            attribution: '',
            id: 'mapbox.streets'
        }).addTo(me.map);
    },

    markMap: function(){
        var me = this;
        this.marker = new L.marker([this.lat,this.lon],{
                          draggable: true
                      }).addTo(me.map);
        this.getLatLon()
    },

    getLatLon: function(){
        var me = this;
        (me.marker).on("dragend", function(e){
            newmarker = e.target
            position = newmarker.getLatLng()
            $.extend(me.frm.cscript, new getAddress({lat: position.lat, lon: position.lng}));            
        });

    }
});

getAddress = Class.extend({
    init: function(opts){
        this.lat = opts.lat;
        this.lon = opts.lon;
        this.getAdressInfo()
    },

    getAdressInfo: function(){
        var me = this;
        frappe.call({
            method:"map.locate_your_address_on_map.doctype.locate_address_on_map.locate_address_on_map.get_address",
            args:{
                "lat": me.lat,
                "lon": me.lon,
            },
            callback: function(r) {
                if (r.message){
                    cur_frm.doc.lat = me.lat
                    cur_frm.doc.lon = me.lon
                    cur_frm.doc.address= r.message; 
                    refresh_field(['address', 'lat', 'lon']);
                }
            }
        });
    }
})