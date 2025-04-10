import { Menu, CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function LayoutOne() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
      setOpenMenu(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`md:grid ${
        openMenu
          ? "md:grid-cols-[250px_1fr]" // Sidebar open, pushes main content
          : "md:grid-cols-[55px_1fr]" // Sidebar closed, main takes full space
      } grid-rows-[auto_1fr_auto] h-screen bg-slate-900 transition-all duration-500`}
    >
      {/* Header */}
      <div className="col-span-2 bg-blue-500 text-white relative">
        {/* <Header /> */}
        Header
      </div>

      {/* Sidebar (Pushes Main Content in Large Screens, Overlays on Mobile) */}
      <div
        className={` md:col-span-1 md:row-span-2 bg-white text-black dark:bg-slate-900 dark:text-white transition-all ${
          isSmallScreen
            ? `fixed top-0 h-full max-md:w-[280px] transform z-10 ${
                openMenu
                  ? "translate-x-0 duration-500"
                  : "-translate-x-full duration-500"
              }`
            : openMenu
            ? "w-[250px] duration-500"
            : "w-15 duration-500 overflow-hidden"
        }`}
      >
        {/* menu bar */}
        <div
          className="absolute z-20 w-fit m-1 p-2 rounded-2xl bg-black text-white hover:bg-gray-700 duration-500 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? <Menu size={32} /> : <CircleX size={32} />}
        </div>
        <div className="mt-15 ">Sidebar</div>
      </div>

      {/* Main Content  */}
      <div className="col-span-1 bg-green-500 text-white transition-all  ">
        {/* menu bar */}
        {!openMenu && isSmallScreen && (
          <div
            className="absolute z-20 w-fit m-1 p-2 rounded-2xl bg-black text-white hover:bg-gray-700 duration-300 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? <Menu size={32} /> : <CircleX size={32} />}
          </div>
        )}
        <Outlet />
      </div>

      {/* Footer */}
      <div className="col-span-1 bg-yellow-500 text-white">
        {/* <Footer /> */}
        Footer
      </div>
    </div>
  );
}

export default LayoutOne;
