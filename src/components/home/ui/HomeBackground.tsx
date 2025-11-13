export default function HomeBackground() {
  return (
    <>
      {/* Premium blurred backgrounds */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
    </>
  );
}
