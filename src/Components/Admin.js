import { useNavigate } from "react-router-dom";
import './Admin.css'; // Import the CSS file

function Admin() {
  const navigate = useNavigate();

  const addManu = () => {
    navigate("/register");
  };

  const viewDet = () => {
    navigate("/details");
  };

  return (
    <div className="admin-container" align="center" background="#cccccc">
      <div className="card" style={{background: 'pink'}}>
      <h1>Select any one to continue</h1>
      <button type="button" className="btn btn-primary" style={{background: 'steel blue'}} onClick={addManu}>
        Add Manufacturer
        </button>
        <button type="button" className="btn btn-secondary" style={{background: 'steelblue'}} onClick={viewDet}>
          Manufacturers Details
        </button>
      </div>
    </div>
  );
}

export default Admin;
