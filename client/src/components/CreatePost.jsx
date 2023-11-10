import profileImg from "../assets/Images/profile2.jpeg";

function CreatePost() {
  return (
    <div className="flex">
      <img
        alt="profileImage"
        src={profileImg}
        className="rounded-full w-14 h-14"
      />

      <div className="flex items-center bg-lightModeBg dark:bg-darkModeInput w-full ml-6 h-10 my-1 rounded-full">
        <input
          type="text"
          placeholder="What's on your mind..."
          className="w-full focus:outline-none bg-lightModeBg dark:bg-darkModeInput text-xs px-4 rounded-full"
        />
      </div>
    </div>
  );
}

export default CreatePost;
