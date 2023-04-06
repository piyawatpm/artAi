const SignIn = () => {
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <h1 className=" text-[36px] font-black">sign up</h1>

      <div className=" flex flex-col gap-y-2 w-full items-center text-[18px] font-light">
        <div className=" flex flex-col gap-y-1">
          <p>UserName</p>
          <input
            type="text"
            className=" w-[500px] p-2 pl-3 text-black rounded-[6px]"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col gap-y-1">
          <p>E-mail</p>
          <input
            type="text"
            className=" w-[500px] p-2 pl-3 text-black rounded-[6px]"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col gap-y-1">
          <p>Password</p>
          <input
            type="text"
            className=" w-[500px] p-2 pl-3 text-black rounded-[6px]"
            name=""
            id=""
          />
        </div>
      </div>
      <button className="w-[15%] mt-10 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto">
        SIGN UP
      </button>
    </div>
  );
};
export default SignIn;
