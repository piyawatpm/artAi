/* eslint-disable react/no-unescaped-entities */
const PaymentMethod = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full gap-y-5">
      <h1 className=" text-[36px] font-black text-white">Help Centre</h1>
      <div className=" w-2/3 h-1/2 bg-white rounded-[15px]  p-[30px] py-5 text-justify text-[14px] font-normal text-black gap-y-5 flex flex-col overflow-y-scroll">
        <h1 className=" text-[24px] font-bold text-[#0D9488]">
          What payment methods does ARTsAi offer?
        </h1>
        <p>
          ARTsAi offers two secure payment options: PayPal and cryptocurrency.
          PayPal enables customers to pay for purchases securely using their
          PayPal balance or linked bank account, credit card, or debit card.
          Cryptocurrency payments can be made using a secure digital wallet like
          MetaMask, which currently supports two tokens: USDC and SANDO.
          Cryptocurrency payments offer greater privacy, security, flexibility,
          faster transaction times, and lower fees compared to traditional
          payment methods. By providing both payment options, ARTsAi aims to
          offer a range of choices to suit the preferences of its customers.
        </p>
      </div>
    </div>
  );
};
export default PaymentMethod;
