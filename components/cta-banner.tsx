export default function CTABanner() {
  return (
    <section className="relative py-32">
      <img
        src="/banner.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-5xl ms-20 text-white px-6">
        <h2 className="text-6xl font-serif">
          Taste the Purity. <br />
           Feel the Difference.
        </h2>

        <p className="mt-8 text-xl text-white/90">
          Join thousands of tea lovers who trust PureLeaf.
        </p>

        <button className="mt-10 bg-[#14361d] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition flex items-center gap-5">
          Shop Now <img src="/leaf.png" className="w-8" alt="" />
        </button>
      </div>
    </section>
  );
}