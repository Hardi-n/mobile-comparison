import { useCompare } from "../context/CompareContext";

function Compare() {
  const { phonesToCompare, clearCompare } = useCompare();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Compare Phones</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {[0, 1].map((index) => {
          const phone = phonesToCompare[index];
          return (
            <div
              key={index}
              style={{
                flex: 1,
                padding: "20px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                minHeight: "200px",
              }}
            >
              {phone ? (
                <>
                  <h2 className="text-xl font-semibold">{phone.device}</h2>
                  <p>Brand: {phone.brand}</p>
                  <p>CPU: {phone.cpuName}</p>
                  <p>RAM: {phone.ram}</p>
                  <p>Battery: {phone.battery}</p>
                  <p>Camera: {phone.camera}</p>
                  <p>Total Score: {phone.totalscore}</p>
                </>
              ) : (
                <p style={{ color: "#6b7280" }}>
                  {index === 0
                    ? "Choose first phone from Browse Phones"
                    : "Choose second phone"}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {phonesToCompare.length > 0 && (
        <button
          onClick={clearCompare}
          style={{
            marginTop: "20px",
            background: "crimson",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Clear Comparison
        </button>
      )}
    </div>
  );
}

export default Compare;
