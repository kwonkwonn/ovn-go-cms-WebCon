import ToolBox from "./ToolBox";
import Layer from "./underlayCon";

function Header({ isUnderlay }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 border-b-1 h-16">
      <Layer isUnderlay={isUnderlay} />
      <ToolBox />
    </div>
  );
}

export default Header;
