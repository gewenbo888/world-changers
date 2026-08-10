"use client";

import { useState } from "react";
import Link from "next/link";
import { CHANGERS } from "@/data/changers";

export default function FilterGrid() {
  const [active, setActive] = useState<string>("all");

  const archetypes = Array.from(new Set(CHANGERS.map((c) => c.archetype)));
  const visible = active === "all" ? CHANGERS : CHANGERS.filter((c) => c.archetype === active);

  return (
    <>
      <div className="filters">
        <button
          className={active === "all" ? "active" : ""}
          onClick={() => setActive("all")}
        >
          All · 全部
        </button>
        {archetypes.map((a) => (
          <button
            key={a}
            className={active === a ? "active" : ""}
            onClick={() => setActive(a)}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="grid">
        {visible.map((c, i) => (
          <Link href={`/changers/${c.slug}`} key={c.slug} className="card" style={{ "--accent": c.accent } as React.CSSProperties}>
            <div className="top">
              <span className="num">
                {String(i + 1).padStart(2, "0")} / {String(CHANGERS.length).padStart(2, "0")}
              </span>
              <span className="tag">{c.archetype}</span>
            </div>
            <h3>
              {c.name}
              <span className="zh">{c.nameZh}</span>
            </h3>
            <p className="thesis">{c.thesis}</p>
            <div className="foot">Read · {c.era}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
