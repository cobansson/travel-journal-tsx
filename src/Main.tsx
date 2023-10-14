import { LocationCard } from "./LocationCard";
import { locationData } from "./LocationData";

export default function Main() {
  const cards = locationData.map((place) => {
    return (
      <LocationCard
        key={place.key}
        image={place.image}
        country={place.country}
        location={place.location}
        googleMapsLink={place.googleMapsLink}
        startDate={place.startDate}
        endDate={place.endDate}
        content={place.content}
      />
    );
  });
  return <div className="main">{cards}</div>;
}
