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
    <div className="relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRgw8sxp~UhdifTgFxtcrlhGW3pjYBmbnQReM~vBmwT8Ueg~mQOA0RNMuWR8MywmwEcsfz6LTc7VUpvkoamBx3CvWZ-sg8q~q0Mgog-R48YOgPuxRCVKUmK8qJ6fwOREuBM2n0hbG0HMUA5v12a~ZEI0Ysx~Nc0jhJC-oFfVu9Bdgj3mWodm65Kh40AMwDBwdAX9eVMprf-7q4V6tTkrk6VhQDTYc4ZFdZ70UlIXzS4KghPlPyEp5j9vSEbGz81CR29ow24Hks3o-jEiFtSOBr6cvLP~IiYmvkLnwi~MDlP-JpsaQiZKth-YqA5vf3E5jcrW8dlVPvqE14B0DTN8QA__"
        className="w-full h-[650px] object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      <div className="absolute inset-0 flex items-center justify-center ">
        <div className="relative bg-transparent p-3 border border-white max-w-md sm:max-w-[1080px] sm:h-[400px]  h-[550px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvOq7OcG7YwIPJNlFbFB3y6vjgh3b1ytbdNuPQLw-x3HnXoAVXRVWdrWeTnYFyyxQDF0r8XD1n~EZblmk3moMwVN205oycp~2KM4lLCsilx9NElDgJLWsEdBm4a0sA9gjjnBo413ixA-I~~1Ogo10apbZZWPUqRdjoMsozb8wHTW3oIDCx-i5eXyAOMpf~OuDurY8TsCSoAyMoeIY5w865hc9usKFD8hsrTeyf7EAp~VJ2FtT2OrP2fgJXodSSRh9mYLuA8JpOeFpSP2yTMfa8io4ggxn15Xc22dq0ZlaLlsCxyN9jbYd-7TNS8pwnQ-VTOXJkoP0DrJH6Nbt6UPag__"
            className="absolute sm:top-[-150px] sm:left-[-50px] sm:w-[170px] sm:h-[250px] top-[-10px] left-[-9px] w-[100px] h-[140px]"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YG1FYzxRykOuaKV2-SvezP7g9vWy6da6y0pSazPtWBcQKcIP860XEQx9WOOk6yH6isJSNgl3cHFosz4SoPNXeMcD2y-9qn87YpnaXuPqzSYNBtgV5CEtIj8vjZMAKiqjAgkLKEk~5PKGVZV40aXecGz1vWC6DlmzyT28z-yr~sqx~dT~jJW15LHGt-gFIwLvASlGKhLz4Tb58-sqmL0LkseU0-8-VE9RyL0F6eUNFH16ZOnW~EDTH4ywvriTf1kKeo4dvb10X~CaYBFD8S2n6JNCtkjwAW4G--gpzKfDoYczZd9neLGrcOLRO6q6SbAyn4OB3bK44jkopBhija-7EA__"
            className="absolute sm:top-[190px] sm:right-0 sm:w-[170px] sm:h-[250px] top-[420px] right-0 w-[100px] h-[140px]"
          />

          <h1
            className="text-4xl font-bold text-white mt-9 text-center"
            style={{ textShadow: "3px 3px 0px #800020" }}
          >
            <span className="block sm:inline">
              {activeCategory.split(" ")[0]}
            </span>
            <span className="block sm:inline">
              {activeCategory.split(" ")[1]}
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
            {filteredItems.map((item, index) => (
              <div key={index}>
                <h2 className="font-oswald text-white text-xl">
                  {item.name}
                  <span className="float-right font-oswald text-2xl ">
                    ${item.price}
                  </span>
                </h2>
                <p className="text-[#BBBBBB] font-KellySlab mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
