import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logodeep.png";
import { Button } from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "MAKE A RESERVATION", href: "#reservation" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <div className="relative">
      {/* Main Header */}
      <div className="w-full bg-[#121618] h-24 flex items-center justify-between px-4 lg:px-[calc((100%-1440px)/2)]">
        {/* Logo or Restaurant Name */}
        <div className="flex items-center justify-center w-full mt-[92px] lg:w-auto lg:mt-[92px] lg:px-4 z-50">
          <div className="flex items-center">
            <img
              src={logo}
              className="h-24 lg:h-24 ml-16"
              alt="Deep Net Soft Logo"
            />
            <div className="hidden lg:block text-4xl mt-3 font-oswald">
              <p className="">
                <span className="text-deepBlue">DEEP</span>{" "}
                <span className="text-white">NET</span>
              </p>
              <p className="text-softBrown">SOFT</p>
            </div>
          </div>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden lg:flex space-x-6 me-5 mt-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors duration-300 font-oswald font-medium uppercase"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white z-50"
            variant="light"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 lg:hidden z-40">
          <nav className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300 font-oswald uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Header Image */}
      <div
        className="h-[311px] bg-cover bg-left-top bg-no-repeat 
        sm:bg-cover 
        max-sm:bg-[length:250%]
        [@media_(min-width:645px)_and_(max-width:1000px)]:bg-[length:220%] relative"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZeKHm22hElWdMf84VmnZbIdwhYXQ9sKXSQ0Gz0c22AgjC2lsY3ZtEW2KSzEOvkRwTrHfzkX6WSNl~Ji2CySb6Bkdu~DCmkg0tR72ISS-my04KshYLKOHdwxzeVD64rP7pVqMKmGo557fkvDLd5cndy-Qq4HtVbD10yNF~F0Pv4Zn3ozepMOGlJD6UyUdCDHGfSkiPKfhgFPfM0RdGNRI-AbVqtbUhxm7c~K1hALNzareXxwMjCWrAKGqTze4YhZ4M7WoThL5bmkPwgh-5iHbN7svsFBKon2b0Ueh01TVfh1GYdZWmRBlt0Ad-0BlpsYEgUbAIDX-T4bOh8GIpiWMdw__')`,
        }}
      >
        {/* Dark Shade Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="text-center py-28 px-4 max-w-2xl mx-auto relative z-10">
          <h1
            className="text-6xl font-oswald font-medium text-[#FFFFFF] mb-4 shadow-[7px_7px_0px_#800020, 15px_15px_0px_#800020] text-shadow-lg"
            style={{ textShadow: "3px 3px 0px #800020" }}
          >
            MENU
          </h1>

          <p className="text-[#BBBBBB] leading-relaxed font-KellySlab text-lg">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
