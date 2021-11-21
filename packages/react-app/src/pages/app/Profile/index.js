import { useParams } from "react-router-dom";
import { UserInformation } from "@/components/profile";

import userData from "@/data/userData";

const ProfilePage = () => {
  let { id } = useParams();
  const user = userData.find((user) => user.id === id);
  return (
    <div className="mt-2">
      <UserInformation user={user} />
    </div>
  );
};

export default ProfilePage;
