import React from "react";
import sideImgone from "../../assets/imageone.png";
import sideImgtwo from "../../assets/imagetwo.png";

interface ItemListProps {
  items: Array<{
    name: string;
    price: number;
    description: string;
    header: string;
  }>;
  activeCategory: string;
}

const ItemList: React.FC<ItemListProps> = ({ items, activeCategory }) => {
  const filteredItems = items.filter((item) => item.header === activeCategory);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRgw8sxp~UhdifTgFxtcrlhGW3pjYBmbnQReM~vBmwT8Ueg~mQOA0RNMuWR8MywmwEcsfz6LTc7VUpvkoamBx3CvWZ-sg8q~q0Mgog-R48YOgPuxRCVKUmK8qJ6fwOREuBM2n0hbG0HMUA5v12a~ZEI0Ysx~Nc0jhJC-oFfVu9Bdgj3mWodm65Kh40AMwDBwdAX9eVMprf-7q4V6tTkrk6VhQDTYc4ZFdZ70UlIXzS4KghPlPyEp5j9vSEbGz81CR29ow24Hks3o-jEiFtSOBr6cvLP~IiYmvkLnwi~MDlP-JpsaQiZKth-YqA5vf3E5jcrW8dlVPvqE14B0DTN8QA__"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-y-0 left-0 hidden md:flex items-center">
        <img src={sideImgtwo} className="z-50 w-40 h-full object-contain" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden md:flex items-center">
        <img src={sideImgone} className="z-50 h-full w-40 object-contain" />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1140px] px-4 py-20">
        <div className="relative bg-transparent border border-white p-6 md:p-8 lg:p-12">
          {/* Decorative Images */}
          <img
            src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvOq7OcG7YwIPJNlFbFB3y6vjgh3b1ytbdNuPQLw-x3HnXoAVXRVWdrWeTnYFyyxQDF0r8XD1n~EZblmk3moMwVN205oycp~2KM4lLCsilx9NElDgJLWsEdBm4a0sA9gjjnBo413ixA-I~~1Ogo10apbZZWPUqRdjoMsozb8wHTW3oIDCx-i5eXyAOMpf~OuDurY8TsCSoAyMoeIY5w865hc9usKFD8hsrTeyf7EAp~VJ2FtT2OrP2fgJXodSSRh9mYLuA8JpOeFpSP2yTMfa8io4ggxn15Xc22dq0ZlaLlsCxyN9jbYd-7TNS8pwnQ-VTOXJkoP0DrJH6Nbt6UPag__"
            alt="Decorative"
            className="absolute  sm:top-[-110px] sm:left-[-50px] sm:w-[170px] sm:h-[250px] top-[-10px] left-[-17px] w-[100px] h-[130px]"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YG1FYzxRykOuaKV2-SvezP7g9vWy6da6y0pSazPtWBcQKcIP860XEQx9WOOk6yH6isJSNgl3cHFosz4SoPNXeMcD2y-9qn87YpnaXuPqzSYNBtgV5CEtIj8vjZMAKiqjAgkLKEk~5PKGVZV40aXecGz1vWC6DlmzyT28z-yr~sqx~dT~jJW15LHGt-gFIwLvASlGKhLz4Tb58-sqmL0LkseU0-8-VE9RyL0F6eUNFH16ZOnW~EDTH4ywvriTf1kKeo4dvb10X~CaYBFD8S2n6JNCtkjwAW4G--gpzKfDoYczZd9neLGrcOLRO6q6SbAyn4OB3bK44jkopBhija-7EA__"
            alt="Decorative"
            className="absolute sm:top-[210px] sm:right-0 sm:w-[170px] sm:h-[250px] top-[360px] right-0 w-[100px] h-[140px]"
          />

          {/* Category Title */}
          <h1
            className="sm:text-5xl text-4xl font-bold text-white mt-7 text-center flex items-center justify-center gap-4"
            style={{ textShadow: "3px 3px 0px #800020" }}
          >
            <div className="w-[60px] h-1 bg-[#857878]"></div>
            <div className="flex flex-col sm:flex-row">
              <span className="block sm:inline mr-2">
                {activeCategory.split(" ")[0]}
              </span>
              <span className="block sm:inline">
                {activeCategory.split(" ")[1] || ""}
              </span>
            </div>
            <div className="w-[60px] h-1 bg-[#857878]"></div>
          </h1>

          {/* Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-14">
              {filteredItems.map((item, index) => (
                <div key={index} className="">
                  <h2 className="flex items-center text-white text-xl font-oswald">
                    <span className="mr-2">{item.name}</span>
                    <span className="flex-grow border-t-4 border-dotted border-white mt-3 me-2"></span>
                    <span className="font-bold"> ${item.price.toFixed(2)}</span>
                  </h2>

                  <p className="text-[#BBBBBB] font-KellySlab mt-2">
                      {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white text-2xl">
              No items found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
