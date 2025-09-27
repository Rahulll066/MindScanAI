import React from "react";

const doctors = [
  {
    name: "Dr. Rahul",
    field: "Neurologist",
    expertise: "Memory disorders, Alzheimer’s disease",
    image: "/assets/profiles/dementia4.jpg",
  },
  {
    name: "Dr. Sai",
    field: "Geriatric Psychiatrist",
    expertise: "Behavioral issues, cognitive therapy",
    image: "/assets/profiles/dementia4.jpg",
  },
  {
    name: "Dr. Krishna",
    field: "Neuropsychologist",
    expertise: "Cognitive assessment, dementia evaluation",
    image: "/assets/profiles/dementia4.jpg",
  },
  {
    name: "Dr. Brijesh",
    field: "General Neurologist",
    expertise: "Stroke, vascular dementia",
    image: "/assets/profiles/dementia4.jpg",
  },
  {
    name: "Dr. Shravya",
    field: "Mental Therapist",
    expertise: "Daily living support, memory exercises",
    image: "/assets/profiles/girldoctor.jpg",
  },
  {
    name: "Dr. Amrutha",
    field: "Speech & Language Therapist",
    expertise: "Communication difficulties, cognitive therapy",
    image: "/assets/profiles/girldoctor.jpg",
  },
];

const DoctorsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-600">
          Find Expert Doctors
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Explore our trusted network of neurologists and dementia specialists.
        </p>
      </section>

      {/* Doctor Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-primary-600"
            />
            <h3 className="text-xl font-semibold mb-1 text-gray-800">{doc.name}</h3>
            <p className="text-primary-600 font-medium mb-2">{doc.field}</p>
            <p className="text-gray-600 text-sm">{doc.expertise}</p>
            <button className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg transition-colors duration-300 hover:bg-primary-700">
              Book Appointment
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DoctorsPage;

