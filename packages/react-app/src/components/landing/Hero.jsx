import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLightbulb,
  faGlobe,
  faKey,
  faHammer,
  faSatellite,
  faBarcode,
  faPlay,
  faFileInvoice,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    A decentralized collaboration network to
                  </span>
                  <span className="block text-indigo-600">
                    Ideate - Make - Fund any idea.
                  </span>
                </span>
              </h1>

              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <form action="#" method="POST" className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 px-1 text-base rounded-md placeholder-gray-500 shadow-sm sm:flex-1 border-2 border-gray-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Join TIDAI
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  By joining TIDAI you agree to receive the top ideas from the
                  community in your inbox.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>

              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                  />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <section class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            How does it work?
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Unleash your ideas into the world
              </h3>
              <p class="text-gray-600 mb-8">
                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faLightbulb} size="2x" />
                  </div>
                  <div class="flex-initial ml-4">
                    Share that awesome idea you have been sleeping on for a
                    while so you can find awesome makers or funders to help you
                    create it.
                    <br />
                    <br />
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faSatellite} size="2x" />
                  </div>
                  <div class="flex-initial ml-3">
                    Or discover great ideas from others that you would like to
                    be part of as a maker or funder.
                    <br />
                    <br />
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faBarcode} size="2x" />
                  </div>
                  <div class="flex-initial ml-4">
                    Each idea is a unique{" "}
                    <a
                      class="text-pink-500 underline"
                      href="https://undraw.co/"
                    >
                      Non Fungible Token
                    </a>{" "}
                    open to collaboration for members.
                    <br />
                    <br />
                  </div>
                </div>
              </p>

              <br />
              <br />
            </div>

            <div className="relative mx-auto w-full rounded-lg shadow-sm lg:max-w-md">
              <svg
                data-name="Layer 1"
                viewBox="0 0 1013 844.99"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>new_ideas</title>
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1050.5 297.81c0 35.17-8.33 64.12-22.78 88.92a177.68 177.68 0 0 1-16.19 23.25c-53.12 64.97-151.88 100.53-241.14 158.13-263.48 170.02-292.02-102.42-280.12-270.3 4.8-67.74 31.18-129.79 73.09-177.3a278.22 278.22 0 0 1 28.45-27.97c47.58-40.52 109.05-65.04 178.58-65.04 119.29 0 221.16 71.95 261.55 173.34a261.85 261.85 0 0 1 18.56 96.97z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m830.05 88.423-266.71 32.09a278.22 278.22 0 0 1 28.45-27.97z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1027.7 386.73a177.68 177.68 0 0 1-16.19 23.25l-228.46-27.48z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1041.2 228.72-387.19-50.22 377.87 22.34a260.44 260.44 0 0 1 9.3199 27.88z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m516.52 99.505c0 0.69-0.02 1.37-0.08 2.04a27.997 27.997 0 1 1-52.68-15.11 25.74 25.74 0 0 1 2.06-3.31 27.989 27.989 0 0 1 50.6 14.1c0.06997 0.74997 0.1 1.51 0.1 2.28z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m516.52 99.505c0 0.69-0.02 1.37-0.08 2.04l-41.92-5.04 41.9 0.72c0.06997 0.74997 0.1 1.51 0.1 2.28z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m506.52 113.61-38.78 4.67a28.057 28.057 0 0 1-2.96-3.95z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m495.52 82.615-31.76 3.82a25.74 25.74 0 0 1 2.06-3.31z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m900.25 603.63c-0.32346 0.60949-0.65991 1.2008-1.027 1.7644a27.997 27.997 0 1 1-39.45-38.042 25.739 25.739 0 0 1 3.3713-1.9581 27.989 27.989 0 0 1 38.086 36.175c-0.28977 0.69535-0.61952 1.3807-0.98048 2.0609z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m900.25 603.63c-0.32346 0.60949-0.65991 1.2008-1.027 1.7644l-34.666-24.103 36.674 20.278c-0.2898 0.69531-0.61955 1.3807-0.98051 2.0609z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m884.8 611.41-36.444-14.054a28.057 28.057 0 0 1-0.76292-4.8767z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m889.62 578.87-29.845-11.514a25.739 25.739 0 0 1 3.3713-1.9581z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1098.6 120.96c0.48176 0.494 0.9422 0.99477 1.367 1.5163a27.997 27.997 0 1 1-48.264 25.964 25.739 25.739 0 0 1-0.83628-3.8079 27.989 27.989 0 0 1 46.069-25.235c0.57376 0.48809 1.1259 1.0112 1.6635 1.5625z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1098.6 120.96c0.48176 0.494 0.9422 0.99477 1.367 1.5163l-33.53 25.66 30.499-28.739c0.57379 0.48809 1.1259 1.0112 1.6636 1.5625z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1101.3 138.04-24.502 30.419a28.057 28.057 0 0 1-4.8769-0.76118z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m1071.7 123.53-20.07 24.91a25.739 25.739 0 0 1-0.83628-3.8079z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m573.27 636.96s61.446 2.5602 61.446 17.922-69.126 0-69.126 0z"
                  fill="#a0616a"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m481.1 872.5-115.21-7.6807-5.1205-61.446-25.602 53.765-112.65-15.361c2.5602-97.289 43.524-192.02 46.084-204.82s8.6792-65.696 8.6792-65.696c11.188-23.733 69.817-25.961 115.77-23.81 19.048 0.87055 35.946 2.509 46.366 3.6867 6.8869 0.768 10.958 1.3314 10.958 1.3314 18.357 18.92 30.185 44.702 37.456 73.504 26.217 103.77-6.7334 246.52-6.7334 246.52z"
                  fill="#2f2e41"
                />
                <circle cx="259.6" cy="187.01" r="64.006" fill="#a0616a" />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m309.56 229.88s-17.922 79.367-46.084 102.41 110.09 0 110.09 0-30.723-51.205-7.6807-74.247-56.325-28.163-56.325-28.163z"
                  fill="#a0616a"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m440.13 557.59-42.474 4.7107-118.82 13.211s-0.56318-1.5106-1.5617-4.2501c-8.628-23.529-50.18-138.02-54.763-172.41-5.1205-38.403 48.644-84.488 48.644-84.488s51.205-10.241 66.566-10.241 76.807 23.042 76.807 23.042l22.914 206.12 1.9714 17.845z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m487.83 625.97-86.101-50.462s-1.5108-4.9158-4.071-13.211c-1.2801-4.1476-2.8415-9.1655-4.6082-14.849-9.9337-31.901-26.601-84.539-39.965-122.99-20.482-58.885 79.367 104.97 79.367 104.97l4.9923 3.866 1.9714 17.845c6.8869 0.768 10.958 1.3314 10.958 1.3314 18.357 18.92 30.185 44.702 37.456 73.504z"
                  opacity=".15"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m373.57 332.29s-25.602 33.283-5.1205 92.168 48.644 151.05 48.644 151.05l148.49 87.048 20.482-25.602-138.25-107.53s-5.1205-194.58-30.723-202.26-43.524 5.1205-43.524 5.1205z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m246.84 556.31s35.843 74.247 51.205 66.566-38.403-84.488-38.403-84.488z"
                  fill="#a0616a"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m243 352.77-135.69 112.65s-51.205 35.843 43.524 61.446 102.41 40.964 102.41 40.964 10.241-33.283 23.042-28.163l-110.09-53.765 89.608-53.765z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m188.46 267.05c7.1217-3.5269 22.848-10.645 36.243-19.22-0.93932-27.898 2.4961-53.223 12.552-66.647 5.6446-12.817 17.498-25.648 26.781-35.753 22.798-24.815 73.21-38.667 82.151-26.268 67.625 1.3351 74.745 54.343 74.745 54.343-0.3518 22.172-23.396 22.873-43.582 22.066 1.8076 15.136-3.0097 30.864-16.96 37.839-26.676 13.338-34.679 30.677-21.341 42.682s37.346 44.015 5.3352 52.018-36.013 24.009-26.676 30.678-21.341-12.004-21.341-12.004-5.3351 32.011-33.345 24.008c-2.5101-0.71721-5.0189-2.5549-7.4854-5.3033-7.5648 8.312-14.313 13.227-19.4 13.254-29.13 0.15447-25.637-32.11-25.637-32.11s-34.576 9.7105-23.787 5.8058 11.251-20.396-17.417-36.734 3.082-40.69 19.163-48.653z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m545.87 350.68-0.46437-0.06122 1.1329 4.3064a113.18 113.18 0 0 0 4.65 17.677l33.226 126.31a21.408 21.408 0 0 0 17.431 15.71l67.76 10.483a21.408 21.408 0 0 0 22.146-11.052l64.394-120.28a113 113 0 0 0 5.5084-10.288l2.1863-4.0837-0.34094-0.04495a113.85 113.85 0 1 0-217.63-28.678z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m673.76 533.36a23.298 23.298 0 0 1-3.5645-0.27442l-70.828-10.958a23.371 23.371 0 0 1-19.034-17.155l-34.73-132.03a119.06 119.06 0 0 1-4.8779-18.556l-0.87842-5.7759a120.03 120.03 0 0 1 137.39-133.86l-0.30664 1.9766a118.07 118.07 0 0 0-134.93 132.91l0.6753 4.3203a118.28 118.28 0 0 0 4.8369 18.4l34.754 132.1a21.37 21.37 0 0 0 17.405 15.688l70.828 10.958a21.407 21.407 0 0 0 22.114-11.036l1.7637 0.94336a23.421 23.421 0 0 1-20.619 12.344z"
                  fill="#d0cde1"
                />
                <rect
                  transform="translate(-64.902 890.75) rotate(-69.885)"
                  x="608.74"
                  y="437.38"
                  width="125.31"
                  height="2.5868"
                  fill="#d0cde1"
                />
                <rect
                  transform="translate(-111.81 .25189) rotate(-2.5158)"
                  x="621.53"
                  y="368.5"
                  width="2.5868"
                  height="125.31"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m667.78 593.21-90.757-14.04a2.587 2.587 0 0 1 0.791-5.1131l90.757 14.04a2.587 2.587 0 1 1-0.791 5.1131z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m670.1 573.94-90.757-14.04a2.587 2.587 0 1 1 0.791-5.1131l90.757 14.04a2.587 2.587 0 1 1-0.791 5.1131z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m672.43 554.67-90.757-14.04a2.587 2.587 0 0 1 0.791-5.1131l90.757 14.04a2.587 2.587 0 0 1-0.791 5.1131z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m619.58 604.43c18.002 2.785 34.148-4.9905 36.063-17.367l-65.192-10.085c-1.9147 12.377 11.127 24.667 29.129 27.452z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-93.485 -27.503)"
                  d="m652.2 354.6c-3.8724-0.59843-7.0762-3.6594-8.8326-5.711-0.57595-0.67259-1.1365-1.3703-1.6987-2.0695-2.0455-2.5462-3.9768-4.9508-6.6664-6.2048-5.9369-2.7699-12.932 1.099-18.989 5.2498l-1.4632-2.1334c6.6588-4.5651 14.424-8.7821 21.546-5.4614 3.2349 1.5089 5.4487 4.2646 7.5891 6.9291 0.545 0.67867 1.089 1.3553 1.6469 2.0078 1.8264 2.1327 5.4688 5.5888 9.3717 4.7917a12.598 12.598 0 0 0 4.4954-2.3799 24.077 24.077 0 0 1 3.1814-2.0073 12.669 12.669 0 0 1 13.907 1.9654 25.024 25.024 0 0 1 1.8872 1.9958c1.1637 1.3266 2.2623 2.5785 3.6925 3.0337 2.1144 0.676 4.349-0.53253 6.7169-1.8093 2.442-1.3177 4.9664-2.6809 7.8299-2.3446 0.09286 0.01117 0.18677 0.02378 0.27915 0.03807 5.0956 0.78831 7.4448 6.4236 8.7741 10.629l-2.4672 0.7789c-1.8062-5.7168-4.0058-8.5598-6.889-8.8768-2.0512-0.24128-4.114 0.87246-6.298 2.0512-2.7378 1.4784-5.5715 3.0065-8.7311 1.9981-2.1148-0.67292-3.5069-2.2585-4.852-3.7921a22.797 22.797 0 0 0-1.6884-1.7931 10.165 10.165 0 0 0-11.012-1.5566 21.837 21.837 0 0 0-2.8363 1.8012 14.697 14.697 0 0 1-5.4696 2.8024 8.504 8.504 0 0 1-3.0231 0.06725z"
                  fill="#d0cde1"
                />
              </svg>
            </div>

            {/*  */}
          </div>

          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="relative mx-auto w-full rounded-lg shadow-sm lg:max-w-md">
              <svg
                data-name="Layer 1"
                viewBox="0 0 1115.9 832.56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>good team</title>
                <line
                  x1="389.96"
                  x2="533.96"
                  y1="255.28"
                  y2="255.28"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  transform="translate(-296.3 483.9) rotate(-69.082)"
                  cx="248.87"
                  cy="443.5"
                  rx="39.5"
                  ry="12.4"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m1153.4 543.01c15.666 116.59-5.6662 233.3-114.17 278.75s-233.3-5.6662-278.75-114.17 61.785-173.42 114.17-278.75c106.38-213.89 230.1-247.9 278.75 114.17z"
                  fill="#f2f2f2"
                />
                <ellipse
                  cx="916"
                  cy="794.44"
                  rx="170"
                  ry="23.127"
                  fill="#3f3d56"
                />
                <rect
                  transform="translate(313.59 1787.2) rotate(254.55)"
                  x="858.75"
                  y="753.63"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(-218.61 219.34) rotate(-15.452)"
                  cx="844.36"
                  cy="777.24"
                  rx="7.5"
                  ry="20"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(111.82 1518.5) rotate(-82.281)"
                  cx="965.36"
                  cy="688.07"
                  rx="39.5"
                  ry="12.4"
                  fill="#2f2e41"
                />
                <circle cx="915.58" cy="728.3" r="79" fill="#2f2e41" />
                <rect
                  transform="translate(327.09 1769.5) rotate(254.55)"
                  x="858.75"
                  y="739.63"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(-214.88 218.84) rotate(-15.452)"
                  cx="844.36"
                  cy="763.24"
                  rx="7.5"
                  ry="20"
                  fill="#2f2e41"
                />
                <circle cx="936.33" cy="683.04" r="27" fill="#fff" />
                <circle cx="944.96" cy="671.12" r="9" fill="#3f3d56" />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m1048.9 816.31c29.235-1.4631 51.625-28.808 50.01-61.076s-26.623-57.241-55.858-55.778-33.822 24.412-32.207 56.681 8.8208 61.636 38.055 60.173z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m925.34 728.59a18 18 0 0 1-2.9042-35.883c9.9087-0.802 12.611 7.0645 13.413 16.973s-0.60004 18.107-10.509 18.909z"
                  fill="#fff"
                />
                <polyline
                  points="49.464 361.02 491.96 361.02 560.56 394.45 669.87 447.7 741.33 313.89 943.57 313.89"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle cx="222.81" cy="375.03" r="13.685" fill="#6c63ff" />
                <circle cx="350.54" cy="361.03" r="13.685" fill="#6c63ff" />
                <circle cx="560.38" cy="394.48" r="13.685" fill="#6c63ff" />
                <circle cx="855.38" cy="313.89" r="13.685" fill="#6c63ff" />
                <circle cx="712.44" cy="367.11" r="13.685" fill="#6c63ff" />
                <circle
                  cx="427.58"
                  cy="581.44"
                  r="14.756"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  cx="170"
                  cy="809.44"
                  rx="170"
                  ry="23.127"
                  fill="#3f3d56"
                />
                <circle cx="160.8" cy="696.44" r="79" fill="#2f2e41" />
                <rect
                  x="124.8"
                  y="758.44"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <rect
                  x="172.8"
                  y="758.44"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="144.8"
                  cy="801.94"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="192.8"
                  cy="800.94"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <circle cx="162.8" cy="676.44" r="27" fill="#fff" />
                <circle cx="162.8" cy="676.44" r="9" fill="#3f3d56" />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m126.22 656.69c-6.3789-28.568 14.012-57.434 45.544-64.475s62.265 10.41 68.644 38.978-14.519 39.104-46.051 46.145-61.758 7.9201-68.137-20.647z"
                  fill="#6c63ff"
                />
                <circle cx="133.8" cy="469.44" r="79" fill="#2f2e41" />
                <rect
                  x="97.805"
                  y="531.44"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <rect
                  x="145.8"
                  y="531.44"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="117.8"
                  cy="574.94"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="165.8"
                  cy="573.94"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <circle cx="135.8" cy="449.44" r="27" fill="#fff" />
                <circle cx="135.8" cy="449.44" r="9" fill="#3f3d56" />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m99.215 429.69c-6.3789-28.568 14.012-57.434 45.544-64.475s62.265 10.41 68.644 38.978-14.519 39.104-46.051 46.145-61.758 7.9201-68.137-20.647z"
                  fill="#6c63ff"
                />
                <ellipse
                  transform="translate(-413.9 311.36) rotate(-64.626)"
                  cx="86.867"
                  cy="466.5"
                  rx="12.4"
                  ry="39.5"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m137.04 531.65c0 7.732 19.909 23 42 23s42.805-21.768 42.805-29.5-20.713 1.5-42.805 1.5-42-2.732-42 5z"
                  fill="#fff"
                />
                <rect
                  x="835.47"
                  y="564.71"
                  width="126.13"
                  height="64.161"
                  fill="#6c63ff"
                />
                <rect
                  x="825.6"
                  y="575.13"
                  width="126.13"
                  height="64.161"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <rect x="226.6" y="199" width="36" height="36" fill="#ff6584" />
                <rect
                  x="217.6"
                  y="187"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle cx="906.05" cy="189.47" r="79" fill="#2f2e41" />
                <rect
                  transform="matrix(-.98401 .17813 -.17813 -.98401 1969 387.88)"
                  x="974.59"
                  y="279.58"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <rect
                  transform="translate(1876.8 413.26) rotate(169.74)"
                  x="927.35"
                  y="288.13"
                  width="24"
                  height="43"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(-36.8 652.79) rotate(-40.261)"
                  cx="939.06"
                  cy="336.1"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(-20.433 680.7) rotate(-40.261)"
                  cx="985.31"
                  cy="327.73"
                  rx="20"
                  ry="7.5"
                  fill="#2f2e41"
                />
                <circle cx="900.52" cy="170.15" r="27" fill="#fff" />
                <circle cx="889.42" cy="160.47" r="9" fill="#3f3d56" />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m1010.4 137.24c1.188-29.247-24.019-54.019-56.301-55.331s-59.415 21.335-60.603 50.582 21.252 35.892 53.534 37.203 62.181-3.2078 63.369-32.455z"
                  fill="#6c63ff"
                />
                <ellipse
                  transform="translate(434.06 981.46) rotate(-77.09)"
                  cx="875.15"
                  cy="208.8"
                  rx="12.4"
                  ry="39.5"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(529.35 1152.6) rotate(-77.09)"
                  cx="1030.2"
                  cy="234.58"
                  rx="12.4"
                  ry="39.5"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m969.79 254.32a18 18 0 1 1-35.424 6.4128c-1.7708-9.7821 5.7924-13.244 15.575-15.014s18.079-1.1805 19.85 8.6017z"
                  fill="#fff"
                />
                <line
                  x1="712.6"
                  x2="803.6"
                  y1="99"
                  y2="169"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle cx="669.6" cy="68" r="68" fill="#ff6584" />
                <ellipse
                  transform="translate(67.553 1505.4) rotate(-82.281)"
                  cx="935.71"
                  cy="706.84"
                  rx="39.5"
                  ry="12.4"
                  fill="#2f2e41"
                />
                <circle cx="68.811" cy="786.03" r="13.685" fill="#6c63ff" />
                <rect x="256.6" y="770" width="36" height="36" fill="#ff6584" />
                <circle cx="256.81" cy="794.03" r="13.685" fill="#6c63ff" />
                <circle cx="461.96" cy="255.03" r="13.685" fill="#6c63ff" />
                <circle cx="727.72" cy="679.25" r="6.5354" fill="#ff6584" />
                <line
                  x1="759.74"
                  x2="759.74"
                  y1="787.72"
                  y2="713.31"
                  fill="#3f3d56"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle cx="759.74" cy="713.31" r="10.523" fill="#3f3d56" />
                <path
                  transform="translate(-42.043 -33.718)"
                  d="m801.78 792.89s-1.5033-32.332-32.32-28.574"
                  fill="#3f3d56"
                />
              </svg>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Make and collaborate with others
                </h3>
                <p class="text-gray-600 mb-8">
                  <div class="flex">
                    <div class="flex-initial ...">
                      <FontAwesomeIcon icon={faKey} size="2x" />
                    </div>
                    <div class="flex-initial ml-4">
                      Anyone can see ideas, but only members who purchase your
                      idea NFT can access the community.
                      <br />
                      <br />
                    </div>
                  </div>

                  <div class="flex">
                    <div class="flex-initial ...">
                      <FontAwesomeIcon icon={faHammer} size="2x" />
                    </div>
                    <div class="flex-initial ml-3">
                      Invite other makers, expert advisors to help you in your
                      idea execution.
                      <br />
                      <br />
                    </div>
                  </div>

                  <div class="flex">
                    <div class="flex-initial ...">
                      <FontAwesomeIcon icon={faGlobe} size="2x" />
                    </div>
                    <div class="flex-initial ml-4">
                      Interact with others as a{" "}
                      <a
                        class="text-pink-500 underline"
                        href="https://undraw.co/"
                      >
                        {" "}
                        Decentralised Autonomous Organization
                      </a>{" "}
                      with clear defined agreed upon community rules.
                      <br />
                      <br />
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Crowdfund your dream idea
              </h3>
              <p class="text-gray-600 mb-8">
                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faPlay} size="2x" />
                  </div>
                  <div class="flex-initial ml-6">
                    Share a plan and posts updates with proof of work to gain
                    community trust.
                    <br />
                    <br />
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faFileInvoice} size="2x" />
                  </div>
                  <div class="flex-initial ml-8">
                    Offer potential funders incentives to invest in the future
                    you.
                    <br />
                    <br />
                  </div>
                </div>

                <div class="flex">
                  <div class="flex-initial ...">
                    <FontAwesomeIcon icon={faMoneyBill} size="2x" />
                  </div>
                  <div class="flex-initial ml-4">
                    Easily collect funds from backers using{" "}
                    <a
                      class="text-pink-500 underline"
                      href="https://undraw.co/"
                    >
                      MATIC POLYGON CHAIN Token
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </p>
            </div>

            <div className="relative mx-auto w-full rounded-lg shadow-sm lg:max-w-md">
              <svg
                data-name="Layer 1"
                viewBox="0 0 1099 797.68"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>transfer money</title>
                <circle cx="471" cy="373" r="373" fill="#f2f2f2" />
                <ellipse cx="148" cy="774" rx="148" ry="23.68" fill="#f2f2f2" />
                <ellipse
                  cx="870"
                  cy="736.97"
                  rx="229"
                  ry="36.64"
                  fill="#f2f2f2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m869.62 435.94s1.9496 6.4988-9.0983 12.348-14.297 27.945-1.2998 34.443 16.897 14.947 10.398 20.796-18.197 21.446-2.5995 25.345 17.547 11.698 12.998 14.947 10.398-5.8489 10.398-5.8489 2.5995 15.597 16.247 11.698 51.99-77.985 32.494-88.383-69.537-25.345-69.537-25.345z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m893.18 498.7s6.7412 23.594-5.0559 25.279a46.052 46.052 0 0 0-20.224 8.4265l21.909 28.65h40.447l25.279-25.279s-33.706-25.279-26.965-40.447-35.391 3.3706-35.391 3.3706z"
                  fill="#ffb9b9"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m893.18 498.7s6.7412 23.594-5.0559 25.279a46.052 46.052 0 0 0-20.224 8.4265l21.909 28.65h40.447l25.279-25.279s-33.706-25.279-26.965-40.447-35.391 3.3706-35.391 3.3706z"
                  opacity=".1"
                />
                <polygon
                  points="852.79 740.78 891.55 754.26 918.51 755.95 916.83 732.35 861.21 715.9"
                  fill="#ffb9b9"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m953 786.88s0 23.594 3.3706 23.594 48.874-5.0559 62.356 0 33.706-13.482 23.594-23.594-26.606-25.279-36.897-21.909-52.424 11.797-52.424 11.797z"
                  fill="#575a89"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m829.13 764.97s-20.224 40.447-6.7412 43.818 28.65-1.6853 30.335-3.3706 25.279-8.4265 28.65-5.0559 3.3706-13.482 3.3706-13.482z"
                  fill="#575a89"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m845.99 709.36s-32.021 43.818-8.4265 55.615 136.51 11.797 144.94 0 11.797-48.874 0-52.244-136.51-3.3706-136.51-3.3706z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m845.99 709.36s-32.021 43.818-8.4265 55.615 136.51 11.797 144.94 0 11.797-48.874 0-52.244-136.51-3.3706-136.51-3.3706z"
                  opacity=".2"
                />
                <circle cx="856.16" cy="420.57" r="38.762" fill="#ffb9b9" />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m845.99 532.4 33.706-6.7412s8.4265 26.965 35.391 21.909 33.706-21.909 33.706-21.909 20.224 8.4265 21.909 8.4265 23.594 8.4265 23.594 13.482-25.279 55.615-25.279 55.615l3.3706 91.006-124.71-3.3706 8.4265-89.321z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m827.45 576.22s-10.112 89.321-3.3706 96.062 33.706 25.279 33.706 25.279v-20.224l-13.482-25.279 13.482-58.985z"
                  fill="#ffb9b9"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m1001.9 573.69s-5.8985 91.849-5.8985 95.219-15.168 15.168-20.224 15.168-8.4265-8.4265-8.4265-8.4265l11.797-13.482-8.4265-69.097z"
                  fill="#ffb9b9"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m985.87 702.62s75.838-42.132 77.524 0-38.762 58.985-38.762 58.985-104.49 31.332-108.7 19.879-12.64-29.991-5.8985-31.676 15.168-5.0559 18.538-1.6853 45.503-25.279 45.503-25.279z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m1021.3 697.56s-15.168 6.7412-20.224 11.797-26.965 13.482-26.965 13.482"
                  fill="none"
                  opacity=".2"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m856.1 535.77-10.112-3.3706s-37.077 38.762-25.279 48.874 18.538 13.482 21.909 16.853 20.224 5.0559 20.224 5.0559z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m979.13 544.2 15.168 3.3706s11.797 25.279 15.168 28.65-5.0559 1.6853-10.112 8.4265-10.112 18.538-20.224 18.538-23.594-16.853-23.594-16.853z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m849.36 717.79s-64.041-45.503-85.95-11.797 94.377 79.209 111.23 85.95 32.021 13.482 32.021 13.482 15.168-37.077 15.168-43.818-11.797-6.7412-15.168-6.7412-18.538-3.3706-21.909-8.4265-35.391-28.65-35.391-28.65z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m813.97 705.99s16.853 13.482 32.021 16.853 20.224 11.797 20.224 11.797"
                  fill="none"
                  opacity=".2"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m837.73 642.62 1.3463 71.356a8.9328 8.9328 0 0 0 9.0315 8.7637l132.79-1.492a8.9328 8.9328 0 0 0 8.8176-8.4177l4.0306-69.864a8.9328 8.9328 0 0 0-8.9179-9.4473h-138.17a8.9328 8.9328 0 0 0-8.9312 9.1013z"
                  fill="#575a89"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m908.73 423.04s2.1598 7.1993-10.079 13.679-15.839 30.957-1.4399 38.156 18.718 16.558 11.519 23.038-20.158 23.758-2.8797 28.077 19.438 12.959 14.399 16.558 11.519-6.4794 11.519-6.4794 2.8797 17.278 17.998 12.959 30.203-82.84 13.35-103.06c-15.67-18.804-54.387-22.925-54.387-22.925z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m904.13 415.63c0.00329-10.547 31.559-2.9686 45.088 11.758 9.3687 10.198 23.599 25.54 11.674 36.355s20.439 24.992 29.119 29.29 25.817 17.443 10.343 26.261-15.224 17.72-9.401 19.827-12.839-3.1337-12.839-3.1337 1.8855 17.415-13.838 17.332-60.832-86.494-50.056-110.51c10.02-22.333-10.09-27.177-10.09-27.177z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m910.96 413.32c-42.198-2.541-46.433 29.223-46.433 29.223 0.29172 18.382 29.483 9.4252 37.59 12.165 9.7814-7.0364 28.636-20.35 42.12-29.851a63.774 63.774 0 0 0-33.277-11.537z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m898.94 616.01s-37.852-177.4-274.77-306.09"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <polygon
                  points="583.43 254.89 583.9 256.84 574.32 259.16 577.34 268.55 575.44 269.16 571.76 257.72"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m118.97 797.27c0 22.469-13.356 30.314-29.834 30.314q-0.57256 0-1.1433-0.01273c-0.76345-0.01636-1.5196-0.05271-2.2667-0.10361-14.871-1.0524-26.424-9.3012-26.424-30.197 0-21.625 27.634-48.912 29.71-50.932l0.00364-0.00363c0.08-0.07816 0.12-0.11634 0.12-0.11634s29.834 28.583 29.834 51.052z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m88.052 824.15 10.912-15.247-10.939 16.921-0.02906 1.7504c-0.76345-0.01636-1.5196-0.05271-2.2667-0.10361l1.1761-22.479-0.0091-0.17451 0.02-0.03271 0.11088-2.1231-10.966-16.963 11.001 15.37 0.02548 0.45079 0.88883-16.985-9.3884-17.528 9.5029 14.547 0.9252-35.212 0.00364-0.12v0.11634l-0.15447 27.767 9.3466-11.008-9.3848 13.4-0.2472 15.207 8.7268-14.594-8.7631 16.832-0.13814 8.4541 12.669-20.313-12.717 23.263z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m261.27 791.45 6.3818-4.7412s4.2244 23.597-0.48949 27.132-22.391 9.4277-22.391 16.498-40.068 16.498-41.246 5.8923 3.5354-16.498 3.5354-16.498 18.855-18.855 21.212-22.391 8.2492-10.606 8.2492-10.606z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m167 498.01s0.17679 1.037 0.48306 2.9344c0.283 1.6852 0.6718 4.0657 1.1432 7.0001 4.9496 30.204 19.386 119.12 18.408 122.05-1.1785 3.5354-9.4277 16.498 0 20.034 0.90744 0.34172 1.8855 1.4495 2.9344 3.1936a68.494 68.494 0 0 1 4.9849 11.761c5.6213 16.31 11.632 42.413 15.108 60.49 1.5203 7.9429 2.5572 14.33 2.8636 17.677a9.6118 9.6118 0 0 1 0.03539 2.3334c-1.1785 4.7138 7.0708 21.212 10.606 25.926s9.4277 9.4277 8.2492 14.142 29.462 17.677 32.997 9.4277 3.5354-12.963 4.7138-15.32 2.3569-18.855-3.5354-21.212-2.3569-43.603-8.2492-51.852c-1.9679-2.7458-4.9731-12.044-8.1196-23.228-1.2373-4.3838-2.4865-9.0506-3.7122-13.729-4.9731-19.174-9.3805-38.465-9.3805-38.465l1.1784-137.88-64.815-8.2492-1.6615 3.665-3.3115 7.2711z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m163.46 724.28s-9.4277-9.4277-14.142 0-9.4277 45.96-17.677 54.209-18.855 49.495-7.0708 51.852 24.748-3.5354 25.926-10.606 25.926-43.603 25.926-47.138-16.498-16.498-16.498-16.498z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m308.41 433.2s-15.32 137.88-18.855 150.84-22.391 62.458-28.283 70.708-43.603 75.422-48.317 78.957-14.142 12.963-14.142 12.963-17.677 17.677-20.034 21.212-22.391-7.0708-23.569-14.142 1.1785-18.855 2.3569-23.569-2.3569-11.785 1.1785-15.32 21.212-21.212 21.212-29.462 30.64-56.566 42.425-67.172 9.4277-28.283 9.4277-28.283v-71.886l-64.815-20.034s3.5354-56.566 11.785-56.566 116.67-18.855 129.63-8.2492z"
                  fill="#2f2e41"
                />
                <circle cx="162.46" cy="146.35" r="38.889" fill="#9f616a" />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m225.92 228.15s4.7138 17.677 10.606 22.391-15.32 24.748-15.32 24.748l-40.068 2.3569-7.0708-22.391s12.963-25.926 9.4277-42.425 42.425 15.32 42.425 15.32z"
                  fill="#9f616a"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m242.42 248.18s-10.606 1.1785-12.963 4.7138-18.855 14.142-31.818 11.785-21.212-5.8923-23.569-4.7138-7.0708 25.926-7.0708 25.926l12.963 37.711-2.3569 103.7-3.5354 28.283s-7.0708-9.4277 21.212-3.5354 64.815-4.7138 76.6-5.8923 31.818-4.7138 32.997-11.785-3.5354-32.997-3.5354-32.997l-18.855-78.957-11.785-42.425z"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m231.27 242.86s9.9685-5.2873 13.504-0.57343 48.317 11.785 48.317 15.32 9.4277 98.991 7.0708 107.24 4.7138 17.677 4.7138 17.677l8.2492 35.354s22.391 67.172 12.963 69.529-17.677 0-21.212 0-2.3569-44.782-11.785-56.566-22.391-41.246-24.748-47.138-31.818-87.206-30.64-96.634-6.4331-44.208-6.4331-44.208z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m182.32 248.18s-9.4277 0-10.606 2.3569-12.963 17.677-17.677 21.212-21.212 18.855-21.212 22.391 34.175 29.462 34.175 29.462 14.142 69.529 7.0708 93.098-17.677 80.135-12.963 83.671 15.32 4.7138 15.32 0 7.0708-55.388 12.963-65.994 23.569-77.778 16.498-96.634-23.569-89.563-23.569-89.563z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m337.87 364.85s1.1785 36.532-11.785 55.388-21.212 40.068-21.212 40.068-21.212-5.8923-24.748-12.963-25.926-1.1785-25.926-3.5354 27.105-14.142 29.462-16.498 10.606-2.3569 15.32-7.0708 5.8923-15.32 5.8923-15.32l4.7138-30.64z"
                  fill="#9f616a"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m239.74 173.53c2.9918-0.27176 6.0774-0.57079 8.7215-1.9968 5.9246-3.1951 7.4956-12.294 2.9855-17.291a22.344 22.344 0 0 0-4.1431-3.3314l-8.9578-6.0972c-3.9619-2.6966-8.0174-5.4375-12.638-6.7087-4.1794-1.1498-8.5936-1.0316-12.92-0.76272-8.3986 0.522-16.849 1.6003-24.749 4.5s-15.268 7.7509-20.052 14.673c-7.5845 10.974-7.6888 25.775-3.5114 38.444s12.112 23.701 19.931 34.51l4.0569-19.795c0.36135-1.7631 0.82864-3.6954 2.295-4.7389 3.6445-2.5935 8.1027 2.7314 12.576 2.6969 2.8741-0.02218 5.2871-2.3861 6.3762-5.0459s1.1609-5.6053 1.4129-8.4684c0.53374-6.0642 2.6534-14.502 8.3962-17.847 5.3514-3.1165 14.206-2.1959 20.221-2.7423z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m237.56 498.96s-3.9802 115.13-6.3371 118.66 0-119.02 0-119.02z"
                  opacity=".1"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m283.66 257.61h9.4277s40.068 54.209 35.354 57.745 0 12.963 0 12.963l9.4277 17.677s11.785 10.606 8.2492 12.963-8.2492 11.785-8.2492 11.785-23.569-3.5354-30.64 10.606l-15.284-19.296z"
                  fill="#d0cde1"
                />
                <rect
                  transform="translate(-148.09 80.569) rotate(-22.438)"
                  x="265.77"
                  y="279.25"
                  width="35"
                  height="65.224"
                  fill="#2f2e41"
                />
                <ellipse
                  transform="translate(-145.45 79.046) rotate(-22.438)"
                  cx="280.75"
                  cy="304.46"
                  rx="7"
                  ry="6.4305"
                  fill="#6c63ff"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m260.09 351.88s-84.849 70.708-98.991 48.317 15.32-41.246 15.32-41.246 25.926 1.1785 55.388-17.677l29.462-12.963s26.896-38.399 36.061-23.777-15.645 40.07-37.24 47.346z"
                  fill="#9f616a"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m145.78 289.43-12.963 4.7138v35.354l-4.7138 7.0708s1.1785 14.142 4.7138 17.677 10.606 2.3569 8.2492 10.606a44.667 44.667 0 0 0-1.1785 16.498s21.212 27.105 22.391 23.569 17.677-47.138 20.034-47.138-23.569-68.351-23.569-68.351z"
                  fill="#d0cde1"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m300.75 467.96s12.185-11.785 6.0925-12.374-27.305-12.374-30.84-6.4815 24.748 18.855 24.748 18.855z"
                  fill="#2f2e41"
                />
                <ellipse cx="482" cy="183" rx="17" ry="9" fill="#57b894" />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m597.5 264.16q-57.5-21.717-115 0v-47a199.04 199.04 0 0 1 115 0z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m581.5 254.44q-41.5-15.674-83 0v-33.922a143.65 143.65 0 0 1 83 0z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  cx="488"
                  cy="179"
                  rx="17"
                  ry="9"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  transform="translate(-97.662 63.338) rotate(-11.535)"
                  cx="543.2"
                  cy="290.71"
                  rx="17"
                  ry="9"
                  fill="#57b894"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m612.89 307.1q-60.681-9.7794-112.68 22.997l-9.3988-46.051a199.04 199.04 0 0 1 112.68-22.997z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m595.27 300.78q-43.796-7.0582-81.323 16.598l-6.7835-33.237a143.65 143.65 0 0 1 81.323-16.598z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  transform="translate(-96.535 64.25) rotate(-11.535)"
                  cx="548.28"
                  cy="285.59"
                  rx="17"
                  ry="9"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  transform="translate(105.9 809.79) rotate(-86.019)"
                  cx="539.67"
                  cy="346.64"
                  rx="9"
                  ry="17"
                  fill="#57b894"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m602.44 381.08q-55.854-25.656-114.72-7.9832l3.2627-46.887a199.04 199.04 0 0 1 114.72 7.9832z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m587.15 370.28q-40.312-18.517-82.8-5.7618l2.3548-33.84a143.65 143.65 0 0 1 82.8 5.7618z"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <ellipse
                  transform="translate(115.3 812.72) rotate(-86.019)"
                  cx="545.94"
                  cy="343.07"
                  rx="9"
                  ry="17"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  transform="translate(-50.5 -51.16)"
                  d="m465.42 265.25s-73.496-10.055-125.98 20.704"
                  fill="none"
                  stroke="#3f3d56"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <polygon
                  points="290.71 224.46 292.62 225.06 289.63 234.46 299.23 236.75 298.76 238.7 287.08 235.91"
                  fill="#3f3d56"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Are you ready to turn your dreams into reality?
          </h1>

          <div className="relative mx-auto w-full rounded-lg shadow-sm lg:max-w-md">
          <svg data-name="Layer 1" viewBox="0 0 832.03 646" xmlns="http://www.w3.org/2000/svg">
