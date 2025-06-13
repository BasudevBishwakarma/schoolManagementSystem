import { SearchOutlined } from "@ant-design/icons";
import { Input, InputRef } from "antd";
import React from "react";
import { useEffect, useRef, useState } from "react";

const timer = 1500;

function DebounceInput(props) {
  const { placeholder = "Search", setDebouncedValue, ...rest } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    const set = setTimeout(() => setDebouncedValue(value), timer);

    return () => {
      clearTimeout(set);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const debounceRef = useRef<InputRef>(null);
  useEffect(() => {
    debounceRef.current?.focus();
  }, []);

  useEffect(() => {
    if (props.defaultValue) setValue(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <div className="relative h-[44px] flex flex-col">
      <Input
        className="w-[240px] h-[44px]"
        value={value}
        ref={debounceRef}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        prefix={<SearchOutlined />}
        {...rest}
      />
    </div>
  );
}

export default DebounceInput;
