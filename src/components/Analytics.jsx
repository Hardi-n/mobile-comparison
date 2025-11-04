import React, { useState } from "react";
// import "./Analytics.css"; // import the CSS file

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState("All Years");

  const dataByYear = {
    "All Years": [
      { title: "Average AnTuTu Score", value: "1,090,833", detail: "Average across all devices (2022–2024)" },
      { title: "Average Smartphone Price", value: "$807", detail: "Overall market average" },
      { title: "Best Value Segment", value: "$400 – $800", detail: "Strongest balance of price and performance" },
      { title: "Top Brand by Market Share", value: "Samsung", detail: "Leading in overall global market share" },
    ],
    "2024": [
      { title: "Average AnTuTu Score", value: "1,250,000", detail: "Performance boosted by new flagship SoCs" },
      { title: "Average Smartphone Price", value: "$890", detail: "Slight rise due to premium releases" },
      { title: "Best Value Segment", value: "$500 – $900", detail: "Premium mid-range dominated sales" },
      { title: "Top Brand by Market Share", value: "Apple", detail: "Lead with 22% global share" },
    ],
    "2023": [
      { title: "Average AnTuTu Score", value: "1,050,000", detail: "Stable performance improvement" },
      { title: "Average Smartphone Price", value: "$760", detail: "Prices stabilized after inflation" },
      { title: "Best Value Segment", value: "$400 – $700", detail: "Midrange phones like Pixel 7a performed best" },
      { title: "Top Brand by Market Share", value: "Samsung", detail: "Maintained strong presence" },
    ],
    "2022": [
      { title: "Average AnTuTu Score", value: "870,000", detail: "5G chipsets became standard" },
      { title: "Average Smartphone Price", value: "$690", detail: "Post-pandemic pricing recovery" },
      { title: "Best Value Segment", value: "$300 – $600", detail: "Value phones dominated markets" },
      { title: "Top Brand by Market Share", value: "Xiaomi", detail: "Strong performance in Asia" },
    ],
  };

  const insights = dataByYear[selectedYear];

  return (
    <div className="analytics-container">
      {/* Header */}
      <header className="analytics-header">
        <h1>📊 Analytics Overview</h1>
        <p>Summary of smartphone performance and market trends</p>
      </header>

      {/* Year Filter */}
      <div className="year-buttons">
        {["All Years", "2024", "2023", "2022"].map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={selectedYear === year ? "active" : ""}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Insights Section */}
      <section className="insights">
        {insights.map((item, index) => (
          <div className="insight-card" key={index}>
            <h3>{item.title}</h3>
            <p className="value">{item.value}</p>
            <p className="detail">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Summary Section */}
      <section className="summary">
        <h2>Summary Overview ({selectedYear})</h2>
        <p>
          {selectedYear === "All Years"
            ? "Over the last three years, smartphone performance has steadily increased while prices have become more competitive. Brands continue to innovate in both flagship and mid-range segments."
            : `In ${selectedYear}, we saw notable trends in pricing and performance. Market leaders adapted quickly to demand, and consumer focus shifted toward efficiency and value.`}
        </p>
      </section>
    </div>
  );
};

export default Analytics;
