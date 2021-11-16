import { useState } from "react";
import { Input, Textarea, Button } from "@/components/elements";

const CreateFrame1 = ({ create1 }) => {
  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("desc");
  const clickStart = () => {
    create1({ title, description });
  };
  return (
    <div>
      <div className="">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
            Start With an Idea
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
            Title and Description of your Idea
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto py-4 px-4 sm:max-w-2xl sm:px-6 lg:px-8 ">
        <div className="">
          <Input title="Title" />
        </div>
        <div className="my-8">
          <Textarea title="Description" rows="6" />
        </div>
        <div>
          <Button width="full" size="xl" onClick={clickStart}>
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateFrame1;
