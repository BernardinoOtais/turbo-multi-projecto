import Image from "next/image";
import React from "react";

const BotaoHeader = () => {
  return (
    <a href="/dashboard">
      <div className="flex flex-row gap-3">
        <div className="flex aspect-square items-center justify-center rounded-lg">
          <Image
            src="/favicon.ico"
            alt="Favicon"
            width={32} // Set width
            height={32} // Set height
          />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Fmoda</span>
          <span className="truncate text-xs">Indústria têxtiel S.A.</span>
        </div>
      </div>
    </a>
  );
};

export default BotaoHeader;
