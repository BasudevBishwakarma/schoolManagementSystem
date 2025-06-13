import { MoreOutlined } from "@ant-design/icons";
import { Dropdown, DropdownProps } from "antd";
import React from "react";

function TableAction({ ...restProps }) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dropdown trigger={["click"]} {...restProps}>
        <span className="cursor-pointer">
          <MoreOutlined />
        </span>
      </Dropdown>
    </div>
  );
}

export default TableAction;
