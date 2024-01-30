import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default async function SendMail() {
  const { isAuthenticated } = getKindeServerSession();
  const _isAuthenticated = await isAuthenticated();

  if (!_isAuthenticated) {
    redirect("/");
  }

  return (
    <main>
      <h1 className="text-3xl font-semibold">Step 3:</h1>
      <h3 className="text-xl">
        Preview and send your custom mail. Its that simple!
      </h3>

      <footer className="my-8 flex w-full items-center justify-start">
        <Link href="/fillForm">
          <Button variant="outline" className="text-lg">
            <ChevronLeft size={32} strokeWidth={1} /> Previous
          </Button>
        </Link>
      </footer>
    </main>
  );
}
