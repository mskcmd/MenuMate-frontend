import logo from "../assets/logodeep.png";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-black text-white sm:py-20 sm:px-20 py-20 px-4">
        <div className="max-w-5xl h-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Company Section */}
          <div className="relative text-center border border-white rounded-lg order-1 md:order-2">
            {/* Logo placed outside the div */}
            <img
              src={logo}
              alt="Deep Net Soft Logo"
              className="absolute top-[-42px] left-1/2 transform -translate-x-1/2 h-20"
            />

            <h2 className="text-3xl font-oswald mt-11">
              <span className="text-deepBlue">DEEP </span>
              <span className="text-white">NET </span>
              <span className="text-softBrown">SOFT</span>
            </h2>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-4 p-1">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border border-white rounded-lg order-2 md:order-1">
            <h3 className="text-xl font-oswald mb-4 text-[#0796EF] text-center p-3">
              Connect with Us
            </h3>
            <div className="text-[#857878] font-oswald text-center">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="text-blue-400" size={24} />
                <span>+91 9567843340</span>
              </div>
              <div className="flex items-center justify-center space-x-3 py-2">
                <Mail className="text-blue-400" size={24} />
                <span>info@deepnetsoft.com</span>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="border border-white rounded-lg order-3">
            <h3 className="text-xl font-oswald mb-4 text-[#0796EF] text-center p-2">
              Find Us
            </h3>
            <div className="flex items-center justify-center text-[#857878] font-oswald text-center space-x-3">
              <MapPin className="text-blue-400" size={24} />
              <span className="block">
                First floor, Geo infopark, <br />
                Infopark EXPY, Kakkanad
              </span>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#2e2d2d] text-[#857878] py-1 px-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>

          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <p>Terms & Conditions Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
