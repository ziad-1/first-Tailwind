import logo from './assets/logo-88.png'
import controller from './assets/controller.svg'
export default function Header(){
    return(
        <div className="header mt-[40px]">
            <div className="container mx-auto w-[1170px] flex justify-between bg-[#FBFDFE] rounded-[20px] p-3">
                <div className="left flex items-center gap-3">
                    <img src={logo} alt="logo" className='w-[40px] h-[40px]' />
                    <p className='font-semibold text-2xl tracking-[-0.5px] text-center'>Extensions</p>
                </div>
                <div className="right">
                    <img src={controller} alt="controller " className='w-[50px] h-[50px] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}