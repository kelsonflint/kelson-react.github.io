import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import BlogSplitLayout from "../BlogSplitLayout";
import "../../style/SplitBlogLayout.module.css";
import L, { DivIcon } from "leaflet";


export default function Travel() {
  const locations = [
    {
      name: "Seattle, Washington",
      coords: [47.6062, -122.3321],
      description: "My home base — where the coffee is strong, the rain is frequent, and the mountains are never far away.",
    },
    {
      name: "Los Angeles, California",
      coords: [34.0522, -118.2437],
      description: "Where I grew up and wasted a ton of time.",
    },
    {
      name: "New Haven, Connecticut",
      coords: [41.3083, -72.9279],
      description: "Where I was born. They have good pizza and bagels. Haven't tried a pizza bagel though.",
    },
    {
      name: "Phoenix, Arizona",
      coords: [33.448376, -112.074036],
      description: "My girlfriend lives here. It's dusty and hot as hell. Beautiful in its own way.",
    },
    {
      name: "Sedona, Arizona",
      coords: [34.871002, -111.760826],
      description: "Some cool red rocks.",
    },
    {
      name: "Amsterdam, Netherlands",
      coords: [52.3676, 4.9041],
      description: "Bikes, canals, and a sense of freedom unlike anywhere else. Smoke weed everyday.",
    },
    {
      name: "Berlin, Germany",
      coords: [52.52, 13.405],
      description: "Studied abroad for a summer here. A city of art, history, and reinvention. Subways are crazy efficient. Every street feels like a story halfway rewritten.",
    },
    {
      name: "Kyoto, Japan",
      coords: [35.0116, 135.7681],
      description: "Wandered through Fushimi Inari, temples, and ramen shops. Felt timeless."
    },
    {
      name: "Florence, Italy",
      coords: [43.7699, 11.2556],
      description: "Renaissance art, espresso, and gelato — no regrets.",
    }
  ];

  return (
    <BlogSplitLayout
      title="Travel & Photography"
      emoji="📸"
      rightComponent={<TravelMap locations={locations} />}
      items={locations.map((loc) => ({
        name: loc.name,
        thoughts: loc.description,
      }))}
    />
  );
}

const createEmojiIcon = (emoji = "📍") =>
  new DivIcon({
    html: `<div style="font-size: 1.8rem;">${emoji}</div>`,
    className: "",
  });

function TravelMap({ locations = [] }) {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh", // ✅ explicit, responsive height
        minHeight: "400px", // ✅ ensures visibility on small screens
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <MapContainer
        center={[47.6062, -122.3321]} // Seattle
        zoom={4}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {locations.map((loc, idx) => (
          <Marker
            key={idx}
            position={loc.coords}
            icon={loc.icon || createEmojiIcon()}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <p>{loc.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


