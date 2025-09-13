import { phones } from "../data";
import PhoneCard from "../components/PhoneCard";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Browse Phones
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}
export default Home;
