import type { NextPage } from "next";

const Conatinernav: NextPage = () => {
  return (
    <nav className="m-0 flex flex-row items-start justify-start gap-[142px]">
      <a className="[text-decoration:none] flex flex-col items-start justify-start">
        <img className="relative w-[350px] h-5" alt="" src="/nav-logo.svg" />
      </a>
      <a className="[text-decoration:none] flex flex-row items-start justify-start gap-[37px]">
        <a className="[text-decoration:none] relative bg-white w-[45.18px] h-[10.8px] hover:mix-blend-normal hover:bg-orange" />
        <a className="[text-decoration:none] relative bg-white w-[47.14px] h-[10.8px]" />
        <a className="[text-decoration:none] relative bg-white w-[62.86px] h-[11.79px]" />
        <a className="[text-decoration:none] relative bg-white w-[53.04px] h-[13.75px]" />
        <a className="[text-decoration:none] relative bg-white w-[97.23px] h-[11.79px]" />
        <a className="[text-decoration:none] relative bg-white w-[84.47px] h-[10.8px]" />
      </a>
    </nav>
  );
};

export default Conatinernav;
