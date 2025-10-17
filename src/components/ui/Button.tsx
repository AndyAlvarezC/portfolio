interface Props {
  text?: string;
  onClickEvent: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button(props: Props) {
  const baseStyles =
    'flex items-center rounded-lg bg-blue-600 text-white font-bold transition ease duration-300 hover:bg-[var(--main-color)] cursor-pointer';

  return (
    <button
      onClick={props.onClickEvent}
      className={`${baseStyles} ${props.className ?? ''}`}
    >
      {props.text}
      {props.children}
    </button>
  );
}
