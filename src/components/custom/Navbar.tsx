import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogIn, LogOut } from "lucide-react";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  // const user = await getUser();
  const _isAuthenticated = await isAuthenticated();
  // console.log("authenticated: ", await isAuthenticated());
  return (
    <nav className="sticky inset-x-0 top-0 z-50 flex items-center justify-between p-12">
      <Link href="/">
        <p className="text-2xl font-semibold">MailBuddy</p>
      </Link>

      <>
        {_isAuthenticated ? (
          <>
            <div className="hidden space-x-4 md:block">
              <Button className="px-6 py-4 text-lg font-light">
                <LogoutLink>Log out</LogoutLink>
              </Button>
            </div>
            <div className="block space-x-4 md:hidden">
              <LogoutLink>
                <LogOut strokeWidth={2.25} />
              </LogoutLink>
            </div>
          </>
        ) : (
          <>
            <div className="hidden space-x-4 md:block">
              <Button variant="ghost" className="px-6 py-4 text-lg font-light">
                <LoginLink>Sign In</LoginLink>
              </Button>
              <Button className="px-6 py-4 text-lg font-light">
                <RegisterLink>Start for free</RegisterLink>
              </Button>
            </div>
            <div className="block space-x-4 md:hidden">
              <LoginLink>
                <LogIn strokeWidth={2.25} />
              </LoginLink>
            </div>
          </>
        )}
      </>
    </nav>
  );
};

export default Navbar;
