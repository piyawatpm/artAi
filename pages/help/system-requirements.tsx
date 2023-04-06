/* eslint-disable react/no-unescaped-entities */
const StstemRequirements = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What are the system requirements for using ArtsAi?
        </h1>
        <p className=" font-bold">
          The system requirements for using Artsai depend on the device you plan
          to use to access the platform. Here are some general guidelines:
        </p>
        <ul className="list-disc">
          <li>
            For desktop or laptop computers, Artsai is accessible through a web
            browser, so you'll need an up-to-date version of a supported browser
            such as Chrome, Firefox, Safari, or Edge.
          </li>
          <li>
            For mobile devices such as smartphones and tablets, Artsai is
            accessible through the web browser on your device, so you'll need a
            browser app such as Safari or Chrome.
          </li>
          <li>
            For optimal performance, we recommend using a device with a reliable
            internet connection and at least 2GB of RAM.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default StstemRequirements;
