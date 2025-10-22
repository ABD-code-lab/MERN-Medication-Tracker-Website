import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("today");
  const [userName] = useState("Rumman");

  // Dummy data for today's medicines
  const todaysMedicines = [
    { name: "Panadol", time: "8:00 AM" },
    { name: "Vitamin D", time: "1:00 PM" },
    { name: "Antibiotic", time: "9:00 PM" },
  ];

  // Form state for managing medicines
  const [medicineForm, setMedicineForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleFormChange = (e) => {
    setMedicineForm({ ...medicineForm, [e.target.name]: e.target.value });
  };

  const handleAddMedicine = (e) => {
    e.preventDefault();
    alert(
      `Medicine "${medicineForm.name}" set from ${medicineForm.startDate} to ${medicineForm.endDate}`
    );
    setMedicineForm({ name: "", startDate: "", endDate: "" });
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between rounded-r-3xl">
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-indigo-600">
            Medication Tracker
          </h2>

          <nav className="space-y-4">
            <button
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                activeSection === "today"
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "hover:bg-indigo-50"
              }`}
              onClick={() => setActiveSection("today")}
            >
              Today’s Medicines
            </button>

            <button
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                activeSection === "manage"
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "hover:bg-indigo-50"
              }`}
              onClick={() => setActiveSection("manage")}
            >
              Manage Medicines
            </button>
          </nav>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="w-full mt-6 bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-lg font-medium transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {/* Profile Section */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome, <span className="text-indigo-600">{userName}</span> 👋
          </h1>
          <p className="text-gray-500 mt-1">
            Track and manage your medicines with ease.
          </p>
        </header>

        {/* Content Sections */}
        {activeSection === "today" ? (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Medicines for Today
            </h2>
            <div className="bg-white rounded-2xl shadow p-6">
              {todaysMedicines.map((med, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b last:border-none"
                >
                  <span className="font-medium">{med.name}</span>
                  <span className="text-gray-600">{med.time}</span>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Set a New Medicine
            </h2>
            <form
              onSubmit={handleAddMedicine}
              className="bg-white rounded-2xl shadow p-6 max-w-md space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Medicine Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={medicineForm.name}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={medicineForm.startDate}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={medicineForm.endDate}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg font-medium hover:bg-indigo-600 transition"
              >
                Save Medicine
              </button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
