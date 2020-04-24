import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { getAllUsers } from "../util/getUsers";

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>
        {props.robots.map((robot) => (
          <li key={robot.id}>
            <Link href={`robots/${robot.id}`}>
              <a>{robot.name}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

Robots.getInitialProps = async function () {
  try {
    const robots = await getAllUsers();
    return robots;
  } catch (err) {}
};

export default Robots;
