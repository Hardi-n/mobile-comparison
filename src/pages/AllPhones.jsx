import React, { useState } from "react";
import { phones } from "../data.js";
import { useCompare } from "../context/CompareContext";

export default function AllPhones() {
  const [query, setQuery] = useState("");
  const [addedPhones, setAddedPhones] = useState([]); // track added phones
  const [message, setMessage] = useState(""); // success message

  const { addPhone } = useCompare();

  const filteredPhones = phones.filter((phone) =>
    phone.device?.toLowerCase().includes(query.toLowerCase())
  );

  const handleAdd = (phone) => {
    addPhone(phone);

    // Mark button as active
    setAddedPhones((prev) => [...prev, phone.id]);

    // Show message
    setMessage(`${phone.device} added to compare`);

    // Hide message after 2 seconds
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="phones-container">
      <h1 className="phones-title">All Phones</h1>

      {/* Message */}
      {message && <p className="success-msg">{message}</p>}

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search Phones..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="phones-list">
        {filteredPhones.length === 0 ? (
          <p className="no-result">No phones found.</p>
        ) : (
          filteredPhones.map((phone) => (
            <li key={phone.id} className="phone-item">
              <div className="phone-name">{phone.device}</div>
              <div className="phone-brand">Brand: {phone.brand}</div>
              <div className="phone-score">AnTuTu Score: {phone.totalscore}</div>

              <button
                onClick={() => handleAdd(phone)}
                className={`compare-btn ${
                  addedPhones.includes(phone.id) ? "added" : ""
                }`}
              >
                {addedPhones.includes(phone.id) ? "Added" : "Compare"}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
