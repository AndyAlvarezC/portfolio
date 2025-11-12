import NavLinks from "./NavLinks";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 font-semibold items-center text-gray-200">
        <NavLinks />
      </ul>
    </nav>
  );
}
