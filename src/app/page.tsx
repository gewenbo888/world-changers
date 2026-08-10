import Link from "next/link";
import FilterGrid from "@/components/FilterGrid";
import { ROADMAP, MANIFESTO } from "@/data/changers";

export default function Home() {
  return (
    <>
      <header className="wrap topbar">
        <span className="psi">Ψ PSYVERSE</span>
        <span>World Changers · Atlas</span>
        <span>16 Entries</span>
      </header>

      <main>
        <section className="wrap hero">
          <div className="kicker">An Atlas of the Archetypes Behind Every Great System</div>
          <h1>
            World
            <br />
            Changers
            <span className="zh">世界改变者图鉴</span>
          </h1>
          <p className="sub">
            Sixteen paths that changed the world — from the <strong>Yellow Emperor</strong> to the{" "}
            <strong>nameless</strong>. Not a hall of fame: a field guide to the patterns of
            builders. Systems and ideas outlive conquest and power.
          </p>
        </section>

        <section className="manifesto">
          <div className="wrap">
            <blockquote>
              {MANIFESTO.en}
              <span className="zh">{MANIFESTO.zh}</span>
            </blockquote>
          </div>
        </section>

        <section className="wrap section">
          <div className="section-head">
            <h2>
              One Road, Seven Segments
              <span className="zh">一条路，七个路段</span>
            </h2>
            <span className="note">The Playbook · 打法</span>
          </div>
          <div className="roadmap">
            {ROADMAP.map((s) => (
              <div className="road-step" key={s.index}>
                <span className="idx">{s.index}</span>
                <h3>
                  {s.name}
                  <span className="zh">{s.nameZh}</span>
                </h3>
                <span className="role">{s.role} · {s.roleZh}</span>
                <p>{s.move}</p>
                <span className="arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap section">
          <div className="section-head">
            <h2>
              The Sixteen
              <span className="zh">十六位</span>
            </h2>
            <span className="note">Filter by archetype · 按原型筛选</span>
          </div>
          <FilterGrid />
        </section>
      </main>

      <footer>
        <div className="wrap row">
          <span>Ψ World Changers · 世界改变者图鉴</span>
          <Link href="https://psyverse.fun">Psyverse Portfolio</Link>
          <span>By Gewenbo</span>
        </div>
      </footer>
    </>
  );
}
