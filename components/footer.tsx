import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#062d18] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          {/* <h2 className="text-4xl font-serif">PureLeaf</h2> */}
          <Image
            src="/logo.png"
            width={80}
            height={80}
            className="w-80"
            alt=""
          />

          <p className="mt-6 text-gray-300 leading-8">
            PureLeaf is more than just tea. It’s a lifestyle of freshness and
            purity.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify0end">
          <div>
            <h3 className="text-2xl mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/"> Home</Link>
              </li>
              <li>
                <Link href="#about"> About</Link>
              </li>
              <li>
                <Link href="#teas"> Teas</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-5">Contact Us</h3>

            <ul className="space-y-3 text-gray-300">
              <li>+91 - 8000490059</li>
              <li>pureleaf.teaco@gmail.com</li>
              <li>
                <a href="https://www.instagram.com/pureleaf.teaco?igsh=MXFxaWpzaWJmMXo2"></a>{" "}
                pureleaf.teaco
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-16 pt-8 text-center text-gray-400">
        © 2026 PureLeaf Tea. All rights reserved.
      </div>
    </footer>
  );
}
