import React from "react";
import { Button } from "../ui/button";

export default function CreateButton() {
  return (
    <div>
      <aside>
        <Button className="rounded-full" variant={"outline"}>
          <img src="/images/addicon.png" alt="plus icon" className="size-6" />
          <p>
            Create <span></span>
          </p>
        </Button>
      </aside>
    </div>
  );
}
