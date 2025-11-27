import { phones } from "../data";
import PhoneCard from "../components/PhoneCard";
// import "./Home.css"; // Import CSS

function Home() {
  const randomPhones = phones.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
    <div className="home-container">
      <h1 className="home-title">Phones</h1>

      <div className="phone-grid">
        {randomPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default Home;
