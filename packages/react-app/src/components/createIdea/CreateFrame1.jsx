import { useState } from "react";
import { Input, Textarea, Button } from "@/components/elements";

const CreateFrame1 = ({ create1 }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    create1(title, description);
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
        <form className="" onSubmit={onSubmit}>
          <div className="">
            <Input
              value={title}
              onChange={titleChange}
              title="Title"
              type="text"
              required
            />
          </div>
          <div className="my-8">
            <Textarea
              value={description}
              onChange={descriptionChange}
              title="Description"
              rows="6"
              required
            />
          </div>
          <div>
            <Button width="full" size="xl" type="submit">
              Start
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFrame1;
