"use client";

import style from "./index.module.scss";
import Dropdown from "@/components/common/dropdown";

const DropdownExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Dropdown:</div>
      <div className={style.exampleCol}>
        <Dropdown
          items={[
            {
              key: "1",
              label: "Item1",
              value: "1",
            },
            {
              key: "2",
              label: "Item2",
              value: "2",
            },
          ]}
        >
          Hover me
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "Item1",
              value: "1",
            },
            {
              key: "2",
              label: "Item2",
              value: "2",
            },
          ]}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          Basic with icon
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "Item1",
              value: "1",
            },
            {
              key: "2",
              label: "Item2",
              value: "2",
              onClick: (key, value) => {
                console.log("key :>> ", key);
                console.log("value :>> ", value);
              },
            },
            {
              key: "3",
              label: "Item3 (disable item)",
              disable: true,
              value: "3",
            },
          ]}
        >
          Have disable item
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownExample;
