import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className=' w-full z-20 absolute top-0  header text-[12px] sm:text-[16px] font-bold flex px-[5%] md:px-[15%] pb-3 pt-2 justify-between'>
      <Image
        src='/images/logo.png'
        width={172}
        height={69}
        alt=''
        className=' w-auto sm:w-[172px] h-auto sm:h-[69px] cursor-pointer'
        onClick={() => {
          router.push("/");
          if (router.pathname === "/") router.reload();
        }}
      />
      <div className=' flex items-center justify-center text-[#6ED1D7] gap-x-5'>
        <p
          onClick={() => {
            router.push("/pricing");
          }}
          className=' sm:block hidden  text-white hover:text-[#6ED1D7] cursor-pointer uppercase'
        >
          Pricing
        </p>
        <p className=' sm:block hidden text-white hover:text-[#6ED1D7] cursor-pointer uppercase'>
          Whitepaper
        </p>
        <p
          onClick={() => {
            router.push("/help");
          }}
          className=' sm:block hidden  text-white hover:text-[#6ED1D7] cursor-pointer uppercase'
        >
          Help
        </p>
        {/* <img src='/images/setting.png' alt='' /> */}
        <button
          onClick={() => {
            router.push("/sign-in");
          }}
          className=' text-white py-2 px-4 sm:px-7 rounded-[15px] bg-gradient-to-br from-[#0D9488] to-[#4468C5]'
        >
          Sing in
        </button>
      </div>
    </div>
  );
};
export default Header;
