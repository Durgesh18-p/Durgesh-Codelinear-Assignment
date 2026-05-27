const navItems = ['Product', 'Features', 'Pricing', 'Resources'];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-4 z-30 flex justify-center px-4 sm:top-[31px]">
      <nav
        aria-label="Primary navigation"
        className="flex w-full max-w-[716px] flex-wrap items-center justify-between gap-x-5 gap-y-3 rounded-xl bg-[#2F2F2FB2] px-2.5 py-[9px] text-sm text-white/82 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-[15px] md:h-[47px] md:flex-nowrap"
      >
        <a href="#" className="whitespace-nowrap px-3 font-semibold tracking-[-0.02em] text-white">
          N7
        </a>
        <div className="order-3 flex w-full items-center justify-between gap-4 overflow-x-auto px-3 pb-1 md:order-none md:w-auto md:justify-start md:gap-9 md:overflow-visible md:px-0 md:pb-0 lg:gap-[52px]">
          {navItems.map((item) => (
            <a key={item} href="#" className="shrink-0 transition duration-200 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-lg bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[-0.02em] text-[#000D12] transition duration-200 hover:bg-white/90"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
