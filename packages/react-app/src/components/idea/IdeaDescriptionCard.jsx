const IdeaDescriptionCard = ({ idea }) => {
  return (
    <div className="bg-white shadow-lg border overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex justify-between">
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            {idea.title}
          </h3>
          <span className="text-sm text-gray-700">
            created : {idea.created}
          </span>
        </div>
        <div className="py-4">
          <dt className="text-xl font-medium text-gray-500">Description:</dt>
          <dd className="mt-1 text-lg text-gray-900">{idea.description}</dd>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Product</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <div className="flex">
                {idea.type.map((type, id) => (
                  <div
                    key={id}
                    className="bg-green-200 border border-green-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Industry</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <div className="flex">
                {idea.industry.map((industry, id) => (
                  <div
                    key={id}
                    className="bg-blue-200 border border-blue-300  px-3 rounded-xl text-xs uppercase text-gray-700 font-semibold"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Why</dt>
            <dd className="mt-1 text-sm text-gray-900">{idea.details.why}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Who</dt>
            <dd className="mt-1 text-sm text-gray-900">{idea.details.who}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">What</dt>
            <dd className="mt-1 text-sm text-gray-900">{idea.details.what}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">How</dt>
            <dd className="mt-1 text-sm text-gray-900">{idea.details.how}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default IdeaDescriptionCard;
