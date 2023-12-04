import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center">Mailing made simple.</h1>
        <p className="text-2xl mt-3 text-center">
          Meet MailBuddy - the easiest way to send out beautifully crafted
          emails to anyone.
        </p>
        <Button className="mt-6 font-light text-lg py-6 px-8">
          Start for free
        </Button>
      </div>
    </div>
  );
}
