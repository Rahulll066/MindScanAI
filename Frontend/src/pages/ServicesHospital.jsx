import React from "react";

const hospitals = [
  {
    name: "Care Hospitals, Banjara Hills",
    distance: "2.8 km",
    address: "Road No. 1, Banjara Hills, Hyderabad",
    phone: "+91 40 3041 8888",
    mapLink: "https://www.google.com/maps?q=Care+Hospitals+Banjara+Hills",
    image: "/assets/hospitals/care.png",
  },
  {
    name: "KIMS Hospitals, Secunderabad",
    distance: "5.0 km",
    address: "Minister Road, Secunderabad",
    phone: "+91 40 4488 5000",
    mapLink: "https://www.google.com/maps?q=KIMS+Hospitals+Secunderabad",
    image: "/assets/hospitals/kims.jpg",
  },
  {
    name: "Apollo Hospitals, Jubilee Hills",
    distance: "7.8 km",
    address: "Road No. 72, Jubilee Hills, Hyderabad",
    phone: "+91 40 2360 7777",
    mapLink: "https://www.google.com/maps?q=Apollo+Hospitals+Jubilee+Hills",
    image: "/assets/hospitals/apollo.webp",
  },
];

const HospitalsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-600">
          Nearby Hospitals
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Find top neurology hospitals and clinics in Hyderabad.
        </p>
      </section>

      {/* Hospital Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-10">
        {hospitals.map((hospital, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center"
          >
            {/* Left: Image */}
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full md:w-48 h-40 object-cover"
            />

            {/* Middle: Details */}
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold text-gray-800">{hospital.name}</h3>
              <p className="text-primary-600 font-medium">{hospital.distance} away</p>
              <p className="text-gray-600">{hospital.address}</p>
              <p className="text-gray-600">Phone: {hospital.phone}</p>
            </div>

            {/* Right: Button */}
            <div className="p-6">
              <a
                href={hospital.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HospitalsPage;


