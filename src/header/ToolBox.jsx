import { useState } from "react";

function ToolBox() {
  // cursor 상태를 useState 훅을 사용해 관리합니다.
  const [cursor, setCursor] = useState("cursor-pointer");

  const handleButtonClick = (newCursor) => {
    setCursor(newCursor);
  };

  return (
    <div className="flex">
      <button
        className={`p-2 bg-gray-400 text-white rounded ml-2 ${cursor}`}
        // 버튼 클릭 시 커서 상태를 변경하는 예시입니다.
        // 드래그 앤 드롭 구현 시에는 onMouseDown 등으로 로직을 변경해야 합니다.
        onMouseUp={() => handleButtonClick("cursor-pointer")}
        onMouseDown={() => handleButtonClick("cursor-grabbing")}
      >
        file
      </button>
      <button
        className={`p-2 bg-gray-400 text-white rounded ml-2 ${cursor}`}
        onMouseUp={() => handleButtonClick("cursor-pointer")}
        onMouseDown={() => handleButtonClick("cursor-grabbing")}
      >
        Button 2
      </button>
      <button
        className={`p-2 bg-gray-400 text-white rounded ml-2 ${cursor}`}
        onMouseUp={() => handleButtonClick("cursor-pointer")}
        onMouseDown={() => handleButtonClick("cursor-grabbing")}
      >
        Button 3
      </button>
    </div>
  );
}

export default ToolBox;
