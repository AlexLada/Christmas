// import Image from "next/image"

import Star from "../components/star";
import Star1 from "../components/star1";
import Star2 from "../components/star2";
import Star3 from "../components/star3";
import Star4 from "../components/star4";
import Star5 from "../components/star5";
import Star6 from "../components/star6";
import Countdown from "react-countdown";
import React from "react";

export default function Index() {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Рождество прошло</div>;
    } else {
      return (
        <div className=" place-self-center pt-2 w-full">
          <h2 className="xl:text-sm text-xs text-center ">
            До рождества осталось:
          </h2>
          <span className=" flex justify-center gap-1 font-bold text-xs flex-row">
            <div className="flex-col  p-2 bg-[#222327] rounded-2xl">
              <div>{days}</div>
              <div>дня</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{hours}</div>
              <div>часа</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{minutes}</div>
              <div>минуты</div>
            </div>
            <div className="flex-col p-2 bg-[#222327] rounded-2xl">
              <div>{seconds}</div>
              <div>секунды</div>
            </div>
          </span>
        </div>
      );
    }
  };

  return (
    <div className="">
      <div className="">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src="bg.png"
          alt="bg"
        />
      </div>
      <div className="inline-flex static h-44 w-7/12 mt-48 xl:ml-96 lg:ml-56 md:ml-40  ml-28 bg-amber-400/75 shadow-xl shadow-[#9370DB] border-double border-8 border-[#483D8B] rounded-3xl hover:scale-110 xl:hover:scale-110 lg:hover:scale-110 md:hover:scale-110 transition-all transform duration-500 ">
        <div className="container h-36 w-11/12 mx-auto my-auto bg-transparent rounded-3xl">
          <div className="container h-36 w-11/12 mx-auto my-auto bg-gradient-to-tr from-[#DEB887] via-[#DEB887] to-[#FF0000]  rounded-3xl shadow-lg shadow-[#FF0000] hover:scale-110 xl:hover:scale-110 lg:hover:scale-110 md:hover:scale-110 transition-all transform duration-500">
            <h1 className="text-xl flex justify-center text-center pt-7">
            <font size="" color="#FFFFFF" face="Playball">
              С прошедшим рождеством и бегущим к тебе счастьем! 
            </font>  
            </h1>
          </div>
        </div>
      </div>
      <div className="inline-flex static h-96 w-7/12 mt-1 xl:ml-96 lg:ml-56 md:ml-40  ml-28 bg-amber-400/75 shadow-2xl shadow-[#9370DB] border-double border-8 border-[#483D8B] rounded-3xl hover:scale-110 xl:hover:scale-110 lg:hover:scale-110 md:hover:scale-110 transition-all transform duration-500">
        <div className="container h-80 w-10/12 mx-auto my-auto bg-gradient-to-tr from-[#DEB887] via-[#DEB887] to-[#FF0000] rounded-3xl shadow-lg shadow-[#FF0000] hover:scale-110 xl:hover:scale-110 lg:hover:scale-110 md:hover:scale-110 transition-all transform duration-500">
        <h1 className="text-xl flex justify-center text-center pt-2">
            <font size="" color="#FFFFFF" face="Playball">
              Любимая моя Жанночка, пусть в этом году у тебя сбудутся все мечты(куплю тебе жёсткий диск), пары влюблённых станут ближе (мы с тобой😏), каждый добьётся своих и общих целей. . . . . . . . Счастья тебе, удачи в эти 10 дней и чтоб не скучала🤨 попа!
            </font>  
            </h1>
        </div>
      </div>
    </div>
  );
}
