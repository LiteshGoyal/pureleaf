const teas = [
  {
    name: "Premium Masala Tea",
    image: "/masalatea.png",
    desc: "A perfect blend of aromatic spices and fresh herbs"
},
{
    name: "Elaichi Royal Tea",
    image: "/elaichitea.png",
    desc: "From the land of Himalayas"
  },
];

export default function TeaCards() {
  return (
    <section id="teas" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-serif text-[#14361d] mb-16">
          A Tea for Every Mood
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {teas.map((tea, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-4 hover:shadow-2xl transition duration-500"
            >
              <img
                src={tea.image}
                className="h-128 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#14361d]">
                  {tea.name}
                </h3>

                <p className="mt-6 text-[#14361d] font-semibold">
                  {tea.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}