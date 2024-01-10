import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-6xl font-bold">Mailing made simple.</h1>
        <p className="mt-3 text-center text-2xl">
          Meet MailBuddy - the easiest way to send out beautifully crafted
          emails to anyone.
        </p>
        <Button className="mt-6 px-8 py-6 text-lg font-light">
          <RegisterLink>Start for free</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
