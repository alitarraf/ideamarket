import { useParams } from "react-router-dom";
import {
  PeopleCard,
  IdeaDescriptionCard,
  MilestonesCard,
} from "@/components/idea";

import ideaData from "@/data/ideaData";

const IdeaPage = () => {
  let { id } = useParams();
  const idea = ideaData.find((idea) => idea.id === id);
  // console.log(idea);
  return (
    <div className="my-4 mx-4 md:mx-12">
      <IdeaDescriptionCard idea={idea} />
      <MilestonesCard />
      <div className="my-8 md:grid md:grid-cols-2 md:gap-8">
        <PeopleCard title="Advisors & Contributors" people={idea.creators} />
        <PeopleCard title="Investors & Customers" people={idea.backers} />
      </div>
    </div>
  );
};

export default IdeaPage;
