import {
  IdeaBackersCard,
  IdeaCreatorsCard,
  IdeaDescriptionCard,
} from "@/components/idea";

const IdeaPage = () => {
  return (
    <div className="my-4 mx-12">
      <IdeaDescriptionCard />
      <IdeaCreatorsCard />
      <IdeaBackersCard />
    </div>
  );
};

export default IdeaPage;
