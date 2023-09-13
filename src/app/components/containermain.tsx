import type { NextPage } from "next";

const Containermain: NextPage = () => {
  return (
    <main className="bg-white w-[1440px] h-[3888px] overflow-hidden">
      <main className="absolute top-[0px] left-[-2px] w-[1442px] overflow-hidden flex flex-col items-start justify-end">
        <section className="w-[1440px] h-[960px] flex flex-col py-[340px] px-0 box-border items-center justify-end bg-[url('/containersection@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-13xl text-white font-montserrat">
          <div className="w-[722px] h-[249px] flex flex-col items-center justify-start gap-[74px]">
            <h4 className="m-0 relative text-inherit font-normal font-inherit">
              <p className="m-0">{`Mario Grano & Sons, `}</p>
              <p className="m-0">
                is a 2nd generation family business providing
              </p>
              <p className="m-0">quality masonry work since 1963.</p>
            </h4>
            <div className="w-[373px] h-[58px] flex flex-row items-center justify-start gap-[65px]">
              <button className="cursor-pointer p-0 bg-gainsboro-200 rounded-3xs box-border w-[154px] h-[58px] flex flex-col items-center justify-center border-[2px] border-solid border-whitesmoke">
                <div className="relative text-xl font-medium font-montserrat text-whitesmoke text-center">
                  Our History
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-gainsboro-200 rounded-3xs box-border w-[154px] h-[58px] flex flex-col items-center justify-center border-[2px] border-solid border-whitesmoke">
                <div className="relative text-xl font-medium font-montserrat text-whitesmoke text-center">
                  Contact
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="w-[1440px] h-[802px] flex flex-row items-center justify-end gap-[142px] text-left text-13xl text-midnightblue font-montserrat">
          <div className="w-[444px] h-[426px] flex flex-col items-start justify-start gap-[55px]">
            <div className="w-[444px] h-[273px] flex flex-col items-start justify-start gap-[25px]">
              <img
                className="relative w-[89px] h-1 object-cover"
                alt=""
                src="/br@2x.png"
              />
              <h4 className="m-0 relative text-inherit uppercase font-bold font-inherit">
                <p className="m-0">Dedication to</p>
                <p className="m-0">our Craft</p>
              </h4>
              <p className="m-0 relative text-base text-gray-100 inline-block w-[444px] h-[145px] shrink-0">
                Our commitment to our customers will always be to produce
                quality work. The value of a job well done. Our company name
                bears the values of its founder, our father, Mario Grano. In
                that name, we carry on the dedication to the masonry craft, the
                skills of old world artisans while keeping up with the current
                styles of today.
              </p>
            </div>
            <div className="w-[327px] h-[98px] flex flex-col items-start justify-start gap-[9px] text-5xl">
              <h6 className="m-0 relative text-inherit uppercase font-semibold font-inherit">
                Masons specializing in
              </h6>
              <p className="m-0 relative text-base text-gray-100">
                <span className="block">{`Masonry, Concrete, `}</span>
                <span className="block">{`French Drains & `}</span>
                <span className="block">Basement Waterproofing</span>
              </p>
            </div>
          </div>
          <div className="relative w-[712px] h-[802px] bg-[url('/containerdiv@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </section>
        <section className="h-[750px] flex flex-row items-center justify-start text-center text-29xl text-white font-montserrat">
          <div className="bg-gainsboro-100 w-[728px] h-[750px] flex flex-col py-[309px] px-0 box-border items-center justify-start">
            <h3 className="m-0 relative text-inherit font-bold font-inherit">
              MASONRY
            </h3>
          </div>
          <div className="bg-brown w-[712px] h-[750px] flex flex-col py-[309px] px-0 box-border items-center justify-start">
            <h3 className="m-0 relative text-inherit uppercase font-bold font-inherit">
              Waterproofing
            </h3>
          </div>
        </section>
        <section className="w-[1440px] h-[758px] overflow-hidden shrink-0 flex flex-col py-0 px-[187px] box-border items-start justify-center text-center text-5xl text-white font-montserrat">
          <div className="bg-gray-100 w-[1065px] h-[486px] flex flex-col py-[63px] px-[91px] box-border items-center justify-center gap-[35px]">
            <h4 className="m-0 relative text-inherit uppercase font-bold font-inherit flex items-center justify-center w-[490px] h-[70px] shrink-0">{`Mario Grano & Sons: Quality Masonry Since 1963`}</h4>
            <img
              className="relative w-[107px] h-1 object-cover"
              alt=""
              src="/undefined.png"
            />
            <p className="m-0 relative text-[18px] leading-[150%] font-light flex items-center justify-center w-[883px] h-36 shrink-0">{`At Mario Grano & Sons, we pledge an unwavering commitment to our customers: to deliver only the highest quality work, every time. The value we place on a job well done is deeply rooted in our legacy – a testament to the values of our founder and beloved father, Mario Grano. We honor his name by not only preserving the dedication and artistry of old-world masonry but by seamlessly blending it with the contemporary styles of today.`}</p>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-montserrat text-white text-center flex items-center justify-center w-[127px] h-[26px] shrink-0">{`Contact Us >`}</button>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Containermain;
