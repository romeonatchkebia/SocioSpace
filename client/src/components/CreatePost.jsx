import profileImg from "../assets/Images/profile2.jpeg";

function CreatePost() {
  return (
    <div className="flex space-x-2">
      <img
        alt="profileImage"
        src={profileImg}
        className="rounded-full w-14 h-14"
      />
      <div className="flex items-center bg-lightModeBg dark:bg-darkModeInput rounded-md p-2 h-6 my-1">
        <input
          type="text"
          placeholder="What's on your mind..."
          className="focus:outline-none bg-lightModeBg dark:bg-darkModeInput text-xs"
        />
      </div>
    </div>
  );
}

export default CreatePost;
