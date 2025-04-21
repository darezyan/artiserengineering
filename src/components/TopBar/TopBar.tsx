import "./TopBar.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // React icons
import { assets } from "../../assets/Assets";

const TopBar = () => {
  return (
    <div className="topbar">
      <img src={assets.logo} alt="Logo" className="topbar-logo" />

      <div className="topbar-item">
        <FaPhoneAlt className="topbar-icon" />
        <div>
          <strong>Call Us: 08034083583</strong>
          <div>(Monday – Friday)</div>
        </div>
      </div>

      <div className="divider" />

      <div className="topbar-item">
        <FaEnvelope className="topbar-icon" />
        <div>
          <strong>Mail us for help:</strong>
          <div>dareariyo68@yahoo.com</div>
        </div>
      </div>

      <div className="divider" />

      <div className="topbar-item">
        <FaMapMarkerAlt className="topbar-icon" />
        <div>
          <strong>Plot 15, Biosa Amantu Street,
         </strong>
          <div> Off DLA Road, Asaba, Delta State.</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
