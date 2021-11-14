const IdeaCard = ({ idea }) => {
  return (
    <div className="my-4">
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
    </div>
  );
};

export default IdeaCard;
