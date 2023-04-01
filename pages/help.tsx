const SignIn = () => {
  return (
    <div className=' flex flex-col text-white py-[10%] items-center justify-center gap-y-5 text-center'>
      <h1 className=' text-[36px] font-black'>Help Centre</h1>
      <div className=' flex items-center justify-center gap-x-5 '>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/game.png' alt='' />
          <p>
            What is <br />
            ArtsAi?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/nft.png' alt='' />
          <p>What are the NFTs?</p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/nft-game.png' alt='' />
          <p>
            What is NFTs in <br />
            the game?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/nft-market.png' alt='' />
          <p>
            How do I buy or
            <br />
            sell NFTs?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/nft-store.png' alt='' />
          <p>
            How do I store my <br />
            NFTs?
          </p>
        </div>
      </div>
      <div className=' flex items-center justify-center gap-x-5'>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/nft-value.png' alt='' />
          <p>
            What is the value <br />
            of NFTs?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/sando.png' alt='' />
          <p>
            What is <br />
            Sando Token?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/wallet.png' alt='' />
          <p>
            How to add <br />
            Sando Token?
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/metamask.png' alt='' />
          <p>
            How to use
            <br />
            MetaMask <br />
            with hardware <br />
            wallet?
          </p>
        </div>
      </div>
      <h1 className=' text-[36px] font-black'>Get more help</h1>
      <div className=' flex items-center justify-center gap-x-5'>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/doc.png' alt='' />
          <p>
            Docs and <br />
            Resources
          </p>
        </div>
        <div className=' w-[110px] text-black text-[10px] font-bolds h-[110px] rounded-[17px] help_box flex flex-col items-center justify-center'>
          <img src='/images/help/email.png' alt='' />
          <p>Email</p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
