<img src="/gambar.png" alt="Profile" />

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(to right, #4988C4, #1A3263)' }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
    
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Foto Profil - Kiri */}
          <div className="lg:w-1/3">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Tentang Saya - Kanan */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl mb-4">Muhammad Zia Ulhaq</h1>
            <p className="text-xl md:text-2xl mb-2 text-blue-100">Mahasiswa Teknik Komputer</p>
            <p className="text-lg mb-2 text-blue-100">Universitas Andalas</p>
            <p className="text-lg mb-8 text-blue-100">NIM: 2311513013</p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <h2 className="text-2xl mb-4">Tentang Saya</h2>
              <p className="text-lg leading-relaxed mb-4">
               Saya adalah mahasiswa Teknik Komputer semester 6 di Universitas Andalas. 
                Selama masa studi, saya aktif mendalami bidang jaringan komputer serta memahami 
                cara kerja sistem komputer secara menyeluruh. Saya meyakini bahwa teknologi 
                memiliki potensi besar untuk memberikan dampak positif bagi kehidupan masyarakat.
              </p>
              <p className="text-lg leading-relaxed">
                Dengan pengalaman magang di Diskominfo dan keterlibatan aktif dalam organisasi kampus, 
                saya terus mengasah kemampuan teknis sekaligus mengembangkan soft skills. 
                Saya selalu bersemangat mempelajari teknologi terbaru dan antusias berkolaborasi 
                dalam proyek-proyek yang menantang
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}