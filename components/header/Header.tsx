import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <div className="flex justify-between justify-items-center p-4">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}
