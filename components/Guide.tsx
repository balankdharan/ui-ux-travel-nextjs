import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src={"/camp.svg"} alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium soluta doloribus numquam id tenetur corporis repudiandae
            laboriosam voluptate. Necessitatibus illo provident asperiores dolor
            molestias soluta. Repudiandae rerum non placeat recusandae!
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src={"/boat.png"}
          alt="boat"
          height={580}
          width={1440}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"/meter.svg"}
            alt="meter"
            height={16}
            width={158}
            className="h-full w-auto"
          />
          <div className="flex-between flex-col ">
            <div className="flex w-full flex-col">
              <div className="flex-between w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
