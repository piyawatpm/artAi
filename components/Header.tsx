import Image from "next/image";
const Header = ({ handleBackHome }: any) => {
  return (
    <div className=' w-full z-20  bg-[#172D3B] text-[12px] sm:text-[16px] font-bold flex px-[5%] md:px-[15%] pb-3 pt-2 justify-between'>
      <Image
        src='/images/logo.png'
        width={172}
        height={69}
        alt=''
        className=' w-auto sm:w-[172px] h-auto sm:h-[69px] cursor-pointer'
        onClick={handleBackHome}
      />
      <div className=' flex items-center justify-center text-[#6ED1D7] gap-x-5'>
        <p className=' sm:block hidden'>Pricing</p>
        <p className=' sm:block hidden'>Whitepaper</p>
        {/* <img src='/images/setting.png' alt='' /> */}
        <button className=' text-white py-2 px-4 sm:px-7 rounded-[15px] bg-gradient-to-br from-[#0D9488] to-[#4468C5]'>
          Sing in
        </button>
      </div>
    </div>
  );
};
export default Header;
