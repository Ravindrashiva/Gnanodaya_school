export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center pt-20">
      {/* Background Image with Dark Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" 
          alt="School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-2">Welcome to</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">Gynodaya School</h1>
        
        <p className="max-w-xl text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          A trusted state-board school in the heart of Madanapalle, nurturing children 
          from LKG to Class 10 with strong values, modern teaching and personal care.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-[#8B0000] hover:bg-red-800 text-white px-8 py-4 font-bold flex items-center gap-2 transition-all">
            APPLY FOR ADMISSION <span className="text-xl">→</span>
          </button>
          <button className="border-2 border-white/50 hover:bg-white/10 text-white px-8 py-4 font-bold transition-all uppercase tracking-wider">
            Explore the School
          </button>
        </div>
      </div>

      {/* Ticker Bar removed from here */}
    </section>
  );
}