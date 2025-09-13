import { useCompare } from "../context/CompareContext";
import { useNavigate } from "react-router-dom";

function PhoneCard({ phone }) {
  const { addPhone } = useCompare();
  const navigate = useNavigate();

  function handleCompare() {
    addPhone(phone);
    navigate("/compare");
  }

  return (
    <div className="phone-card">
      <h2>{phone.device}</h2>
      <p>{phone.brand}</p>
      <p>CPU: {phone.cpuName}</p>
      <p>AnTuTu: {phone.totalscore.toLocaleString()}</p>
      <button
        onClick={handleCompare}
        style={{
          marginTop: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Compare
      </button>
    </div>
  );
}
export default PhoneCard;
