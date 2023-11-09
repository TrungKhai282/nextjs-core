import Link from "next/link";
import style from "./index.module.scss";

const Home = () => {
  return (
    <main className={style.homepage}>
      Home page <br />
      <Link href={"/sign-in"}>Go to Login page</Link>
    </main>
  );
};

export default Home;
