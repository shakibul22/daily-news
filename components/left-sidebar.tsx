export default function LeftSidebar() {
  return (
    <aside className="hidden lg:flex flex-col items-center w-[280px] bg-black/70 min-h-screen  py-10 ">
      <div className="w-[250px] flex flex-col items-center">
        {/* TIME NEWS Logo */}
        <div className="relative w-full flex justify-center mb-8 mt-8">
          <div
            className="absolute left-0 right-0 top-1/2 border-t-4 border-[#ff3c1a] z-0"
            style={{ transform: "translateY(-50%)" }}
          ></div>
          <span
            className="bg-[#ff3c1a] text-white font-bold text-xl lg:text-2xl px-6 lg:px-8 py-2 z-10 tracking-widest shadow-lg"
            style={{ letterSpacing: "0.1em" }}
          >
            TIME NEWS
          </span>
        </div>

        {/* Feature List */}
        <ul className="">
          {["GOOGLE FONTS", "HTML5", "RESPONSIVE WEB DESIGN", "ON SCROLL ANIMATION", "CSS3"].map((item, idx) => (
            <li key={item} className="flex items-center text-white font-bold text-sm lg:text-base drop-shadow-md">
              <span
                className="w-3 h-3 mr-3 rounded-sm"
                style={{ background: idx % 2 === 0 ? "#ff3c1a" : "#fff", display: "inline-block" }}
              ></span>
              <span className="uppercase tracking-wide" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
