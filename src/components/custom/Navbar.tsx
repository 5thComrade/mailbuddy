import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 p-12 flex justify-between items-center">
      <Link href="/">
        <p className="text-2xl font-semibold">MailBuddy</p>
      </Link>

      <div className="space-x-4">
        <Button variant="ghost" className="font-light text-lg py-4 px-6">
          Sign In
        </Button>
        <Button className="font-light text-lg py-4 px-6">Start for free</Button>
      </div>
    </nav>
  );
};

export default Navbar;
