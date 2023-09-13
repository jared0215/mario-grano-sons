import type { NextPage } from "next";

const Containerfooter: NextPage = () => {
  return (
    <footer className="bg-gray-100 w-[1442px] h-[618px] flex flex-col py-[108px] px-[138px] box-border items-center justify-start gap-[86px] text-left text-[28px] text-white font-montserrat">
      <div className="w-[1166px] h-[235px] flex flex-row items-start justify-start gap-[138px]">
        <h3 className="m-0 relative text-inherit font-bold font-inherit">{`MARIO GRANO & SONS`}</h3>
        <div className="w-[690px] h-[235px] flex flex-row items-start justify-start gap-[47px] text-xl">
          <div className="w-[120px] h-[235px] flex flex-col items-start justify-start gap-[28px]">
            <div className="relative text-5xl">About</div>
            <div className="relative">Awards</div>
            <div className="relative">Community</div>
            <div className="relative">History</div>
            <div className="relative">Gallery</div>
          </div>
          <div className="w-[147px] h-[130px] flex flex-col items-start justify-start gap-[27px]">
            <div className="relative text-5xl">Services</div>
            <div className="relative">Masonry</div>
            <div className="relative">Waterproofing</div>
          </div>
          <div className="w-[329px] h-[130px] flex flex-col items-start justify-start gap-[27px]">
            <div className="relative text-5xl">Contact</div>
            <div className="relative">732 826 8654</div>
            <a
              className="relative [text-decoration:underline] text-[inherit]"
              href="mailto:mariogranoandsons@gmail.com"
              target="_blank"
            >
              mariogranoandsons@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p className="m-0 relative text-xl leading-[199.4%] text-gray-200 text-center">
        <span className="block">
          We proudly serve areas of Middlesex County and Northern Monmouth
          County, New Jersey
        </span>
        <span className="block">HIC# 13VH01140900</span>
      </p>
    </footer>
  );
};

export default Containerfooter;
