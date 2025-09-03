import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import Card9 from "./Card9";
import Card10 from "./Card10";
import Card11 from "./Card11";
import Card12 from "./Card12";

export default function Hero() {
  return (
    <div className="hero mt-[64px] mb-[64px]">
      <div className="container mx-auto max-w-[1170px]">
        <div className="upper flex flex-col md:flex-row gap-5 items-center justify-between">
          <p className="font-bold text-[34px] leading-[100%] tracking-[-1px] text-[#091540]">
            Extensions List
          </p>
          <div className="btns flex items-center justify-center gap-3">
            <button className="cursor-pointer bg-red-700 px-5 py-2 rounded-4xl">
              <p className="text-white text-[20px] font-medium">All</p>
            </button>
            <button className="cursor-pointer bg-white px-5 py-2 rounded-4xl">
              <p className="text-[#091540] text-[20px] font-normal">Active</p>
            </button>
            <button className="cursor-pointer bg-white px-5 py-2 rounded-4xl">
              <p className="text-[#091540] text-[20px] font-normal">Inactive</p>
            </button>
          </div>
        </div>
        <div className="tasks mt-[38px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Card1/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            <Card6/>
            <Card7/>
            <Card8/>
            <Card9/>
            <Card10/>
            <Card11/>
            <Card12/>
        </div>
      </div>
    </div>
  );
}
