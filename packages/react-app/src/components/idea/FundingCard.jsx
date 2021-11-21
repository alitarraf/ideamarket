const FundingCard = () => {
  return (
    <div className="mt-4 w-full">
      <div className="shadow-xl rounded-lg p-4 bg-white">
        <div className="flex items-center border-b-2 mb-2 py-2">
          <div className="pl-3">
            <div className="font-medium text-xl text-gray-700">
              Choose your funding level
            </div>
          </div>
        </div>

        <div>
          <div className="w-full bg-blue pt-8">
            <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
              <div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
                <div className="p-8 text-3xl font-bold text-center">Backer</div>
                <div className="border-0 border-grey-light border-t border-solid text-sm">
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Proof of idea NFT Ownership
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Cool logo sticker
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Our eternal gratitude
                  </div>
                </div>
                <div className="text-center px-8 pt-8 text-xl mt-auto">
                  &gt; $5
                  <span className="text-grey-light italic">
                    {" "}
                    single contribution
                  </span>
                </div>
                <div className="text-center mt-8 mb-8">
                  <div className="inline-block ml-3">
                    <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                      Support
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
                <div className="w-full p-8 text-3xl font-bold text-center">
                  Super Backer
                </div>
                <div className="w-full border-0 border-grey-light border-t border-solid text-sm">
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Voting rights
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Access to sessions with contributor team
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Access to Notion Idea
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Intellectual property rights
                  </div>
                </div>
                <div className="w-full text-center px-8 pt-8 text-xl mt-auto">
                  &gt; $10
                  <span className="text-grey-light italic">
                    {" "}
                    per month in MATIC
                  </span>
                </div>
                <div className="w-full text-center mb-8 mt-auto">
                  <div className="inline-block ml-3">
                    <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                      Fund
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
                <div className="p-8 text-3xl font-bold text-center">
                  Investor
                </div>
                <div className="border-0 border-grey-light border-t border-solid text-sm">
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Equity in project
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Strategic decision maker in project
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Free copy of the product
                  </div>
                  <div className="text-center border-0 border-grey-light border-b border-solid py-4">
                    Super warm noodles breakfast
                  </div>
                </div>
                <div className="text-center px-8 pt-8 text-xl mt-auto">
                  &gt; $1,000
                  <span className="text-grey-light italic">
                    {" "}
                    per month in MATIC
                  </span>
                </div>
                <div className="text-center pt-8 mb-8 mt-auto">
                  <div className="inline-block ml-3">
                    <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                      Invest
                    </button>
                  </div>
                </div>
                {/* TODO! Add the latest Activity By people who chose this option */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingCard;
