import { useState, useEffect, useRef } from "react";
import DropDown from "./Dropdown";

function ToolBox() {
  // cursor 상태를 useState 훅을 사용해 관리합니다.
  const [cursor, setCursor] = useState("cursor-pointer");
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // 동적 버튼 데이터
  const buttons = [
    { id: "file", label: "file", type: "file" },
    { id: "connection", label: "connection", type: "connection" },
    { id: "tools", label: "tools", type: "tools" },
  ];

  const handleButtonClick = (newCursor) => {
    setCursor(newCursor);
  };

  const toggleDropdown = (buttonId) => {
    setOpenDropdown(openDropdown === buttonId ? null : buttonId);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div
      className="flex w-1/3 h-full justify-start items-center relative"
      ref={dropdownRef}
    >
      {buttons.map((button) => (
        <div key={button.id} className="flex flex-col h-full w-3/12 relative">
          <button
            className={`p-2 text-black border-l border-r ${cursor} h-full hover:bg-gray-100`}
            onClick={() => toggleDropdown(button.id)}
            onMouseUp={() => handleButtonClick("cursor-pointer")}
            onMouseDown={() => {
              handleButtonClick("cursor-grabbing");
            }}
          >
            {button.label}
          </button>
          {openDropdown === button.id && (
            <div className="absolute top-full left-0 w-full  bg-white border border-gray-300 shadow-lg z-10">
              <DropDown type={button.type} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ToolBox;
