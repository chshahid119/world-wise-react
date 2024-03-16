import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Worldwise</h1>

      <Link to="/pricing">Go to the app</Link>
    </div>
  );
}

export default Homepage;
