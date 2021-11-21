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
                <span className="font-light text-gray-600">September 27, 2021</span>
                <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  Milestone
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-700 hover:underline">
                  Release of Alpha version of the App.
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-blue-500 hover:underline">Read more</div>
                <div>
                  <div className="flex items-center">
                  <div className="justify-right">
                    <div className="flex mr-2">
                      <div className="mr-2 -py-3 text-sm text-gray-500">52</div>
                    <svg
                      version="1.1"
                      viewBox="0 0 29.338 29.338"
                          width="20"
                          height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m27.184 1.605h-25.028c-1.189 0-2.156 0.967-2.156 2.155v17.572c0 1.188 0.967 2.155 2.156 2.155h13.543l5.057 3.777c0.414 0.31 0.842 0.468 1.268 0.468 0.789 0 1.639-0.602 1.637-1.923v-2.322h3.523c1.188 0 2.154-0.967 2.154-2.155v-17.572c0-1.188-0.967-2.155-2.154-2.155zm0.156 19.727c0 0.085-0.068 0.155-0.154 0.155h-5.523v3.955l-5.297-3.956h-14.21c-0.086 0-0.154-0.07-0.154-0.155v-17.572c0-0.085 0.068-0.155 0.154-0.155v1e-3h25.029c0.086 0 0.154 0.07 0.154 0.155l1e-3 17.572zm-21.835-10.54h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333z"
                        fill="808080"/>
                    </svg>
                    </div>
                  </div>
                  


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
                <span className="font-light text-gray-600">August 14, 2021</span>
                <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  Update
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-700 hover:underline">
                  Market survey results of participants.
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-blue-500 hover:underline">Read more</div>

                <div className="flex items-center">

                  <div className="justify-right">
                    <div className="flex mr-2">
                      <div className="mr-2 -py-3 text-sm text-gray-500">12</div>
                    <svg
                      version="1.1"
                      viewBox="0 0 29.338 29.338"
                          width="20"
                          height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m27.184 1.605h-25.028c-1.189 0-2.156 0.967-2.156 2.155v17.572c0 1.188 0.967 2.155 2.156 2.155h13.543l5.057 3.777c0.414 0.31 0.842 0.468 1.268 0.468 0.789 0 1.639-0.602 1.637-1.923v-2.322h3.523c1.188 0 2.154-0.967 2.154-2.155v-17.572c0-1.188-0.967-2.155-2.154-2.155zm0.156 19.727c0 0.085-0.068 0.155-0.154 0.155h-5.523v3.955l-5.297-3.956h-14.21c-0.086 0-0.154-0.07-0.154-0.155v-17.572c0-0.085 0.068-0.155 0.154-0.155v1e-3h25.029c0.086 0 0.154 0.07 0.154 0.155l1e-3 17.572zm-21.835-10.54h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333z"
                        fill="808080"/>
                    </svg>
                    </div>
                  </div>
                  
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                    alt="avatar"
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  />
                  <h1 className="font-bold text-gray-700 hover:underline">
                    Violette McMaster
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-light text-gray-600">Jun 1, 2021</span>
                <div className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                  Update
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold text-gray-700 hover:underline">
                  Youtube demonstration video
                </div>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-blue-500 hover:underline">Read more</div>
                <div>
                  <div className="flex items-center">

                  <div className="justify-right">
                    <div className="flex mr-2">
                      <div className="mr-2 -py-3 text-sm text-gray-500">3</div>
                    <svg
                      version="1.1"
                      viewBox="0 0 29.338 29.338"
                          width="20"
                          height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m27.184 1.605h-25.028c-1.189 0-2.156 0.967-2.156 2.155v17.572c0 1.188 0.967 2.155 2.156 2.155h13.543l5.057 3.777c0.414 0.31 0.842 0.468 1.268 0.468 0.789 0 1.639-0.602 1.637-1.923v-2.322h3.523c1.188 0 2.154-0.967 2.154-2.155v-17.572c0-1.188-0.967-2.155-2.154-2.155zm0.156 19.727c0 0.085-0.068 0.155-0.154 0.155h-5.523v3.955l-5.297-3.956h-14.21c-0.086 0-0.154-0.07-0.154-0.155v-17.572c0-0.085 0.068-0.155 0.154-0.155v1e-3h25.029c0.086 0 0.154 0.07 0.154 0.155l1e-3 17.572zm-21.835-10.54h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333zm7 0h4.334v4.333h-4.334v-4.333z"
                        fill="808080"/>
                    </svg>
                    </div>
                  </div>
                  


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
