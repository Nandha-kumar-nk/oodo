export default function Card({ children }) {
  return (
    <div className="
      bg-[#111827] 
      border border-white/10 
      rounded-2xl 
      p-6
      shadow-lg
      hover:shadow-cyan-500/20
      transition
    ">
      {children}
    </div>
  );
}
