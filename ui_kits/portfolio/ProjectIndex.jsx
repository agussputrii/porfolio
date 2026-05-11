/* global React */
function ProjectIndex({ openCase }) {
  const isMobile = window.useIsMobile();
  const [filter, setFilter] = React.useState("ALL");
  const filters = ["ALL", "WEB", "AI", "CRM/CLM", "AUDIT", "MOTION"];
  const projects = [
    { id: "altavoz", n: "01", title: "ALTAVOZ.AI", kind: "AI", desc: "Plataforma LLM local sobre hardware del cliente.", year: "2026", client: "Internal", acid: true },
    { id: "fonsa", n: "02", title: "FONSA / CLM", kind: "CRM/CLM", desc: "Contract lifecycle para una firma legal de 40 abogados.", year: "2025", client: "Fonsa Abogados" },
    { id: "raw", n: "03", title: "RAW STUDIO", kind: "WEB", desc: "Portfolio + CMS para un estudio de fotografía.", year: "2025", client: "Raw" },
    { id: "krn", n: "04", title: "KRN BOT", kind: "AI", desc: "Chatbot RAG sobre 12k documentos internos.", year: "2025", client: "Karen Health" },
    { id: "metric", n: "05", title: "METRIC.UNO", kind: "WEB", desc: "Dashboard analítico para un retailer.", year: "2024", client: "Metric S.A." },
    { id: "audit-norte", n: "06", title: "AUDIT / NORTE", kind: "AUDIT", desc: "Stack review · 84 páginas · roadmap a 90 días.", year: "2024", client: "Norte Bank" },
    { id: "loop", n: "07", title: "LOOP MOTION", kind: "MOTION", desc: "Sistema de motion para identidad de marca.", year: "2024", client: "Loop" },
    { id: "tienda", n: "08", title: "TIENDA / CRM", kind: "CRM/CLM", desc: "CRM custom para 18 tiendas físicas.", year: "2024", client: "Tienda Real" },
  ];
  const visible = filter === "ALL" ? projects : projects.filter(p => p.kind === filter);

  return (
    <section style={{ padding: isMobile ? "24px 20px" : 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, alignItems: "end", flexWrap: "wrap", gap: 12 }}>
        <div>
          <span className="tag">/ INDEX</span>
          <h1 className="display" style={{ fontSize: isMobile ? 52 : 96, lineHeight: 0.9, marginTop: 14 }}>SELECT <span className="hl">WORK.</span></h1>
        </div>
        <span className="mono" style={{ color: "#a8a8a8", fontSize: 12 }}>§ 02 / WORK · {visible.length} / {projects.length}</span>
      </div>

      <div style={{ display: "flex", gap: 0, marginBottom: 20, borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", overflowX: "auto" }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} className="mono" style={{
            background: filter === f ? "#c4ff00" : "transparent",
            color: filter === f ? "#0a0a0a" : "#ededed",
            border: "none", borderRight: "1px solid #2a2a2a",
            padding: isMobile ? "12px 14px" : "14px 20px",
            fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "crosshair",
            fontFamily: "'JetBrains Mono', monospace",
            whiteSpace: "nowrap", flexShrink: 0,
          }}>{f}</button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
        gap: 0, border: "1px solid #2a2a2a",
        borderRight: isMobile ? "1px solid #2a2a2a" : "none",
        borderBottom: "none",
      }}>
        {visible.map(p => (
          <article key={p.id} onClick={() => openCase(p.id)}
            style={{
              padding: isMobile ? "20px" : 32,
              borderRight: isMobile ? "none" : "1px solid #2a2a2a",
              borderBottom: "1px solid #2a2a2a",
              background: p.acid ? "#c4ff00" : "transparent",
              color: p.acid ? "#0a0a0a" : "#ededed",
              minHeight: isMobile ? 140 : 220, cursor: "crosshair", position: "relative",
            }}
            onMouseEnter={e => e.currentTarget.style.outline = "2px solid #c4ff00"}
            onMouseLeave={e => e.currentTarget.style.outline = "none"}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="mono" style={{ fontSize: 11, color: p.acid ? "#0a0a0a" : "#a8a8a8" }}>{p.n} / {p.kind}</span>
              <span className="mono" style={{ fontSize: 11, color: p.acid ? "#0a0a0a" : "#a8a8a8" }}>{p.year}</span>
            </div>
            <h3 className="display" style={{ fontSize: isMobile ? 32 : 48, lineHeight: 0.9, marginTop: isMobile ? 16 : 32 }}>{p.title}</h3>
            <p style={{ fontSize: isMobile ? 13 : 15, color: p.acid ? "#0a0a0a" : "#a8a8a8", marginTop: 10, lineHeight: 1.5, paddingRight: 32 }}>{p.desc}</p>
            <div style={{ position: "absolute", bottom: isMobile ? 16 : 24, right: isMobile ? 16 : 32 }}>
              <span className="display" style={{ fontSize: 20 }}>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.ProjectIndex = ProjectIndex;
