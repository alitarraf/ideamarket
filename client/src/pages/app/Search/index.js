import { Link } from "react-router-dom";
import { IdeaCard } from "@/components/search";
import { Button, Input, Select } from "@/components/elements";

import ideaData from "@/data/ideaData";

const industries = [
  "Healthcare",
  "Police",
  "Food | Shopping",
  "Spirituality",
  "Education",
  "Automotive",
];

const projectTypes = ["Hardware", "App", "Hardware & App"];

const SearchPage = () => {
  return (
    <div>
      <div className="m-4">
        <div>
          <Link to="/app/create">
            <Button>New Idea</Button>
          </Link>
        </div>
        <div className="flex justify-between m-4">
          <div className="flex">
            <div className="pr-4">
              <Button width="pill" color="gray">
                Latest
              </Button>
            </div>
            <div>
              <Button width="pill" color="none">
                Popular
              </Button>
            </div>
          </div>
          <div className="font-bold text-gray-700">{ideaData.length} Ideas</div>
          <div></div>
        </div>
        <div className="flex justify-between m-4">
          <div className="w-1/3">
            <Input placeholder="Search..." />
          </div>
          <div className="w-1/3 mx-8">
            <Select options={industries} placeholder="Filter by Industry" />
          </div>
          <div className="w-1/3">
            <Select
              options={projectTypes}
              placeholder="Filter by Project Type"
            />
          </div>
        </div>
      </div>
      <div className="my-8 mx-20">
        {ideaData.map((idea) => (
          <Link to={`/app/idea/${idea.id}`} key={idea.id}>
            <IdeaCard key={idea.id} idea={idea} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
