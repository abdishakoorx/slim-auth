import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="flex-col flex items-center justify-center min-h-screen">
      <div className="space-y-4 text-center">
        <div className="flex gap-2 text-6xl font-bold text-primary drop-shadow-lg">
          <span>🚧</span>
          <h1>Auth</h1>
        </div>
        <p className="text-lg">
          Simplest Authentication Service
        </p>
        <div>
          <Button size={"lg"} className="text-lg bg-secondary">Get started</Button>
        </div>
      </div>
    </main>
  );
}
