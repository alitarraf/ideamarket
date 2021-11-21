const PostsCard = () => {
  return (
    <div className="mt-4 w-full">
      <div className="shadow-xl rounded-lg p-4 bg-white">
        <div className="flex items-center border-b-2 mb-2 py-2 mt-4">
          <div className="pl-3">
            <div className="font-medium text-xl text-gray-700">Updates</div>
          </div>
          <div className="inline-block text-right ml-3">
            <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
              Post
            </button>
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-light text-gray-600">Jun 1, 2020</span>
                <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  Laravel
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-700 hover:underline">
                  Build Your New Idea with Laravel Freamwork.
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-blue-500 hover:underline">Read more</div>
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
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-light text-gray-600">Jun 1, 2020</span>
                <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  Laravel
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-700 hover:underline">
                  Build Your New Idea with Laravel Freamwork.
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-blue-500 hover:underline">Read more</div>
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex">
            <div className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
              previous
            </div>

            <div className="border border-gray px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
              1
            </div>

            <div className="border border-gray px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
              2
            </div>

            <div className="border border-gray px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
              3
            </div>

            <div className="border border-gray px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
