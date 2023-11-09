import Link from "next/link";
import style from "./index.module.scss";
import Button from "@/components/common/button";
import Text from "../common/text";

const Home = () => {
  return (
    <main className={style.homepage}>
      Home page <br />
      <Link href={"/sign-in"}>Go to Login page</Link> <br />
      ------------------------- <br />
      Button: <br />
      <Button text={"Button default"} className={style.buttonExample} /> <br />
      <Button
        type="primary"
        text={"Button primary"}
        className={style.buttonExample}
      />{" "}
      <br />
      <Button
        type="primary-outline"
        text={"Button ghost"}
        className={style.buttonExample}
      />{" "}
      <br />
      <Button
        type="outline"
        text={"Button outline"}
        className={style.buttonExample}
      />{" "}
      <br />
      Text: <br />
      <Text>Text default</Text>
      <Text type="secondary">Text secondary</Text>
      <Text type="italic">Text italic</Text>
      <Text type="strong">Text strong</Text>
    </main>
  );
};

export default Home;
