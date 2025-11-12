import handleScroll from "../../../utils/handleScroll";

export default function Logo() {
  return (
    <a onClick={() => handleScroll('home')} className="cursor-pointer select-none">
      <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
        Andy Álvarez
      </h2>
    </a>
  );
}
