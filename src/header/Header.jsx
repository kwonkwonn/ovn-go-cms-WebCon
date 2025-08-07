import ToolBox from "./ToolBox";
import Layer from "./underlayCon";

function Header({ isUnderlay }) {
  return (
    <div className="flex justify-between items-center p-w-4 bg-gray-200 border-b-1 h-16">
      <ToolBox />
      <Layer isUnderlay={isUnderlay} />
    </div>
  );
}

export default Header;
