import Link from "next/link";
import Image from "../components/image";
const About = () => {
  return (
    <div style={{ fontSize: "20px" }}>
      <h1>About</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
      <Image />
    </div>
  );
};

export default About;
