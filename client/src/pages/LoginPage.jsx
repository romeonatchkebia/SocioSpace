import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <h3>LoginPage</h3>
      <div className="bg-red-500 border-2 border-black p-1 m-2 inline-block">
        <Link to={"/home"}>go to Home page</Link>
      </div>
    </div>
  );
}

export default LoginPage;
