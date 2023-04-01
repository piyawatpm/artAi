import Link from "next/link";

function Pricing() {
  return (
    <div className=' h-full w-full relative flex flex-col items-center  py-[10%] justify-center gap-y-5'>
      <div className=' flex gap-x-2 text-[36px] font-black text-white'>
        <p className='text-[#2BE701]'>Package</p>
        <p>Credit</p>
      </div>
      <div className=' flex w-4/5  h-full  items-center'>
        <div className=' flex w-full h-full  gap-x-5 px-10 justify-around items-center'>
          <div className=' w-[250px] h-fit   flex flex-col'>
            <div className=' w-full   py-3 text-white font-bold flex gradient1 rounded-t-[15px] flex-col items-center justify-center'>
              <p className=' text-[16px] '>Starter</p>
              <p className=' text-[36px]'>
                {" "}
                <span>$</span>5
              </p>
              <p className=' text-[8px] font-normal'>Billed Prepaid 30 days</p>
            </div>
            <div className=' w-full h-full text-[9px] rounded-b-[15px] font-normal bg-white flex flex-col  py-3 justify-around items-center'>
              <ul className=' list-disc px-5 gap-y-5 h-[90%] flex flex-col justify-around'>
                <li>Image resolution of 512*512</li>
                <li>
                  100 images generations in <br />
                  art styles.
                </li>
                <li>No watermark.</li>
                <li>Your images are private*</li>
              </ul>
              <Link
                href={"/payment"}
                className=' px-5  py-2  text-[16px] font-bold hover:scale-125 mt-5 text-white rounded-[15px] gradient1 flex items-center justify-center mx-auto'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className=' w-[250px] h-fit  flex flex-col'>
            <div className=' w-full   py-3 text-white rounded-t-[15px] gradient2  font-bold flex flex-col items-center justify-center'>
              <p className=' text-[16px] '>Basic</p>
              <p className=' text-[36px]'>
                {" "}
                <span>$</span>9
              </p>
              <p className=' text-[8px] font-normal'>Billed Prepaid 30 days</p>
            </div>
            <div className=' w-full h-full text-[9px] rounded-b-[15px] font-normal bg-white flex flex-col  py-3 justify-around items-center'>
              <ul className=' list-disc px-5 gap-y-5 h-[90%] flex flex-col justify-around'>
                <li>Image resolution of 768*768.</li>
                <li>100 images generations in <br/>art styles.</li>
                <li>
                No watermark.
                </li>
                <li>Your images are private*</li>
              
              </ul>
              <Link
                href={"/payment"}
                className=' px-5  py-2  text-[16px] font-bold hover:scale-125 mt-5  text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className=' w-[250px] h-fit   flex flex-col'>
            <div className=' w-full   py-3 text-white rounded-t-[15px] gradient3 font-bold flex flex-col items-center justify-center'>
              <p className=' text-[16px] '>Pro</p>
              <p className=' text-[36px]'>
                {" "}
                <span>$</span>19
              </p>
              <p className=' text-[8px] font-normal'>Billed Prepaid 30 days</p>
            </div>
            <div className=' w-full h-full text-[9px] rounded-b-[15px] font-normal bg-white flex flex-col  py-3 justify-around items-center'>
              <ul className=' list-disc px-5 gap-y-5 h-[90%]  flex flex-col justify-around'>
                <li>Image resolution of 1024*1024.</li>
                <li>100 images generations in <br/>art styles.</li>
                <li>
                No watermark.
                </li>
                <li>Your images are private*</li>
              
              </ul>
              <Link
                href={"/payment"}
                className=' px-5  py-2  text-[16px] font-bold hover:scale-125 mt-5 text-white rounded-[15px] gradient3 flex items-center justify-center mx-auto'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className=' w-[250px] h-fit  flex flex-col'>
            <div className=' w-full   py-3 text-white font-bold rounded-t-[15px] gradient4 flex flex-col items-center justify-center'>
              <p className=' text-[16px] '>Premium</p>
              <p className=' text-[36px]'>
                {" "}
                <span>$</span>29
              </p>
              <p className=' text-[8px] font-normal'>Billed Prepaid 30 days</p>
            </div>
            <div className=' w-full h-full text-[9px] rounded-b-[15px] font-normal bg-white flex flex-col  py-3 justify-around items-center'>
              <ul className=' list-disc px-5 gap-y-5 h-[90%] flex flex-col justify-around'>
                <li>Image resolution of 1024*1024.</li>
                <li>200 images generations in <br/>art styles.</li>
                <li>
                No watermark
                </li>
                <li>Your images are private*</li>
             
              </ul>
              <Link
                href={"/payment"}
                className=' px-5  py-2  text-[16px] mt-5 font-bold hover:scale-125  text-white rounded-[15px] bg-gradient-to-l  from-[#280D94] via-[#4468C5]  to-[#8C70DC] flex items-center justify-center mx-auto'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
