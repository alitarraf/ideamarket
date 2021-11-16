const MilestonesCard = () => {
  return (
    <div>
      <div className="mt-4 w-full">
        <div className="shadow-xl rounded-lg p-4 bg-white">
          <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="pl-3">
              <div className="font-medium text-xl text-gray-700">
                Milestones
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-gray-800 text-sm font-medium mb-2">
              Current Milestone:
            </p>
            <p className="text-gray-800 text-xl font-medium mb-2">
              Finishing MVP
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2">
              Last Milestone Completed: Sunday, 23 August
            </p>
          </div>
          <div className="flex items-center justify-between my-2">
            <p className="text-gray-400 text-sm">4/6 milestones completed</p>
          </div>
          <div className="w-full h-2 bg-blue-200 rounded-full">
            <div className="w-2/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesCard;
