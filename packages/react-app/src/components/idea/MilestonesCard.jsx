const MilestonesCard = () => {
  return (
    <div>
      <div className="mt-4 w-full">
        <div className="shadow-xl rounded-lg p-4 bg-white">
          <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="pl-3">
              <div className="font-medium text-xl text-gray-700">
                How things are going?
              </div>
            </div>
            <div class="inline-block ml-3">
            <a href="#">
            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
              Submit Bounty
            </button>
            </a>
          </div>
          </div>
          <div class="flex w-full p-2 isolate">
            {/* <div class="w-full">
              <div class="flex mx-auto items-center ml-2">
                <input type="checkbox" class="form-checkbox" checked />
                <span class="ml-2 text-gray-800 text-l font-medium">
                  Concept
                </span>
                <div class="flex mx-2 h-0.5 w-full bg-blue-500 border-dashed"></div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex mx-auto items-center">
                <input type="checkbox" />
                <span class="ml-2 text-gray-800 text-l font-medium">
                  Development
                </span>
                <div class="flex mx-2 h-0.5 w-full bg-blue-500"></div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex mx-auto items-center">
                <input type="checkbox" />
                <span class="ml-2 text-gray-800 text-l font-medium">Build</span>
                <div class="flex mx-2 h-0.5 w-full bg-blue-500"></div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex mx-auto items-center">
                <input type="checkbox" />
                <span class="ml-2 text-gray-800 text-l font-medium">
                  Launch
                </span>
              </div>
            </div> */}

<div class="w-full py-6">
  <div class="flex">
    <div class="w-1/4">
      <div class="relative mb-2">
        <div class="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-white w-full">

          <svg fill="#ffffff" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="39" height="26">
<path d="m6.5293 2.5156a1 1 0 0 0-0.7207 0.29297 1 1 0 0 0 0 1.4141 1 1 0 0 0 1.4141 0 1 1 0 0 0 0-1.4141 1 1 0 0 0-0.69336-0.29297zm16.971 0a1 1 0 0 0-0.72266 0.29297 1 1 0 0 0 0 1.4141 1 1 0 0 0 1.4141 0 1 1 0 0 0 0-1.4141 1 1 0 0 0-0.69141-0.29297zm-8.5 0.48438c-4.971 0-9 4.029-9 9 0 5 4 7 6 11h6c2-4 6-6 6-11 0-4.971-4.029-9-9-9zm0 3v5h4l-4 7v-5h-4l4-7zm-12 5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm24 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-20.471 8.4844a1 1 0 0 0-0.72266 0.29297 1 1 0 0 0 0 1.4141 1 1 0 0 0 1.416 0 1 1 0 0 0 0-1.4141 1 1 0 0 0-0.69336-0.29297zm16.969 0.001953a1 1 0 0 0-0.7207 0.29102 1 1 0 0 0 0 1.416 1 1 0 0 0 1.4141 0 1 1 0 0 0 0-1.416 1 1 0 0 0-0.69336-0.29102zm-11.498 5.5137v1c0 1.105 0.895 2 2 2a1 1 0 0 0 1 1 1 1 0 0 0 1-1c1.105 0 2-0.895 2-2v-1h-6z"/>
</svg>


          </span>
        </div>
      </div>

      <div class="text-xs text-center md:text-base">Concept</div>
    </div>

    <div class="w-1/4">
      <div class="relative mb-2">
        <div class="absolute flex align-center items-center align-middle content-center w-10/12 transform -translate-x-1/2 translate-y-4">
          <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div class="w-full bg-blue-300 py-1 rounded"></div>
          </div>
        </div>

        <div class="w-10 h-10 mx-auto bg-blue-600 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-white w-full">
            
<svg fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="39" height="26">
<path d="M16.432 15C14.387 9.893 12 8.547 12 6V3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v3c0 2.547-2.387 3.893-4.432 9-.651 1.625-2.323 4 6.432 4s7.083-2.375 6.432-4zm-1.617 1.751c-.702.21-2.099.449-4.815.449s-4.113-.239-4.815-.449c-.249-.074-.346-.363-.258-.628.22-.67.635-1.828 1.411-3.121 1.896-3.159 3.863.497 5.5.497s1.188-1.561 1.824-.497a15.353 15.353 0 0 1 1.411 3.121c.088.265-.009.553-.258.628z"/>
</svg>

          </span>
        </div>
      </div>

      <div class="text-xs text-center md:text-base">Development</div>
    </div>

    <div class="w-1/4">
      <div class="relative mb-2">
        <div class="absolute flex align-center items-center align-middle content-center w-10/12 transform -translate-x-1/2 translate-y-4">
          <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div class="w-1/3 bg-blue-300 py-1 rounded"></div>
          </div>
        </div>

        <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-gray-600 w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
          </span>
        </div>
      </div>

      <div class="text-xs text-center md:text-base">Build</div>
    </div>

    <div class="w-1/4">
      <div class="relative mb-2">
        <div class="absolute flex align-center items-center align-middle content-center w-10/12 transform -translate-x-1/2 translate-y-4">
          <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
            <div class="w-0 bg-blue-300 py-1 rounded"></div>
          </div>
        </div>

        <div class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
          <span class="text-center text-gray-600 w-full">
            <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
            </svg>
          </span>
        </div>
      </div>

      <div class="text-xs text-center md:text-base">Launch</div>
    </div>
  </div>
</div>

          </div>
          {/* !TODO
          Look into doing something like this timeline
          https://play.tailwindcss.com/2lnvm6wbTs */}
          <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="pl-3">
              <div className="font-medium text-xl text-gray-700">
                Milestones
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* <p className="text-gray-800 text-sm font-medium mb-2">
              Current Milestone:
            </p> */}
            <p className="text-gray-800 text-lg font-medium mb-2 mx-3">
              Finishing MVP
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2 mx-3">
              Last Milestone Completed: Sunday, 23 August
            </p>
          </div>
          <div className="flex items-center justify-between my-2 mx-3">
            <p className="text-gray-400 text-sm mx-2">4/6 milestones completed</p>
          </div>
          <div className="w-full h-2 bg-blue-200 rounded-full">
            <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
          </div>

          <div className="mt-4 ml-3">
          For more information, explore the project details on the Notion Idea Blueprint.
          </div>
          <div class="inline-block ml-3">
            <a href="www.notion link variable from user input when creating idea">
            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
              Notion Idea Blueprint
            </button>
            </a>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default MilestonesCard;
