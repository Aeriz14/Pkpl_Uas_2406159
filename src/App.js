    import React from 'react';

    // Komponen utama aplikasi
    const App = () => {
      // Ganti dengan NIM dan Nama Anda yang sebenarnya
      const nim = "2406159"; // Contoh: "123456789"
      const nama = "Muhamad Aenun Rizky"; // Contoh: "Budi Santoso"

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-4 animate-bounce">
              Halo UAS PKPL!
            </h1>
            <p className="text-lg text-gray-800 mb-2">
              Selamat datang di aplikasi web sederhana untuk tugas UAS PKPL Anda.
            </p>
            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
              <p className="text-md text-gray-700 font-semibold">
                NIM: <span className="font-bold text-blue-700">{nim}</span>
              </p>
              <p className="text-md text-gray-700 font-semibold">
                Nama: <span className="font-bold text-blue-700">{nama}</span>
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Semoga sukses dengan ujian Anda!
            </p>
          </div>
        </div>
      );
    };

    export default App;
    