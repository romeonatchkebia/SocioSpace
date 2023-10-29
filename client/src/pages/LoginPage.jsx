import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h2>LoginPage</h2>
      <div className="bg-red-500 border-2 border-black p-1 m-2 inline-block">
        <Link to={"/home"}>when user logged in go to homePage</Link>
      </div>
    </div>
  );
}

export default LoginPage;
