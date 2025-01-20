import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import React from "react";

type ApagaOpDContainerProps = {
  op: number;
};
const ApagaOpDContainer = ({ op }: ApagaOpDContainerProps) => {
  return (
    <Button className="group relative mr-2" variant={"outline"}>
      <span>{`Op ${op}`}</span>

      <Badge
        variant="destructive"
        className="absolute right-[-20px] top-[-18px] hidden h-5 w-5 items-center justify-center rounded-full text-xs font-bold group-hover:flex"
      >
        {"x"}
      </Badge>
      {/* Hover Badge */}
    </Button>
  );
};

export default ApagaOpDContainer;
