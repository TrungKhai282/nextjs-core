import style from "./index.module.scss";
import Text from "@/components/common/text";

const TextExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Text:</div>
      <div className={style.exampleRow}>
        <Text>Text default</Text>
        <Text type="secondary">Text secondary</Text>
        <Text type="italic">Text italic</Text>
        <Text type="strong">Text strong</Text>
      </div>
    </div>
  );
};

export default TextExample;
