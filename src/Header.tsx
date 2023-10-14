import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faEarthEurope} spin className="globe-icon" />
      <p>my travel journal</p>
    </div>
  );
}
