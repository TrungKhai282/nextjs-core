import style from "./index.module.scss";
import Button from "@/components/common/button";

const ButtomExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Button:</div>
      <div className={style.exampleRow}>
        <Button className={style.buttonExample}>Button default</Button>
        <Button type="primary" className={style.buttonExample}>
          Button primary
        </Button>
        <Button type="primary-outline" className={style.buttonExample}>
          Button primary-outline
        </Button>
        <Button type="outline" className={style.buttonExample}>
          Button outline
        </Button>
      </div>
    </div>
  );
};

export default ButtomExample;
