/* global React */
function Hero({ setRoute }) {
  const isMobile = window.useIsMobile();
  return (
    <section style={{ position: "relative", padding: isMobile ? "40px 20px 32px" : "80px 32px 64px", overflow: "hidden" }}>
      {!isMobile && (
        <svg style={{ position: "absolute", top: -40, right: -40, pointerEvents: "none" }} width="320" height="320" viewBox="0 0 320 320">
          <line x1="180" y1="-20" x2="380" y2="220" stroke="#c4ff00" strokeWidth="2"/>
          <line x1="220" y1="-20" x2="420" y2="220" stroke="#c4ff00" strokeWidth="2"/>
          <line x1="260" y1="-20" x2="460" y2="220" stroke="#c4ff00" strokeWidth="2"/>
        </svg>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <span className="tag" style={{ background: "#c4ff00", color: "#0a0a0a" }}>PORTFOLIO / 2026</span>
        {!isMobile && <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 00 / INDEX</span>}
      </div>

      <h1 className="display" style={{ fontSize: isMobile ? 52 : 152, lineHeight: 0.88, letterSpacing: "-0.03em", marginBottom: 24 }}>
        I BUILD<br/>
        <span className="hl">SOFTWARE</span><br/>
        THAT WORKS.
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 24 : 48,
        alignItems: "end",
        marginTop: 40,
      }}>
        <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.45, color: "#ededed" }}>
          Web, productos digitales, chatbots, IA local en tu hardware, auditorías técnicas y sistemas CRM/CLM hechos a medida. Sin agencia, sin intermediarios. <span className="hl">Tú y yo.</span>
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: isMobile ? "flex-start" : "flex-end", flexWrap: "wrap" }}>
          <button onClick={() => setRoute("projects")} className="btn" style={btnPrimary}>SEE THE WORK →</button>
          <button onClick={() => setRoute("contacto")} className="btn" style={btnGhost}>START A BRIEF</button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: isMobile ? 40 : 80, borderTop: "1px solid #2a2a2a", paddingTop: 16 }}>
        <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>§00 — INDEX</span>
        <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>SCROLL ↓</span>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const isMobile = window.useIsMobile();
  const items = [
    { code: "01", k: "WEB & PRODUCT", v: "Marketing sites, web apps, product UI. Hand-coded, fast, accesibles.", acid: false, ink: false },
    { code: "02", k: "CHATBOTS / AGENTS", v: "Custom assistants on top of your data. RAG, tools, eval.", acid: true, ink: false },
    { code: "03", k: "LOCAL AI", v: "LLMs running on your hardware. Llama, Mistral, Whisper, on-prem.", acid: false, ink: false },
    { code: "04", k: "AUDIT", v: "Stack review, code health, performance. A written report you can act on.", acid: false, ink: true },
    { code: "05", k: "CRM / CLM", v: "Custom pipelines. Contracts, leads, signed deals — under your control.", acid: false, ink: false },
    { code: "06", k: "3D / MOTION", v: "Visual systems for the loud parts of your product.", acid: false, ink: false },
  ];
  return (
    <section style={{ padding: isMobile ? "24px 20px" : "32px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, alignItems: "end", flexWrap: "wrap", gap: 12 }}>
        <div>
          <span className="tag">WHAT I SHIP</span>
          <h2 className="display" style={{ fontSize: isMobile ? 44 : 80, lineHeight: 0.9, marginTop: 14 }}>
            SIX <span className="hl">DISCIPLINES.</span><br/>ONE BUILDER.
          </h2>
        </div>
        {!isMobile && <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 01 / SERVICES</span>}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 0,
        border: "1px solid #2a2a2a",
        borderRight: "1px solid #2a2a2a",
        borderBottom: "none",
      }}>
        {items.map(it => {
          const bg = it.acid ? "#c4ff00" : it.ink ? "#0a0a0a" : "transparent";
          const fg = it.acid ? "#0a0a0a" : "#ededed";
          const sub = it.acid ? "#0a0a0a" : "#a8a8a8";
          return (
            <div key={it.code} style={{
              padding: isMobile ? "20px" : 32,
              borderRight: isMobile ? "none" : "1px solid #2a2a2a",
              borderBottom: "1px solid #2a2a2a",
              background: bg, color: fg,
              minHeight: isMobile ? 100 : 240,
              cursor: "crosshair", transition: "outline 100ms linear",
            }}
              onMouseEnter={e => e.currentTarget.style.outline = `2px solid ${it.acid ? "#0a0a0a" : "#c4ff00"}`}
              onMouseLeave={e => e.currentTarget.style.outline = "none"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="display" style={{ fontSize: isMobile ? 36 : 64, lineHeight: 1, color: it.acid ? "#0a0a0a" : "#c4ff00" }}>{it.code}</div>
                {isMobile && <div className="mono" style={{ fontSize: 11, color: sub, paddingTop: 4 }}>{it.k}</div>}
              </div>
              {!isMobile && <div className="mono" style={{ fontSize: 11, marginTop: 8, color: sub }}>{it.k}</div>}
              {!isMobile && <div className="display" style={{ fontSize: 22, marginTop: 18, lineHeight: 1, color: fg }}>{it.k}</div>}
              <p style={{ fontSize: 13, color: sub, marginTop: isMobile ? 8 : 8, lineHeight: 1.5 }}>{it.v}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedWork({ setRoute, openCase }) {
  const isMobile = window.useIsMobile();
  const items = [
    { id: "altavoz", n: "01", title: "ALTAVOZ.AI", kind: "LOCAL LLM PLATFORM", year: "2026" },
    { id: "fonsa", n: "02", title: "FONSA / CLM", kind: "CONTRACT LIFECYCLE", year: "2025" },
    { id: "raw", n: "03", title: "RAW STUDIO", kind: "PORTFOLIO + CMS", year: "2025" },
  ];
  return (
    <section style={{ padding: isMobile ? "24px 20px" : "32px", background: "#c4ff00", color: "#0a0a0a" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, alignItems: "end", flexWrap: "wrap", gap: 12 }}>
        <div>
          <span className="mono" style={{ background: "#0a0a0a", color: "#c4ff00", padding: "6px 10px 7px", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em" }}>SELECT WORK</span>
          <h2 className="display" style={{ fontSize: isMobile ? 44 : 80, lineHeight: 0.9, marginTop: 14, color: "#0a0a0a" }}>
            THINGS I'VE<br/>SHIPPED LATELY.
          </h2>
        </div>
        {!isMobile && <span className="mono" style={{ fontSize: 12 }}>§ 02 / WORK</span>}
      </div>

      <div style={{ borderTop: "2px solid #0a0a0a" }}>
        {items.map(it => (
          <div key={it.id} onClick={() => openCase(it.id)} style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr auto" : "60px 2fr 2fr 1fr 60px",
            alignItems: "center",
            padding: isMobile ? "16px 0" : "28px 0",
            borderBottom: "2px solid #0a0a0a",
            cursor: "crosshair", gap: isMobile ? 12 : 0,
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#0a0a0a"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            {isMobile ? (
              <>
                <div>
                  <div className="mono" style={{ fontSize: 10, opacity: 0.6 }}>{it.n} · {it.kind}</div>
                  <div className="display" style={{ fontSize: 28, lineHeight: 1, marginTop: 4 }}>{it.title}</div>
                </div>
                <span className="display" style={{ fontSize: 20, textAlign: "right" }}>→</span>
              </>
            ) : (
              <>
                <span data-flip className="display" style={{ fontSize: 24, color: "#0a0a0a" }}>{it.n}</span>
                <span data-flip className="display" style={{ fontSize: 40, lineHeight: 0.9, color: "#0a0a0a" }}>{it.title}</span>
                <span data-flip className="mono" style={{ fontSize: 12, color: "#0a0a0a" }}>{it.kind}</span>
                <span data-flip className="mono" style={{ fontSize: 12, color: "#0a0a0a" }}>{it.year}</span>
                <span data-flip className="display" style={{ fontSize: 24, color: "#0a0a0a", textAlign: "right" }}>→</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
        <button onClick={() => setRoute("projects")} className="btn" style={{ ...btnPrimary, background: "#0a0a0a", color: "#c4ff00", border: "2px solid #0a0a0a" }}>
          ALL WORK / 12 →
        </button>
      </div>
    </section>
  );
}

const btnPrimary = {
  display: "inline-flex", alignItems: "center", gap: 10,
  fontFamily: "'JetBrains Mono', monospace", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600,
  padding: "14px 22px", border: "2px solid #0a0a0a", background: "#c4ff00", color: "#0a0a0a", cursor: "crosshair",
};
const btnGhost = {
  display: "inline-flex", alignItems: "center", gap: 10,
  fontFamily: "'JetBrains Mono', monospace", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600,
  padding: "14px 22px", border: "2px solid #ededed", background: "transparent", color: "#ededed", cursor: "crosshair",
};

window.Hero = Hero;
window.ServicesGrid = ServicesGrid;
window.FeaturedWork = FeaturedWork;
window.btnPrimary = btnPrimary;
window.btnGhost = btnGhost;
