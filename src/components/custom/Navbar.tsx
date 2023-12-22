import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  // const user = await getUser();
  const _isAuthenticated = await isAuthenticated();
  // console.log("authenticated: ", await isAuthenticated());
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex items-center justify-between p-12">
      <Link href="/">
        <p className="text-2xl font-semibold">MailBuddy</p>
      </Link>

      <>
        {_isAuthenticated ? (
          <div className="space-x-4">
            <Button className="px-6 py-4 text-lg font-light">
              <LogoutLink>Log out</LogoutLink>
            </Button>
          </div>
        ) : (
          <div className="space-x-4">
            <Button variant="ghost" className="px-6 py-4 text-lg font-light">
              <LoginLink>Sign In</LoginLink>
            </Button>
            <Button className="px-6 py-4 text-lg font-light">
              Start for free
            </Button>
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
