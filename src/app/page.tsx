import MenuLink from "@/components/menulink";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="font-bold cursor-pointer select-none text-xl">
          edital.ai
        </h1>

        <MenuLink />

        <div>
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
