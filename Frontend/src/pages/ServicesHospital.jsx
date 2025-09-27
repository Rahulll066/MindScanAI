import React from "react";

const hospitals = [
  {
    name: "City Neuro Hospital",
    distance: "0.8 km",
    address: "123 Main Street, Downtown",
    phone: "+91 9876543210",
    mapLink: "https://www.google.com/maps?q=City+Neuro+Hospital",
  },
  {
    name: "Sunrise Medical Center",
    distance: "1.2 km",
    address: "45 Park Avenue, Midtown",
    phone: "+91 9123456780",
    mapLink: "https://www.google.com/maps?q=Sunrise+Medical+Center",
  },
  {
    name: "Green Valley Hospital",
    distance: "2.5 km",
    address: "78 Hill Road, Uptown",
    phone: "+91 9988776655",
    mapLink: "https://www.google.com/maps?q=Green+Valley+Hospital",
  },
  {
    name: "Hope Neurology Clinic",
    distance: "3.0 km",
    address: "12 River Street, Riverside",
    phone: "+91 9234567890",
    mapLink: "https://www.google.com/maps?q=Hope+Neurology+Clinic",
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
          Find hospitals and clinics specialized in neurology near you.
        </p>
      </section>

      {/* Hospital Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-6">
        {hospitals.map((hospital, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{hospital.name}</h3>
              <p className="text-primary-600 font-medium">{hospital.distance} away</p>
              <p className="text-gray-600">{hospital.address}</p>
              <p className="text-gray-600">Phone: {hospital.phone}</p>
            </div>
            <div className="mt-4 md:mt-0">
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
