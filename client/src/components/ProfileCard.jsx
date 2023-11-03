import { MdPersonSearch } from "react-icons/md";
import profileImg from "../assets/Images/profile2.jpeg";

const ProfileCard = () => {
  return (
    <div className="bg-white w-20 md:w-32 lg:w-56">
      <div className="flex justify-between items-center space-x-10">
        <div>
          <img
            alt="profileImage"
            src={profileImg}
            className="rounded-full w-14 h-14"
          />
        </div>

        <div>
          <h5>name lastName</h5>
          <p className="text-xs">n friends</p>
        </div>

        <MdPersonSearch />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProfileCard;
