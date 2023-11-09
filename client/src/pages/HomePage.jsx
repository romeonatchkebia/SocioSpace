import ProfileCard from "../components/ProfileCard";
import CreatePost from "../components/CreatePost";
import Addvertisement from "../components/Addvertisement";

const HomePage = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:gap-10 bg-lightModeBg dark:bg-darkModeBg dark:text-darkModeText w-full h-screen py-5 px-5">
      <div className="bg-lightModeDivBg dark:bg-darkModeDivBg max-h-24 rounded-lg p-4 mb-4">
        <ProfileCard />
      </div>

      <div className="bg-lightModeDivBg dark:bg-darkModeDivBg col-span-2 max-h-40 rounded-lg p-4 mb-4">
        <CreatePost />
      </div>

      <div className="bg-lightModeDivBg dark:bg-darkModeDivBg max-h-40 rounded-lg p-4 mb-4">
        <Addvertisement />
      </div>
    </div>
  );
};

export default HomePage;
