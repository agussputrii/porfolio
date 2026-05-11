/* global React, AGUS */
/* VARIATION 01 — BRUTAL EDITORIAL
   Closest to the approved BRUTAL.DIGITAL system.
   Oversized type, acid lime accents, mono markers, dark surface. */

function HomeBrutal() {
  const A = window.AGUS;
  const W = 1280;

  return (
    <div style={{ width: W, background: "#0a0a0a", color: "#ededed", fontFamily: "Inter, sans-serif" }}>
      {/* TOPBAR */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #2a2a2a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 14, height: 14, background: "#c4ff00" }}></div>
          <span className="display" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>PUTRINO</span>
          <span className="display" style={{ fontSize: 18, color: "#c4ff00", letterSpacing: "-0.01em" }}>.AI</span>
        </div>
        <nav style={{ display: "flex", gap: 6 }}>
          {["INDEX","TRABAJO","SOBRE","CHARLAS","CONTACTO"].map((it,i) => (
            <span key={it} className="mono" style={{
              padding: "8px 12px", fontSize: 12,
              background: i===0 ? "#c4ff00" : "transparent",
              color: i===0 ? "#0a0a0a" : "#ededed",
              fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600,
            }}>{it}</span>
          ))}
        </nav>
        <span className="mono" style={{ fontSize: 11, color: "#a8a8a8" }}>FILE 001 / PORTFOLIO 2026</span>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", padding: "64px 40px 56px", overflow: "hidden" }}>
        <svg style={{ position: "absolute", top: -40, right: -40, pointerEvents: "none" }} width="320" height="320" viewBox="0 0 320 320">
          <line x1="180" y1="-20" x2="380" y2="220" stroke="#c4ff00" strokeWidth="2"/>
          <line x1="220" y1="-20" x2="420" y2="220" stroke="#c4ff00" strokeWidth="2"/>
          <line x1="260" y1="-20" x2="460" y2="220" stroke="#c4ff00" strokeWidth="2"/>
        </svg>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28 }}>
          <span className="tag" style={{ background: "#c4ff00", color: "#0a0a0a" }}>MAGÍSTER EN IA · MENDOZA · 2026</span>
          <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 00 / INDEX</span>
        </div>

        <h1 className="display" style={{ fontSize: 168, lineHeight: 0.86, letterSpacing: "-0.03em", margin: 0 }}>
          AGUSTÍN<br/>
          <span style={{ color: "#c4ff00" }}>PUTRINO.</span>
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end", marginTop: 56 }}>
          <p style={{ fontSize: 22, lineHeight: 1.4, maxWidth: "44ch", margin: 0 }}>
            Construyo <span className="hl">sistemas de IA aplicada</span> sobre datos sensibles. On-premise. Trazables. En producción.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <span className="btn" style={btnPrimary}>VER TRABAJO →</span>
            <span className="btn" style={btnGhost}>AGENDAR LLAMADA</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 64, borderTop: "1px solid #2a2a2a", paddingTop: 16 }}>
          <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>§00 — INDEX · MENDOZA AR ↔ REMOTO LATAM</span>
          <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>SCROLL ↓</span>
        </div>
      </section>

      {/* TICKER STATS */}
      <section style={{ borderTop: "2px solid #2a2a2a", borderBottom: "2px solid #2a2a2a", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {A.stats.map((s, i) => (
          <div key={i} style={{
            padding: "32px 28px",
            borderRight: i < 3 ? "2px solid #2a2a2a" : "none",
            background: i === 1 ? "#c4ff00" : "transparent",
            color: i === 1 ? "#0a0a0a" : "#ededed",
          }}>
            <div className="display" style={{ fontSize: 56, lineHeight: 0.9, color: i === 1 ? "#0a0a0a" : "#c4ff00" }}>{s.n}</div>
            <div className="mono" style={{ marginTop: 14, fontSize: 11, color: i === 1 ? "#0a0a0a" : "#a8a8a8", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, alignItems: "end" }}>
          <div>
            <span className="tag">QUÉ HAGO</span>
            <h2 className="display" style={{ fontSize: 80, lineHeight: 0.9, marginTop: 16 }}>
              SEIS <span className="hl">DISCIPLINAS.</span><br/>UN SOLO BUILDER.
            </h2>
          </div>
          <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 01 / SERVICIOS</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid #2a2a2a", borderRight: "none", borderBottom: "none" }}>
          {A.services.map((it, i) => {
            const acid = i === 1, ink = i === 3;
            const bg = acid ? "#c4ff00" : ink ? "#0a0a0a" : "transparent";
            const fg = acid ? "#0a0a0a" : "#ededed";
            const sub = acid ? "#0a0a0a" : "#a8a8a8";
            return (
              <div key={it.code} style={{ padding: 28, borderRight: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", background: bg, color: fg, minHeight: 220 }}>
                <div className="display" style={{ fontSize: 56, lineHeight: 1, color: acid ? "#0a0a0a" : "#c4ff00" }}>{it.code}</div>
                <div className="mono" style={{ fontSize: 11, marginTop: 8, color: sub, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>{it.k}</div>
                <div className="display" style={{ fontSize: 22, marginTop: 16, lineHeight: 1, color: fg }}>{it.k}</div>
                <p style={{ fontSize: 14, color: sub, marginTop: 8, lineHeight: 1.5 }}>{it.v}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORK — acid */}
      <section style={{ padding: 40, background: "#c4ff00", color: "#0a0a0a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, alignItems: "end" }}>
          <div>
            <span className="mono" style={{ background: "#0a0a0a", color: "#c4ff00", padding: "6px 10px 7px", fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>SELECCIÓN</span>
            <h2 className="display" style={{ fontSize: 80, lineHeight: 0.9, marginTop: 16, color: "#0a0a0a" }}>
              PROYECTOS<br/>EN PRODUCCIÓN.
            </h2>
          </div>
          <span className="mono" style={{ fontSize: 12 }}>§ 02 / TRABAJO</span>
        </div>

        <div style={{ borderTop: "2px solid #0a0a0a" }}>
          {A.projects.slice(0, 4).map((it) => (
            <div key={it.id} style={{ display: "grid", gridTemplateColumns: "60px 2fr 2fr 1fr 60px", alignItems: "center", padding: "24px 0", borderBottom: "2px solid #0a0a0a" }}>
              <span className="display" style={{ fontSize: 22, color: "#0a0a0a" }}>{it.n}</span>
              <span className="display" style={{ fontSize: 36, lineHeight: 0.9, color: "#0a0a0a" }}>{it.title}</span>
              <span className="mono" style={{ fontSize: 11, color: "#0a0a0a", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>{it.kind}</span>
              <span className="mono" style={{ fontSize: 11, color: "#0a0a0a", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em" }}>{it.year}</span>
              <span className="display" style={{ fontSize: 22, color: "#0a0a0a", textAlign: "right" }}>→</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <span className="btn" style={{ ...btnPrimary, background: "#0a0a0a", color: "#c4ff00", border: "2px solid #0a0a0a" }}>
            TODO EL TRABAJO / 06 →
          </span>
        </div>
      </section>

      {/* VIDEO REEL — DIGITAL TWINS */}
      {(() => {
        const reit = A.projects.find(p => p.id === "reit");
        const [active, setActive] = React.useState(0);
        return (
          <section style={{ padding: 40, background: "#111", borderTop: "2px solid #2a2a2a" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
              <div>
                <span className="tag" style={{ background: "#2a2a2a", color: "#c4ff00" }}>PROYECTO 07 · PROPTECH</span>
                <h2 className="display" style={{ fontSize: 72, lineHeight: 0.9, marginTop: 16 }}>
                  DIGITAL<br/><span style={{ color: "#c4ff00" }}>TWINS.</span>
                </h2>
                <p style={{ marginTop: 12, color: "#a8a8a8", fontSize: 15, maxWidth: "46ch", lineHeight: 1.5 }}>
                  {reit.blurb}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 03 / REEL</span>
                <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
                  {reit.tags.map(t => (
                    <span key={t} className="mono" style={{ background: "#1e1e1e", color: "#c4ff00", padding: "4px 10px", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ position: "relative", background: "#000", border: "2px solid #2a2a2a", marginBottom: 12 }}>
              <video
                key={reit.videos[active]}
                src={reit.videos[active]}
                autoPlay
                muted
                loop
                controls
                style={{ width: "100%", display: "block", maxHeight: 520, objectFit: "contain" }}
              />
              <div className="mono" style={{ position: "absolute", top: 12, left: 12, background: "#c4ff00", color: "#0a0a0a", padding: "4px 10px", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                {String(active + 1).padStart(2, "0")} / {String(reit.videos.length).padStart(2, "0")}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: `repeat(${reit.videos.length}, 1fr)`, gap: 6 }}>
              {reit.videos.map((v, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    cursor: "crosshair",
                    border: i === active ? "2px solid #c4ff00" : "2px solid #2a2a2a",
                    background: "#000",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <video
                    src={v}
                    muted
                    preload="metadata"
                    style={{ width: "100%", height: 90, objectFit: "cover", display: "block", pointerEvents: "none" }}
                  />
                  <div className="mono" style={{
                    position: "absolute", bottom: 4, left: 6,
                    fontSize: 9, fontFamily: "'JetBrains Mono', monospace",
                    color: i === active ? "#c4ff00" : "#a8a8a8",
                  }}>
                    CLIP {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* CIERRE */}
      <section style={{ padding: "64px 40px", borderTop: "1px solid #2a2a2a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48 }}>
          <h2 className="display" style={{ fontSize: 96, lineHeight: 0.9, margin: 0 }}>
            ¿IA SOBRE TU<br/>DATO REAL?<br/><span className="hl">HABLEMOS.</span>
          </h2>
          <div>
            <div className="mono" style={{ color: "#c4ff00", marginBottom: 12, fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>CONTACTO DIRECTO</div>
            <div style={{ fontSize: 17, lineHeight: 1.6 }}>
              <div>{A.email}</div>
              <div style={{ color: "#a8a8a8" }}>{A.phone}</div>
              <div style={{ color: "#a8a8a8" }}>{A.city}</div>
              <div style={{ color: "#a8a8a8", marginTop: 12 }}>{A.linkedin}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.HomeBrutal = HomeBrutal;
