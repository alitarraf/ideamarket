const IdeaDescriptionCard = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">
          Idea Title
        </h3>
        <div className="py-4">
          <dt className="text-xl font-medium text-gray-500">Description:</dt>
          <dd className="mt-1 text-lg text-gray-900">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
            incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
            consequat sint. Sit id mollit nulla mollit nostrud in ea officia
            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
            deserunt qui eu.
          </dd>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Product</dt>
            <dd className="mt-1 text-sm text-gray-900">App</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Industry</dt>
            <dd className="mt-1 text-sm text-gray-900">Healthcare</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Why</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Why would this idea matter? Why will it improve the human
              condition? Ex. : Decrease waste pollution; Reducing time of a
              task; Making people feel good;
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Who</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Who will benefit from this idea? Who are the main users?
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">What</dt>
            <dd className="mt-1 text-sm text-gray-900">
              What is the idea about ? Describe the concept in few words.
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">How</dt>
            <dd className="mt-1 text-sm text-gray-900">
              How does the concept you described worked? More details about the
              implementation.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default IdeaDescriptionCard;
