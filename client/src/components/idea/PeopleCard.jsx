import { Link } from "react-router-dom";

const PeopleCard = ({ title, description, people }) => {
  return (
    <div className="mx-auto w-full border rounded-lg shadow-lg bg-white">
      <div>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900">{title}</h2>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <nav className="h-80  overflow-y-auto" aria-label="Directory">
        {Object.keys(people).map((role) => (
          <div key={role} className="relative">
            <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3>{role}</h3>
            </div>
            <ul className="relative z-0 divide-y divide-gray-200">
              {people[role].map((person) => (
                <li key={person.id} className="bg-white">
                  <div className="relative px-6 py-5 flex hover:bg-blue-100 items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 ">
                      <Link to={`/app/profile/${person.id}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {person.role}
                        </p>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default PeopleCard;
