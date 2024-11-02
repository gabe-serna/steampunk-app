import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div
      style={{ backgroundImage: "url('/navbar-background.webp')" }}
      className="fixed top-0 flex h-24 w-full items-center justify-between bg-cover bg-bottom px-8 pb-8 pt-4 font-['Alegreya_SC'] lg:px-16"
    >
      <a
        href="/"
        className="pl-4 text-xl font-bold text-bronze-600 md:text-2xl"
      >
        Browse
      </a>
      <img
        src="/temp-logo.png"
        className="size-32 translate-y-[40%] md:translate-x-2.5 lg:translate-y-[32%]"
      />
      <Button variant="outline" className="text-xl md:text-2xl">
        Sign in
      </Button>
    </div>
  );
};

export default NavBar;
