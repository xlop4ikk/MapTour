var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AUACT: {
      name: "Australian Capital Territory"
    },
    AUNSW: {
      name: "New South Wales"
    },
    AUNT: {
      name: "Northern Territory"
    },
    AUQLD: {
      name: "Queensland"
    },
    AUSA: {
      name: "South Australia"
    },
    AUTAS: {
      name: "Tasmania"
    },
    AUVIC: {
      name: "Victoria"
    },
    AUWA: {
      name: "Western Australia"
    }
  },
  locations: {},
  labels: {
    AUACT: {
      name: "Australian Capital Territory",
      parent_id: "AUACT"
    },
    AUNSW: {
      name: "New South Wales",
      parent_id: "AUNSW"
    },
    AUNT: {
      name: "Northern Territory",
      parent_id: "AUNT"
    },
    AUQLD: {
      name: "Queensland",
      parent_id: "AUQLD"
    },
    AUSA: {
      name: "South Australia",
      parent_id: "AUSA"
    },
    AUTAS: {
      name: "Tasmania",
      parent_id: "AUTAS"
    },
    AUVIC: {
      name: "Victoria",
      parent_id: "AUVIC"
    },
    AUWA: {
      name: "Western Australia",
      parent_id: "AUWA"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};