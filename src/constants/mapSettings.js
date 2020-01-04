import colorPalette from "@/constants/colorPalette";

const { COLOR_LANDSCAPE, COLOR_WATER } = colorPalette;

const COLORS = {
  LANDSCAPE: COLOR_LANDSCAPE,
  WATER: COLOR_WATER
};

const POINT_MARKER_ICON_CONFIG = {
  url: require("../assets/gm__marker.svg"),
  // A workaround for the initial issue of not being able to access google.maps.Size()
  // and the other methods is to fake their object structure.See:
  // https://github.com/xkjyeah/vue-google-maps/issues/38#issuecomment-316245274
  size: { width: 50, height: 50, f: "px", b: "px" },
  scaledSize: { width: 50, height: 50, f: "px", b: "px" },
  anchor: { x: 25, y: 25, f: "px", b: "px" }
};
const mapSettings = {
  clickableIcons: true,
  streetViewControl: true,
  panControlOptions: false,
  gestureHandling: "cooperative",
  backgroundColor: COLORS.LANDSCAPE,
  mapTypeControl: false,
  zoomControlOptions: {
    style: "SMALL"
  },
  zoom: 15,
  minZoom: 5,
  maxZoom: 18,
  styles: [
    {
      stylers: [{ saturation: -50 }]
    },
    {
      featureType: "landscape.natural",
      stylers: [{ color: COLORS.LANDSCAPE }, { saturation: 0 }]
    },
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "water",
      stylers: [{ color: COLORS.WATER }, { saturation: 0 }]
    }
  ]
};

export { mapSettings, POINT_MARKER_ICON_CONFIG };
