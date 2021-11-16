import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  SpeakerphoneIcon,
  TerminalIcon,
} from "@heroicons/react/outline";

const items = [
  {
    name: "Hardware",
    description: "description",
    value: ["hardware"],
    iconColor: "bg-pink-500",
    icon: SpeakerphoneIcon,
  },
  {
    name: "App",
    description: "description",
    value: ["app"],
    iconColor: "bg-purple-500",
    icon: TerminalIcon,
  },
  {
    name: "Hardware & App",
    description: "description",
    value: ["hardware", "app"],
    iconColor: "bg-yellow-500",
    icon: CalendarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const createFrame2 = ({ create2 }) => {
  const productSelect = (type) => {
    create2(type);
  };
  return (
    <div>
      <div className="">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
            Type of Product
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center"></p>
        </div>
      </div>
      <div className="max-w-md mx-auto py-4 px-4 sm:max-w-2xl sm:px-6 lg:px-8 ">
        <ul className="mt-6 border-t border-b border-gray-200 divide-y divide-gray-200">
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>
              <div
                className="relative group py-4 px-2 flex items-start space-x-3 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  productSelect(item.value);
                }}
              >
                <div className="flex-shrink-0">
                  <span
                    className={classNames(
                      item.iconColor,
                      "inline-flex items-center justify-center h-10 w-10 rounded-lg"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {item.name}
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default createFrame2;
