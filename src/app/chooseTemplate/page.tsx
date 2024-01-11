import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ChooseTemplate() {
  const { isAuthenticated } = getKindeServerSession();
  const _isAuthenticated = await isAuthenticated();

  if (!_isAuthenticated) {
    redirect("/");
  }

  return (
    <main>
      <h1 className="text-3xl font-semibold">Step 1:</h1>
      <h3 className="text-xl">Choose your email template!</h3>

      <footer className="my-8 flex w-full items-center justify-end">
        <Link href="/fillForm">
          <Button variant="outline" className="text-lg">
            Next <ChevronRight size={32} strokeWidth={1} />
          </Button>
        </Link>
      </footer>
    </main>
  );
}