<path transform="translate(-183.99 -127)" d="m710.36 771.36s-12.753-31.391 25.505-54.934z" fill="#e6e6e6" data-name="Path 482"/>
<path transform="translate(-183.99 -127)" d="m694.68 770.79s-3.89-22.374-34-22.182z" fill="#e6e6e6" data-name="Path 483"/>
<path transform="translate(-183.99 -127)" d="m982.32 771.36s-16.848-41.472 33.696-72.575z" fill="#e6e6e6" data-name="Path 482"/>
<path transform="translate(-183.99 -127)" d="m961.6 770.6s-5.1392-29.559-44.919-29.305" fill="#e6e6e6" data-name="Path 483"/>
<polygon points="483.22 179.57 466.58 170.73 467.82 170.07 484.46 178.91" fill="#cbcbcb"/>
<polygon points="468.7 179.57 467.46 178.91 484.1 170.07 485.34 170.73" fill="#cbcbcb"/>
<rect transform="translate(-108.89 475.96) rotate(-62.868)" x="529.92" y="237.41" width="1.7608" height="5.2815" fill="#cbcbcb"/>
<path transform="translate(-183.99 -127)" d="m626.3 289.98-9.3556-4.794 0.80288-1.5671 9.3556 4.794zm-18.711-9.5881-9.3558-4.7945 0.80288-1.5671 9.3558 4.7945zm-18.711-9.5885-9.3556-4.794 0.80287-1.5671 9.3556 4.794zm-18.711-9.5881-9.3558-4.794 0.80288-1.5671 9.3558 4.794zm-18.711-9.5881-9.3556-4.794 0.80287-1.5671 9.3556 4.794z" fill="#cbcbcb"/>
<rect transform="translate(-99.431 601.73) rotate(-62.868)" x="637.53" y="292.55" width="1.7608" height="5.2815" fill="#cbcbcb"/>
<path transform="translate(-183.99 -127)" d="M281.557,355.92045q0,.82486-.05345,1.63595a24.78151,24.78151,0,0,1-2.322,8.9969c-.01036.02414-.02248.04655-.03275.069-.06212.131-.12592.262-.19141.39133a24.48771,24.48771,0,0,1-1.31874,2.32723,24.90345,24.90345,0,0,1-20.43827,11.50168l.24655,14.17714,3.215-1.69285.57407,1.09122-3.76492,1.98246.46026,26.33045.00514.35168-2.48581.55335.00513-.35339.78265-42.43833a24.854,24.854,0,0,1-17.58352-7.65056c-.15682-.162-.312-.32925-.46371-.49475l-.01726-.019a24.95626,24.95626,0,0,1-4.54066-7.02651c.02416.02757.05.05344.07416.081a24.93445,24.93445,0,0,1,11.82226-32.12957c.08619-.04309.17415-.08447.26035-.12756a24.95344,24.95344,0,0,1,32.32778,9.814c.15176.25514.29831.51545.43963.77747A24.79836,24.79836,0,0,1,281.557,355.92045Z" fill="#e5e5e5"/>
<circle cx="94.215" cy="206.96" r="32.674" fill="#e5e5e5"/>
<path transform="translate(-183.99 -127)" d="m254.08 312.14a32.677 32.677 0 0 0 54.445 34.581 32.677 32.677 0 1 1-54.445-34.581z" opacity=".2"/>
<polygon points="95.983 297.99 92.646 297.05 92.653 296.69 93.653 242.34 93.703 239.63 93.704 239.55 93.879 230.06 94.132 216.29 94.132 216.29 94.304 206.96 94.396 206.96 94.572 217.07 94.801 230.22 94.965 239.56 94.965 239.63 94.972 240.01 94.972 240.01 95.289 258.21 95.322 260.02 95.977 297.62" fill="#3f3d56"/>
<rect transform="translate(-331.03 48.327) rotate(-27.766)" x="278.11" y="384.32" width="6.104" height="1.6158" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m701.76 228.22a832.27 832.27 0 0 0-123.75 1.9022c-19.832 1.7926-39.979 3.7288-59.444 8.0548-15.679 3.4844-33.875 9.3735-43.644 23.09a22.291 22.291 0 0 0-3.4803 19.514c2.3293 7.8194 8.1236 14.328 14.294 19.426 14.203 11.733 31.825 18.561 47.565 27.882 28.74 17.02 55.043 39.96 71.926 69.101 7.4291 12.823 14.496 29.874 6.2236 44.004-8.1042 13.843-26.196 18.612-40.95 20.861-18.493 2.8189-37.541 2.0543-56.111 0.47581a584.65 584.65 0 0 1-60.651-8.8834c-39.275-7.5414-78.192-17.135-118.01-21.497a341.78 341.78 0 0 0-60.17-1.7399c-18.124 1.2225-36.404 4.0893-53.43 10.625-13.12 5.036-27.106 12.655-34.193 25.362-6.8316 12.249-4.1671 26.374 3.2717 37.675 8.9504 13.598 22.907 22.915 37.418 29.726 16.522 7.7542 34.193 12.78 51.887 17.055 8.9739 2.168 17.996 4.1277 27.02 6.0775 1.8824 0.40675 2.6867-2.4846 0.79752-2.8928-18.196-3.9319-36.445-7.8767-54.189-13.568-16.42-5.2671-33.225-12.014-46.672-23.074-10.879-8.9475-21.222-22.017-20.58-36.876 0.64729-14.979 13.215-25.438 25.534-31.876 15.395-8.0452 32.885-11.964 50.024-14.012a303.94 303.94 0 0 1 59.09-0.80365c39.727 3.0228 78.566 12.072 117.52 19.966 37.84 7.6682 76.86 14.769 115.64 12.802 15.37-0.77956 31.839-2.982 45.41-10.74 6.2136-3.5521 11.816-8.5615 14.974-15.081a33.774 33.774 0 0 0 2.5806-19.845c-2.2006-14.77-10.973-28.466-19.726-40.23a194.42 194.42 0 0 0-33.14-34.328 261.41 261.41 0 0 0-43.849-28.565c-8.2382-4.3374-16.593-8.5082-24.445-13.532-7.5277-4.8169-14.953-10.613-19.55-18.432-3.9759-6.7633-4.7052-14.482-0.564-21.342 4.1885-6.9378 11.405-11.777 18.522-15.313 17.146-8.5193 37.08-10.8 55.839-13.136a825.91 825.91 0 0 1 121.45-6.0555q14.794 0.348 29.569 1.2249c1.9286 0.11345 1.922-2.8869 0-3z"/>
<path transform="translate(-183.99 -127)" d="m675.59 132.05 6.2294-4.9823c-4.8394-0.53392-6.8278 2.1054-7.6416 4.1944-3.7807-1.5699-7.8965 0.48753-7.8965 0.48753l12.464 4.5248a9.4317 9.4317 0 0 0-3.1554-4.2244z" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m645.36 147.83 6.2294-4.9824c-4.8394-0.53391-6.8278 2.1054-7.6416 4.1944-3.7807-1.5699-7.8965 0.48754-7.8965 0.48754l12.464 4.5248a9.4316 9.4316 0 0 0-3.1554-4.2244z" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m675.59 172.8 6.2294-4.9823c-4.8394-0.53392-6.8278 2.1054-7.6416 4.1944-3.7807-1.5699-7.8965 0.48753-7.8965 0.48753l12.464 4.5248a9.4317 9.4317 0 0 0-3.1554-4.2244z" fill="#3f3d56"/>
<g data-name="Group 27">
<circle cx="398.22" cy="34.413" r="18.768" fill="#ff6583" data-name="Ellipse 7"/>
<path transform="translate(-183.99 -127)" d="m641.06 219.25h-92.073a1.8848 1.8848 0 0 1-0.34417-0.02729l43.547-75.424a3.0483 3.0483 0 0 1 5.307 0l29.224 50.614 1.3996 2.4216z" fill="#6c63ff" data-name="Path 63"/>
<path transform="translate(-183.99 -127)" d="m692.32 219.25h-79.634l15.431-22.414 1.11-1.6152 20.108-29.21a4.0685 4.0685 0 0 1 6.0437-0.36091 3.6381 3.6381 0 0 1 0.28961 0.36091z" fill="#6c63ff" data-name="Path 65"/>
</g>
<path transform="translate(-183.99 -127)" d="m560.96 392.23c8.7272 4.362 14.04 10.123 14.04 16.442 0 13.612-24.631 24.647-55.015 24.647-13.21 0-25.329-2.0876-34.813-5.5641 10.073 5.0347 24.695 8.2049 40.975 8.2049 30.384 0 55.015-11.035 55.015-24.647 0-7.6939-7.8727-14.563-20.202-19.083z" fill="#f1f1f1"/>
<path transform="translate(-183.99 -127)" d="m580.37 401.58c9.8476 4.922 15.843 11.423 15.843 18.553 0 15.36-27.793 27.811-62.078 27.811-14.906 0-28.581-2.3556-39.282-6.2785 11.366 5.6811 27.865 9.2582 46.235 9.2582 34.284 0 62.078-12.451 62.078-27.811-3e-5 -8.6817-8.8835-16.432-22.796-21.532z" fill="#f1f1f1"/>
<path transform="translate(-183.99 -127)" d="m553.53 396.35c6.1485 3.0732 9.8918 7.1319 9.8918 11.584 0 9.59-17.353 17.364-38.759 17.364a72.801 72.801 0 0 1-24.527-3.9201c7.0966 3.5471 17.398 5.7805 28.868 5.7805 21.406 0 38.76-7.7742 38.76-17.364 0-5.4206-5.5466-10.26-14.233-13.444z" fill="#f1f1f1"/>
<path transform="translate(-183.99 -127)" d="m467.14 394.59s1.3511 19.749 40.082 19.749 50.294-19.749 50.294-19.749z" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m522.11 342.78a27.187 27.187 0 0 0-19.584-5.357 27.282 27.282 0 0 1-3.3036 53.629 27.288 27.288 0 0 0 22.888-48.272z" fill="#3f3d56"/>
<rect x="322.8" y="206.86" width="2.6407" height="62.858" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m682.97 287.15-0.01419-0.02423-0.03567-1.5354 8.2729-12.011-8.263 10.862-0.02965 0.32455-0.28281-12.277 7.1455-12.453-7.1657 10.296 0.07478-25.435-4.3e-4 -0.08467-0.00215 0.08328-0.4745 20.046-6.5124-8.1427 6.4913 9.8696-0.14227 10.982-5.9928-10.718 5.9708 12.332-0.07951 6.1063-0.21877 16.917-0.0159 1.2641q0.82779 0.00628 1.6388-0.02756l-0.37479-16.249z" fill="#cbcbcb"/>
<path transform="translate(-183.99 -127)" d="m643.36 292.43-0.01419-0.02423-0.03567-1.5354 8.2729-12.011-8.263 10.862-0.02966 0.32455-0.28281-12.277 7.1455-12.453-7.1657 10.296 0.07478-25.435-4.3e-4 -0.08467-0.00215 0.08327-0.4745 20.046-6.5124-8.1427 6.4913 9.8697-0.14227 10.982-5.9928-10.718 5.9708 12.332-0.07951 6.1063-0.21877 16.917-0.0159 1.2641q0.82781 0.00628 1.6388-0.02756l-0.37479-16.249z" fill="#cbcbcb"/>
<path transform="translate(-183.99 -127)" d="m662.72 275.71-0.01419-0.02423-0.03567-1.5354 8.2729-12.011-8.263 10.862-0.02965 0.32456-0.28281-12.277 7.1455-12.453-7.1657 10.296 0.07478-25.435-4.3e-4 -0.08467-0.00215 0.08327-0.4745 20.046-6.5124-8.1427 6.4913 9.8697-0.14227 10.982-5.9928-10.718 5.9708 12.332-0.07951 6.1063-0.21877 16.917-0.0159 1.2641q0.82781 0.00628 1.6388-0.02757l-0.37479-16.249z" fill="#cbcbcb"/>
<circle cx="151.59" cy="430.44" r="10.563" fill="#6c63ff"/>
<polygon points="715.4 625.42 705.62 629.05 686.95 593.06 701.38 587.7" fill="#ffb7b7"/>
<path transform="translate(-183.99 -127)" d="m905.4 760.97-31.532 11.715-0.14819-0.39882a13.093 13.093 0 0 1 7.7125-16.833l7.8e-4 -2.9e-4 19.258-7.1552z" fill="#2f2e41"/>
<polygon points="619.16 635.57 608.73 635.57 603.77 595.34 619.16 595.34" fill="#ffb7b7"/>
<path transform="translate(-183.99 -127)" d="m804.96 772.69-33.638-0.00125v-0.42546a13.093 13.093 0 0 1 13.093-13.092h8.4e-4l20.545 8.3e-4z" fill="#2f2e41"/>
<path transform="translate(-183.99 -127)" d="m850.91 483.5-3.4037-6.8074-28.931 14.466 0.85092 5.9564-5.531 7.2328s-9.3601 5.1055-7.6583 22.124l1.7018 16.168 2.1273 20.848-14.891 51.481-7.6583 68.074-5.531 54.884 26.804-1.2764 24.677-89.347 43.397 96.154 29.782-7.6583-40.844-95.303-5.1055-39.993s3.4037-21.273-12.764-35.739l2.5528-7.6583v-9.4372l8.5092-45.022z" fill="#2f2e41"/>
<rect transform="translate(-161.01 1131.6) rotate(-74.249)" x="808.35" y="613.62" width="68.961" height=".99996" opacity=".2"/>
<rect x="624.38" y="436.49" width="41.695" height="4.2546" fill="#3f3d56"/>
<ellipse cx="624.38" cy="439.04" rx="1.7018" ry="4.2546" fill="#3f3d56"/>
<circle transform="translate(-299.71 325.22) rotate(-28.663)" cx="827.17" cy="452.6" r="22.682" fill="#ffb7b7"/>
<circle cx="677.89" cy="297.43" r="20.066" fill="#2f2e41"/>
<path transform="translate(-183.99 -127)" d="m887.34 422.29a20.067 20.067 0 1 1-39.143 8.2288 20.067 20.067 0 0 0 39.143-8.2288z" fill="#2f2e41"/>
<path transform="translate(-183.99 -127)" d="m808.07 446.3a23.724 23.724 0 1 0 14.157-19.1c-3.9626-3.1957-8.8755-2.2052-12.87 1.1674-4.5167 3.8135-5.8571 6.4332-9.36 12.705 3.4444 0.48375 4.6281 4.7439 8.0726 5.2276z" fill="#2f2e41"/>
<path transform="translate(-183.99 -127)" d="m891.44 514.51c-0.25386 6.7219-0.75692 19.953-0.75692 20.628 0 0.71163-10.031 21.48-14.364 30.419v0.00454c-0.3083 0.63-0.58473 1.2011-0.82951 1.7043a4.0285 4.0285 0 0 1-3.7032 2.2754l-18.937-0.34a4.0361 4.0361 0 0 1-3.9661-3.9343l-2.1123-83.315a2.0598 2.0598 0 0 1 2.0578-2.1122h24.422a5.4908 5.4908 0 0 1 4.9406 3.1003l11.721 24.25a15.499 15.499 0 0 1 1.5276 7.3202z" fill="#6c63ff"/>
<path transform="translate(-183.99 -127)" d="m848.55 559.55a54.232 54.232 0 0 1-12.939-10.935 60.008 60.008 0 0 1-14.955-34.888c-0.96286-11.072 1.2342-19.303 6.53-24.463 6.7316-6.5591 15.894-5.6061 16.281-5.562l0.41022 0.04648 6.2076 5.2526-1.7566 2.076-5.5545-4.7c-1.7002-0.085-8.6415-0.10336-13.712 4.8562-4.6672 4.5652-6.5838 12.054-5.6965 22.258a57.308 57.308 0 0 0 14.208 33.237 52.657 52.657 0 0 0 12.29 10.44z" fill="#6c63ff"/>
<rect transform="translate(-273.23 58.368) rotate(-11.606)" x="850.45" y="531.29" width="33.78" height=".90647" fill="#3f3d56"/>
<rect transform="translate(-203.91 -91.398) rotate(-2.3374)" x="862.15" y="479.82" width=".90663" height="52.695" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m891.44 514.51c-0.25386 6.7219-0.75692 19.953-0.75692 20.628 0 0.71163-10.031 21.48-14.364 30.419l8.0771-46.899a10.338 10.338 0 0 1 6.7129-7.973 15.215 15.215 0 0 1 0.33091 3.8256z" fill="#3f3d56"/>
<path transform="translate(-183.99 -127)" d="m841.82 612.8a7.979 7.979 0 0 0-2.5951-11.957l1.6415-18.16-10.792-3.6891-1.958 25.677a8.0223 8.0223 0 0 0 13.704 8.1279z" fill="#ffb7b7"/>
<path transform="translate(-183.99 -127)" d="m843.23 595.23-19.123-0.69345 0.809-92.222a12.449 12.449 0 0 1 8.4334-11.848 11.309 11.309 0 0 1 7.1126-0.00623 12.45 12.45 0 0 1 8.4216 12.742z" fill="#cbcbcb"/>
<path transform="translate(-183.99 -127)" d="m1011 773h-381a1 1 0 0 1 0-2h381a1 1 0 0 1 0 2z" fill="#cbcbcb"/>
</svg>
          </div>

          <div class="inline-block align-middle">
            <button class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
              Get Started!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
