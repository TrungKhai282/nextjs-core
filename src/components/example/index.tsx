import style from "./index.module.scss";
import ButtomExample from "./button";
import TextExample from "./text";
import DividerExample from "./divider";
import BreadcrumbExample from "./breadcrumb";
import DropdownExample from "./dropdown";

const Example = () => {
  return (
    <main className={style.examplePage}>
      <ButtomExample />
      <TextExample />
      <DividerExample />
      <BreadcrumbExample />
      <DropdownExample />
    </main>
  );
};

export default Example;
