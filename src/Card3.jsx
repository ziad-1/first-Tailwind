import speedBoost from "./assets/speedBoost.png";

export default function Card3() {
  return (
    <div className="card1 w-full bg-white rounded-[20px]  flex flex-col gap-[46px] p-[20px]">
      <div className="cardUpper flex gap-4">
        <div className="left">
          <img src={speedBoost} />
        </div>
        <div className="right flex flex-col gap-2">
          <p className="text-[#091540] font-bold font-sans text-[20px] leading-[120%] tracking-[-0.2px]">
            SpeedBoost
          </p>
          <p className="text-[#535868] font-normal font-sans text-[16px] leading-[140%] tracking-[-0.5px]">
            Optimizes browser resource usage to accelerate page loading.
          </p>
        </div>
      </div>
      <div className="cardLower flex justify-between items-center">
        <button className="cursor-pointer w-[91px] rounded-full border-[1px] border-[#C6C6C6] pt-[0.25rem] pr-[0.125rem] pb-[0.25rem] pl-[0.125rem] ">
          <p className="font-medium font-sans text-[16px] leading-[140%] tracking-[-0.5px]">
            Remove
          </p>
        </button>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" value="" />
          <div
            className="group peer bg-white rounded-full duration-300 w-[36px] h-[20px] ring-2 ring-red-500 peer-checked:ring-green-500 
                    after:content-[''] after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 after:rounded-full 
                    after:absolute after:h-[16px] after:w-[16px] after:top-[2px] after:left-[2px] after:flex after:justify-center after:items-center 
                    peer-checked:after:translate-x-[16px] peer-hover:after:scale-95"
          ></div>
        </label>
      </div>
    </div>
  );
}
