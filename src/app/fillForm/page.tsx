import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

export default async function FillForm() {
  const { isAuthenticated } = getKindeServerSession();
  const _isAuthenticated = await isAuthenticated();

  if (!_isAuthenticated) {
    redirect("/");
  }

  return (
    <main>
      <h1 className="text-3xl font-semibold">Step 2:</h1>
      <h3 className="text-xl">
        Provide custom details for the chosen template.
      </h3>
      <footer className="my-8 flex w-full items-center justify-between">
        <Link href="/chooseTemplate">
          <Button variant="outline" className="text-lg">
            <ChevronLeft size={32} strokeWidth={1} /> Previous
          </Button>
        </Link>

        <Link href="/sendMail">
          <Button variant="outline" className="text-lg">
            Next <ChevronRight size={32} strokeWidth={1} />
          </Button>
        </Link>
      </footer>
    </main>
  );
}
