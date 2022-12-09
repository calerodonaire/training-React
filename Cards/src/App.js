import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleCheck,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import CardWrapper from "./components/CardWrapper";
import freelancer1 from "./assets/img/freelancer-1.jpg";
function App() {
  return (
    <CardWrapper>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={freelancer1} alt="freelancer1" />
          <span clasName="dot"></span>
        </div>
      </div>
      <div className="info-container">
        <h3>MR ROBERT</h3>
        <p>UI/UX Designer</p>
        <div className="hire">
          <div>
            Rate: <span>$85/hr</span>
          </div>
          <button className="hire-button">Hire Me</button>
        </div>
        <div className="rating">
          <div>5.0</div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>(105 Reviews)</div>
        </div>
        <div className="icons">
          <div className="verified">
            <FontAwesomeIcon icon={faCircleCheck}/>
            <span>verified</span>
          </div>
          <span>
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneFlip} />
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

export default App;
