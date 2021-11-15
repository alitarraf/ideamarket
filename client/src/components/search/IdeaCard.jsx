const IdeaCard = ({ idea }) => {
  // console.log(idea);
  return (
    <div className="p-4 hover:bg-blue-100 rounded border-t border-b">
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <svg
            className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              d="M0 0l200 200M0 200L200 0"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold">{idea.title}</h4>
          <p className="mt-1">{idea.description}</p>
        </div>
      </div>
      <div className="flex mx-8">
        <div className="flex">
          {idea.type.map((type, id) => (
            <div
              key={id}
              className="mx-4 bg-green-200 border border-green-300  px-3 rounded-xl text-sm"
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex">
          {idea.industry.map((industry, id) => (
            <div
              key={id}
              className="mx-4 bg-blue-200 border border-blue-300  px-3 rounded-xl text-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
