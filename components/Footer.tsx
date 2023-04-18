import Link from 'next/link';
const Footer = () => {
  return (
    <div className="  mx-auto flex flex-col gap-y-2 w-fit items-center  ">
      <p className="   text-center text-white text-[8px] sm:text-[14px]">
        Copyright © 2023 ArtsAi By Sandora, All rights reserved.
      </p>
      <div className=" flex ">
        <Link
          href={'/term-and-condition'}
          className=" text-[#2DD48F] text-[8px] sm:text-[14px] hover:text-white"
        >
          Terms of Use
        </Link>
        <p className=" text-[#2DD48F] mx-2">|</p>
        <Link
          href={'/policy'}
          className=" text-[#2DD48F] text-[8px] sm:text-[14px] hover:text-white"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
export default Footer;
