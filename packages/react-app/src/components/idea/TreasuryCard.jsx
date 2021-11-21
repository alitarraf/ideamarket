const TreasuryCard = () => {
  return (
    <div>
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
            <div class="w-full bg-blue pt-8">
              <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
                <div class="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tr-none bg-white mt-4 flex flex-col">
                  <div class="p-8 text-3xl font-bold text-center">Backer</div>
                  <div class="border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Proof of idea NFT Ownership
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Cool logo sticker
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Our eternal gratitude
                    </div>
                  </div>
                  <div class="text-center px-8 pt-8 text-xl mt-auto">
                    > $5
                    <span class="text-grey-light italic">
                      {" "}
                      single contribution
                    </span>
                  </div>
                  <div class="text-center mt-8 mb-8 mt-auto">
                    <div class="inline-block ml-3">
                      <a href="#">
                        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                          Support
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
                  <div class="w-full p-8 text-3xl font-bold text-center">
                    Super Backer
                  </div>
                  <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Voting rights
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Access to sessions with contributor team
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Access to Notion Idea
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Intellectual property rights
                    </div>
                  </div>
                  <div class="w-full text-center px-8 pt-8 text-xl mt-auto">
                    > $10
                    <span class="text-grey-light italic">
                      {" "}
                      per month in MATIC
                    </span>
                  </div>
                  <div class="w-full text-center mb-8 mt-auto">
                    <div class="inline-block ml-3">
                      <a href="#">
                        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                          Fund
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-tl-none bg-white mt-4 flex flex-col">
                  <div class="p-8 text-3xl font-bold text-center">Investor</div>
                  <div class="border-0 border-grey-light border-t border-solid text-sm">
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Equity in project
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Strategic decision maker in project
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Free copy of the product
                    </div>
                    <div class="text-center border-0 border-grey-light border-b border-solid py-4">
                      Super warm noodles breakfast
                    </div>
                  </div>
                  <div class="text-center px-8 pt-8 text-xl mt-auto">
                    > $1,000
                    <span class="text-grey-light italic">
                      {" "}
                      per month in MATIC
                    </span>
                  </div>
                  <div class="text-center pt-8 mb-8 mt-auto">
                    <div class="inline-block ml-3">
                      <a href="#">
                        <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                          Invest
                        </button>
                      </a>
                    </div>
                  </div>
    {/* TODO! Add the latest Activity By people who chose this option */}

                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center border-b-2 mb-2 py-2 mt-4">
            <div className="pl-3">
              <div className="font-medium text-xl text-gray-700">Treasury</div>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 border rounded-lg">
                  
                  <div className="grid grid-cols-4 gap-2">
                  <div className="text-center bg-green-200 border border-green-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold">
                      All
                  </div>

                  <div className="text-center bg-green-200 border border-green-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold">
                      Expenses
                  </div>
                  <div className="text-center bg-green-200 border border-green-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold">
                      Transactions
                  </div>
                  </div>
                  
                  
              </div>
          <div class="border-grey-light border border-solid text-sm rounded-lg">
                    <div class=" text-left ml-2 border-grey-light border-b border-solid py-4">
                    Today's balance <span class="text-grey font-bold border-l ml-2"> 10,578 </span> MATIC
                    </div>
                    <div class="text-left ml-2 border-0 border-grey-light border-b border-solid py-4">
                    Total raised <span class="text-grey font-bold border-l ml-9"> 29,241 </span> MATIC
                    </div>
                    <div class="text-left ml-2 border-0 border-grey-light border-b border-solid py-4">
                    Total disbursed <span class="text-grey font-bold border-l ml-3"> 18,663 </span> MATIC
                  </div>
                  </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TreasuryCard;
