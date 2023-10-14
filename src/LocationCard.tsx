import { Properties } from "./Interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export const LocationCard: React.ComponentType<Properties> = (props) => {
  return (
    <div className="location-card-container">
      <img src={props.image} className="location-image" />
      <div className="card-info-container">
        <div className="card-location-info-container">
          <FontAwesomeIcon icon={faLocationDot} className="dot-icon" />
          <p>{props.country}</p>
          <a href={props.googleMapsLink}>View on Google Maps</a>
        </div>
        <h1>{props.location}</h1>
        <strong>
          {props.startDate} - {props.endDate}
        </strong>
        <p>{props.content}</p>
      </div>
    </div>
  );
};
