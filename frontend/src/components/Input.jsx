export default function Input({ placeholder, type="text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full 
        bg-transparent 
        border border-white/20 
        rounded-xl 
        px-4 py-3 
        text-white 
        focus:outline-none 
        focus:border-cyan-400
      "
    />
  );
}
