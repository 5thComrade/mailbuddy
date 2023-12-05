import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex items-center justify-between p-12">
      <Link href="/">
        <p className="text-2xl font-semibold">MailBuddy</p>
      </Link>

      <div className="space-x-4">
        <Button variant="ghost" className="px-6 py-4 text-lg font-light">
          Sign In
        </Button>
        <Button className="px-6 py-4 text-lg font-light">Start for free</Button>
      </div>
    </nav>
  );
};

export default Navbar;
