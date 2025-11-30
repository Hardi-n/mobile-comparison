import { useState } from "react";

export default function Recommendations() {
  const [category, setCategory] = useState("Value for Money");
  const [minPrice, setMinPrice] = useState(5000);
  const [maxPrice, setMaxPrice] = useState(30000);

  const [loading, setLoading] = useState(false);
  const [phones, setPhones] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPhones([]);

    try {
      const res = await fetch("http://localhost:5000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          min_price: minPrice,
          max_price: maxPrice,
        }),
      });

      const data = await res.json();
      setPhones(data.data || []);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto margin-2-9">
      <h1 className="text-4xl font-bold text-blue-600 text-center">
        AI Phone Recommendations
      </h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 p-6 bg-white shadow-xl rounded-2xl space-y-6"
      >
        {/* Category */}
        <div>
          <label className="font-semibold text-lg">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border mt-2 rounded-xl p-3 text-gray-700 focus:ring-2 focus:ring-blue-500"
          >
            <option value="Gaming">Gaming</option>
            <option value="Performance">Performance</option>
            <option value="Value for Money">Value for Money</option>
            <option value="Multitasking">Multitasking</option>
            <option value="All">All</option>
          </select>
        </div>

        {/* Price Slider */}
        <div>
          <label className="font-semibold">
            Min Price: <span className="text-blue-600">₹{minPrice}</span>
          </label>
          <input
            type="range"
            min="5000"
            max="60000"
            step="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Max Price: <span className="text-blue-600">₹{maxPrice}</span>
          </label>
          <input
            type="range"
            min="5000"
            max="150000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Get Recommendations
        </button>
      </form>

      {/* ================= LOADING ================= */}
      {loading && (
        <p className="text-center mt-8 text-xl font-semibold animate-pulse">
          ⏳ Processing… please wait
        </p>
      )}

      {/* ================= RESULTS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {phones.map((phone, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-5 flex flex-col hover:shadow-2xl transition transform hover:-translate-y-1 margin-2"
          >
            <img
              src={phone.image_url}
              alt={phone.device}
              className="w-full h-56 object-contain rounded-xl mb-4"
            />

            <h2 className="text-xl font-bold text-gray-900">{phone.device}</h2>
            <p className="text-gray-500 max-width: 100px">{phone.processor}</p>

            <div className="mt-3 text-sm text-gray-700 space-y-1">
              <p><b>RAM:</b> {phone.ram} GB</p>
              <p><b>Storage:</b> {phone.storage} GB</p>
              <p><b>Battery:</b> {phone.battery} mAh</p>
              <p><b>Rating:</b> ⭐ {phone.rating}</p>
              <p className="font-semibold text-blue-600 text-lg">
                ₹{phone.price}
              </p>
            </div>

            <a
              href={phone.website_url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 bg-blue-600 text-white py-2 rounded-xl text-center font-semibold hover:bg-blue-700 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
