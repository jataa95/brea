"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const fmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: site.timeZone,
});

export function LagosClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className}>
      <span className="tabular-nums" suppressHydrationWarning>
        {time ?? "--:--:--"}
      </span>{" "}
      {site.city}, NG
    </span>
  );
}
