import style from "./index.module.scss";
import Button from "@/components/common/button";

const ButtomExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Button:</div>
      <div className={style.exampleRow}>
        <Button text={"Button default"} className={style.buttonExample} />{" "}
        <Button
          type="primary"
          text={"Button primary"}
          className={style.buttonExample}
        />
        <Button
          type="primary-outline"
          text={"Button primary-outline"}
          className={style.buttonExample}
        />
        <Button
          type="outline"
          text={"Button outline"}
          className={style.buttonExample}
        />
      </div>
    </div>
  );
};

export default ButtomExample;
