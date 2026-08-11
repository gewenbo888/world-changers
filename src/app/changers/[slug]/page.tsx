import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CHANGERS, getChanger } from "@/data/changers";

export function generateStaticParams() {
  return CHANGERS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getChanger(params.slug);
  if (!c) return {};
  return {
    title: `${c.name} · ${c.nameZh} | World Changers`,
    description: c.thesis,
    alternates: { canonical: `/changers/${c.slug}` },
  };
}

export default function ChangerPage({ params }: { params: { slug: string } }) {
  const c = getChanger(params.slug);
  if (!c) notFound();

  const index = CHANGERS.findIndex((x) => x.slug === c.slug) + 1;

  return (
    <>
      <header className="wrap topbar">
        <Link href="/">World Changers</Link>
        <span>Atlas Entry {String(index).padStart(2, "0")} / {String(CHANGERS.length).padStart(2, "0")}</span>
      </header>

      <main className="detail">
        <Link className="back" href="/">← Back to Atlas</Link>

        <section className="detail-hero" style={{ "--accent": c.accent } as React.CSSProperties}>
          <div className="num-tag">
            <span>{String(index).padStart(2, "0")} / {String(CHANGERS.length).padStart(2, "0")}</span>
            <span className="archetype">{c.archetype} · {c.archetypeZh}</span>
          </div>
          <h1>
            {c.name}
            <span className="zh">{c.nameZh}</span>
          </h1>
          <div className="meta">
            <span>{c.era}</span>
            <span>{c.region}</span>
            <span>Tech analog · {c.techAnalog.split(" — ")[0]}</span>
          </div>
          <p className="thesis">
            {c.thesis}
            <span className="zh">{c.thesisZh}</span>
          </p>
        </section>

        <section className="detail-body">
          <div className="dblock">
            <h2>The Origin · 起家</h2>
            <p>
              {c.origin}
              <span className="zh-text">{c.originZh}</span>
            </p>
          </div>

          <div className="dblock">
            <h2>The Core Weapon · 核心武器</h2>
            <p>
              {c.weapon}
              <span className="zh-text">{c.weaponZh}</span>
            </p>
          </div>

          <div className="dblock">
            <h2>Key Moves · 关键动作</h2>
            <ul>
              {c.moves.map((m, i) => (
                <li key={i}>
                  <span>
                    {m}
                    <span className="zh">——{c.movesZh[i]}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dblock">
            <h2>The Legacy · 遗产</h2>
            <p>
              {c.legacy}
              <span className="zh-text">{c.legacyZh}</span>
            </p>
          </div>

          <div className="dblock">
            <h2>Tech Analog · 科技界对应</h2>
            <p>
              {c.techAnalog}
              <span className="zh-text">{c.techAnalogZh}</span>
            </p>
          </div>

          <div className="dblock">
            <h2>The Takeaway · 可学动作</h2>
            <p>
              {c.lesson}
              <span className="zh-text">{c.lessonZh}</span>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap row">
          <Link href="/">← Back to Atlas · 返回图鉴</Link>
          <Link href="https://psyverse.fun">Psyverse Portfolio</Link>
        </div>
      </footer>
    </>
  );
}
