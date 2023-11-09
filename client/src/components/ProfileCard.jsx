import { MdPersonSearch } from "react-icons/md";
import profileImg from "../assets/Images/profile2.jpeg";

const ProfileCard = () => {
  return (
    <div className="max-h-80">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center min-w-50">
          <div>
            <img
              alt="profileImage"
              src={profileImg}
              className="rounded-full w-14 h-14"
            />
          </div>

          <div>
            <p className="font-bold dark:text-white">name lastname</p>
            <p className="text-xs">n friends</p>
          </div>
        </div>

        <MdPersonSearch size={20} />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProfileCard;
