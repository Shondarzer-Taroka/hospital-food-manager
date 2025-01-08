'use client'
import { useState } from 'react';

type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  diseases: string;
  allergies: string;
  roomNumber: string;
  bedNumber: string;
  floorNumber: string;
  contact: string;
  emergencyContact: string;
};

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [form, setForm] = useState<Patient>({
    id: '',
    name: '',
    age: 0,
    gender: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    contact: '',
    emergencyContact: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      setPatients((prev) =>
        prev.map((p) => (p.id === form.id ? form : p))
      );
    } else {
      setPatients((prev) => [...prev, { ...form, id: Date.now().toString() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setForm({
      id: '',
      name: '',
      age: 0,
      gender: '',
      diseases: '',
      allergies: '',
      roomNumber: '',
      bedNumber: '',
      floorNumber: '',
      contact: '',
      emergencyContact: '',
    });
    setIsEditing(false);
  };

  const handleEdit = (id: string) => {
    const patient = patients.find((p) => p.id === id);
    if (patient) {
      setForm(patient);
      setIsEditing(true);
    }
  };

  const handleDelete = (id: string) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patient Management</h1>
      
      {/* Patient Form */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit Patient' : 'Add Patient'}</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={form.gender}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="diseases"
            placeholder="Diseases"
            value={form.diseases}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            value={form.allergies}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={form.roomNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="bedNumber"
            placeholder="Bed Number"
            value={form.bedNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="floorNumber"
            placeholder="Floor Number"
            value={form.floorNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={form.contact}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={form.emergencyContact}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          {isEditing ? 'Update Patient' : 'Add Patient'}
        </button>
      </div>

      {/* Patient List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Patient List</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Room</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="border border-gray-300 p-2">{patient.name}</td>
                <td className="border border-gray-300 p-2">{patient.roomNumber}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleEdit(patient.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(patient.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
