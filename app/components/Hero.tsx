// app/components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Rewire Your Mind</h1>
        <p className="text-xl md:text-2xl mb-8">
          Unlock your potential, finish what you start, and manifest your dreams.
        </p>
        <a 
          href="/signup" 
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
