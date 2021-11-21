const TreasuryCard = () => {
  return (
    <div className="mt-4 w-full">
      <div className="shadow-xl rounded-lg p-4 bg-white">
        <div className="flex items-center border-b-2 mb-2 py-2 mt-4">
          <div className="pl-3">
            <div className="font-medium text-xl text-gray-700">Treasury</div>
          </div>
          <div className="inline-block ml-3">
            <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
              Submit Expense
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-4">
          <div className="col-span-2 border rounded-lg">
            <div className="mt-2 ml-2 flex relative">
              <div className="mx-2">
                <div className=" text-center border border-gray-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold transition bg-gray-100 shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                  All
                </div>
              </div>

              <div className="mx-2">
                <div className="text-center border border-red-300  px-3 rounded-xl text-xs uppercase text-red-700 font-semibold transition bg-red-100 shadow ripple hover:shadow-lg hover:bg-red-300">
                  Expenses
                </div>
              </div>
              <div className="mx-2">
                <div className="text-center border border-green-300  px-3 rounded-xl text-xs uppercase text-green-700 font-semibold transition bg-green-100 shadow ripple hover:shadow-lg hover:bg-green-300">
                  Funding
                </div>
              </div>
            </div>

            <div className="w-full lg:w-11/12">
              <div className="mt-2 ml-4">
                <div className="max-w-4xl px-10 py-3 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                  <div>
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                          alt="avatar"
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Alex John
                        </h1>
                      </div>
                    </div>
                    <div className="px-2 py-1 font-bold text-green-100 bg-green-600 rounded hover:bg-green-500">
                      Funding
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-700 hover:underline">
                      Financial contribution to Idea NFT.
                    </div>
                    <div className="font-bold text-gray-600">
                        +1032 <span className="font-normal">MATIC</span>
                    </div>
                  </div>
                  

                  <div className="flex items-center justify-between">
                    
                    <p className=" text-gray-600">
                        Credit from Alex to Idea.NFT - <span className="font-light">November 21, 2021.</span>
                    </p>
                    <div className="text-blue-500 hover:underline">
                      More details
                    </div>
                    
                  </div>
                </div>

                
              </div>
              <div className="mt-2 ml-4 mb-4">
                <div className="max-w-4xl px-10 py-3 mx-auto bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                  <div>
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2080&amp;q=80"
                          alt="avatar"
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                        />
                        <h1 className="font-bold text-gray-700 hover:underline">
                          Eric Ronald
                        </h1>
                      </div>
                    </div>
                    <div className="px-2 py-1 font-bold text-red-100 bg-red-600 rounded hover:bg-red-500">
                      Expenses
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-700 hover:underline">
                      Expenses for Idea NFT.
                    </div>
                    <div className="font-bold text-gray-600">
                        -410 <span className="font-normal">MATIC</span>
                    </div>
                  </div>
                  

                  <div className="flex items-center justify-between">
                    
                    <p className=" text-gray-600">
                        Debit to Eric for Idea.NFT - <span className="font-light">November 17, 2021.</span>
                    </p>
                    <div className="text-blue-500 hover:underline">
                      More details
                    </div>
                    
                  </div>
                </div>

                
              </div>
              
            </div>
          </div>
          <div className="border-grey-light border border-solid text-sm rounded-lg">
            <div className=" text-left ml-2 border-grey-light border-b border-solid py-4">
              Today's balance{" "}
              <span className="text-grey font-bold border-l ml-2">
                {" "}
                10,578{" "}
              </span>{" "}
              MATIC
            </div>
            <div className="text-left ml-2 border-0 border-grey-light border-b border-solid py-4">
              Total raised{" "}
              <span className="text-grey font-bold border-l ml-9">
                {" "}
                29,241{" "}
              </span>{" "}
              MATIC
            </div>
            <div className="text-left ml-2 border-0 border-grey-light border-b border-solid py-4">
              Total disbursed{" "}
              <span className="text-grey font-bold border-l ml-3">
                {" "}
                18,663{" "}
              </span>{" "}
              MATIC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasuryCard;
