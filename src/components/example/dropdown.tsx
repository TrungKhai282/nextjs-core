"use client";

import Link from "next/link";
import style from "./index.module.scss";
import Dropdown from "@/components/common/dropdown";
import Button from "../common/button";

const DropdownExample = () => {
  return (
    <div className={style.exampleContainer}>
      <div className={style.title}>Dropdown:</div>
      <div className={style.exampleCol}>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is Item 1",
              value: "1",
            },
            {
              key: "2",
              label: (
                <Link href={"/link-to-somewhere"}>Link to some where</Link>
              ),
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
              label: "Item with click action",
              value: "2",
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
        <Dropdown
          items={[
            {
              key: "1",
              label: "Item",
              value: "1",
            },
          ]}
        >
          <Button type="outline">Button with dropdown</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item",
              value: "1",
            },
          ]}
          placement="top"
        >
          <Button type="outline">Top</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item",
              value: "1",
            },
          ]}
          placement="top-left"
        >
          <Button type="outline">Top left</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item",
              value: "1",
            },
          ]}
          placement="top-right"
        >
          <Button type="outline">Top right</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item",
              value: "1",
            },
          ]}
          placement="bottom"
        >
          <Button type="outline">Bottom</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item this is item",
              value: "1",
            },
          ]}
          placement="bottom-left"
        >
          <Button type="outline">Bottom left</Button>
        </Dropdown>
        <Dropdown
          items={[
            {
              key: "1",
              label: "This is item this is item",
              value: "1",
            },
          ]}
          placement="bottom-right"
        >
          <Button type="outline">Bottom right</Button>
        </Dropdown>

        <Dropdown
          items={[
            {
              key: "1",
              label: "This dropdown will close if you click outside",
              value: "1",
            },
          ]}
          click
          placement="bottom-left"
        >
          <Button type="outline">Click me</Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownExample;
