import style from "./index.module.scss";
import Divider from "@/components/common/divider";

const DividerExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Divider:</div>
      <div className={style.exampleCol}>
        <Divider />
        <Divider textPosition="start">With start text</Divider>
        <Divider textPosition="center">With center text</Divider>
        <Divider textPosition="end">With end text</Divider>
      </div>
    </div>
  );
};

export default DividerExample;
