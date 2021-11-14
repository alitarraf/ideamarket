import { Link } from "react-router-dom";
import { IdeaCard } from "@/components/search";

const ideas = [
  {
    id: 1,
    title: "Idea 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Idea 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Idea 3",
    description: "Description 4",
  },
];

const SearchPage = () => {
  return (
    <div>
      <div className="my-8 mx-20">
        {ideas.map((idea) => (
          <Link to={`/app/idea/${idea.id}`} key={idea.id}>
            <IdeaCard key={idea.id} idea={idea} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
