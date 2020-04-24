import Link from "next/link";
import { getUserInfo, getAllUsersIds } from "../../util/getUsers";

const Robot = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <Link href="/robots">
        <a>Back To List</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllUsersIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = await getUserInfo(params.id);
  return userData;
}
export default Robot;
