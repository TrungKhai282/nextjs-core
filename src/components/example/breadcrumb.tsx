import style from "./index.module.scss";
import Breadcrumb from "@/components/common/breadcrumb";

const BreadcrumbExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Breadcrumb:</div>
      <div className={style.exampleCol}>
        <Breadcrumb
          items={[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Example",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default BreadcrumbExample;
