import React from "react";

// Komponen utama aplikasi
const App = () => {
  // Placeholder NIM dan Nama, silakan ganti dengan data Anda
  const nim = "2406159";
  const nama = "Muhamad Aenun Rizky";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
        {/* Judul aplikasi */}
        <h1 className="text-4xl font-extrabold text-blue-600 animate-bounce mb-4">
          Halo UAS PKPL!
        </h1>
        {/* NIM */}
        <p className="text-lg font-semibold text-blue-700 mb-2">
          NIM: <span className="text-gray-800">{nim}</span>
        </p>
        {/* Nama Lengkap */}
        <p className="text-sm text-gray-600">
          Nama: <span className="text-gray-800">{nama}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
