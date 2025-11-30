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
                display: "flex",
                gap: "20px",
                padding: "20px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                minHeight: "200px",
                alignItems: "flex-start",
              }}
            >
              {phone ? (
                <>
                  {/* Image column */}
                  <div style={{ flex: "0 0 150px" }}>
                    {phone.image_url ? (
                      <img
                        src={phone.image_url} // make sure this key matches your API
                        alt={phone.name || phone.device}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>

                  {/* Details column */}
                  <div style={{ flex: 1 }}>
                    <h2 className="text-xl font-semibold">{phone.device}</h2>
                    {/* <p>Brand: {phone.brand}</p> */}
                    <p>Price: Rs.{phone.price}</p>
                    {/* <p>GPU: {phone.gpu}</p> */}
                    <p>CPU: {phone.processor}</p>
                    <p>RAM: {phone.ram}GB</p>
                    <p>Battery: {phone.battery}Mah</p>
                    {/* <p>Camera: {phone.camera}</p> */}
                    <p>Storage: {phone.storage}GB</p>
                    <p>Camera:{phone.camera}</p>
                    {/* <p>Display: {phone.display}</p> */}
                    {/* <p>Website:<a>{phone.website_url}</a></p> */}
                    <p>Height:{phone.height}</p>
                    <p>Upvotes:{phone.upvotes}</p>
                    <p>Reviews:{phone.reviews}</p>
                    <p>Rating: {phone.rating}</p>
                    {/* <p>OS Version: {phone.os_version}</p> */}
                    {/* <p>Refresh Rate: {phone.refresh_rate_Hz}</p> */}
                    {/* <p>Wireless Charging: {phone.wireless_charging}</p> */}
                    {/* <p>IP Rating: {phone.ip_rating}</p> */}
                    <p>Total Score: {phone.antutu_score}</p>
                  </div>
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
