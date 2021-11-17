import { useState } from "react";
import { Textarea, Button } from "@/components/elements";

const CreateFrame4 = ({ create4 }) => {
  const [details, setDetails] = useState({
    why: "",
    who: "",
    what: "",
    how: "",
  });
  const clickFinish = () => {
    create4(details);
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
            Details for Your Idea
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
            These are optional, but we recommend you fill them out. It will help
            others know what you plan to create.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto py-4 px-4 sm:max-w-2xl sm:px-6 lg:px-8 ">
        <div>
          <div className="mb-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <Textarea
                title="Why?"
                rows="5"
                name="why"
                value={details.why}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea
                title="Who?"
                rows="5"
                name="who"
                value={details.who}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea
                title="What?"
                rows="5"
                name="what"
                value={details.what}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea
                title="How?"
                rows="5"
                name="how"
                value={details.how}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button width="full" size="xl" onClick={clickFinish}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateFrame4;
