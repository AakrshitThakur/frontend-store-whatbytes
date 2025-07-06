// components/footer/Footer.tsx
import Link from "next/link";
import {FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-blue-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Filters Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:underline">
              All
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Electronics
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-sm">© 2024 American</p>
      </div>

      {/* About Us Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Follow Us Column */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.linkedin.com/in/aakrshit-thakur-14433627b/"
            className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/AakrshitThakur"
            className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
