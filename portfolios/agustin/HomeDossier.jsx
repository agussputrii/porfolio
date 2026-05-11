/* global React, AGUS */
/* VARIATION 03 — DOSSIER / EXPEDIENTE
   Print-style dossier. Off-white cream surface, ink black, acid as emphasis only.
   Reads like a serious technical CV / case file. Heavy mono, thin rules, archive feel. */

function HomeDossier() {
  const A = window.AGUS;
  const W = 1280;

  return (
    <div style={{ width: W, background: "#ededed", color: "#0a0a0a", fontFamily: "Inter, sans-serif" }}>
      {/* TOPBAR */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", borderBottom: "2px solid #0a0a0a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 28, height: 28, background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="display" style={{ color: "#c4ff00", fontSize: 14, lineHeight: 1 }}>AP</span>
          </div>
          <span className="display" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>PUTRINO / EXPEDIENTE</span>
        </div>
        <nav style={{ display: "flex", gap: 24 }}>
          {["Índice","Trabajo","Trayectoria","Charlas","Contacto"].map((it, i) => (
            <span key={it} className="mono" style={{
              fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
              textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600,
              borderBottom: i === 0 ? "2px solid #0a0a0a" : "2px solid transparent",
              paddingBottom: 4,
            }}>{it}</span>
          ))}
        </nav>
        <span className="mono" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em", color: "#6b6b6b" }}>
          EXP. 2026-001 · MENDOZA AR
        </span>
      </header>

      {/* DOSSIER HEADER */}
      <section style={{ padding: "32px", borderBottom: "1px solid #0a0a0a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em" }}>
          {[
            ["EXPEDIENTE",    A.meta.expediente],
            ["CLASIFICACIÓN", A.meta.clasificacion],
            ["JURISDICCIÓN",  A.meta.jurisdiccion],
            ["ESTADO",        A.meta.estado],
          ].map(([k, v]) => (
            <div key={k} style={{ borderLeft: "1px solid #0a0a0a", paddingLeft: 12 }}>
              <div style={{ color: "#6b6b6b" }}>{k}</div>
              <div style={{ marginTop: 6, fontWeight: 600 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "48px 32px 56px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 32, alignItems: "start" }}>
          <div>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b" }}>
              § A · IDENTIFICACIÓN DEL TITULAR
            </span>
            <h1 className="display" style={{ fontSize: 144, lineHeight: 0.86, letterSpacing: "-0.03em", margin: "16px 0 0" }}>
              AGUSTÍN<br/>PUTRINO
            </h1>
            <div className="mono" style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em" }}>
              {[A.role, ...A.subroles].map((r, i) => (
                <span key={r} style={{
                  padding: "5px 9px",
                  background: i === 0 ? "#0a0a0a" : "transparent",
                  color: i === 0 ? "#c4ff00" : "#0a0a0a",
                  border: "1px solid #0a0a0a",
                  fontWeight: 600,
                }}>{r}</span>
              ))}
            </div>
          </div>

          {/* photo placeholder */}
          <div style={{
            border: "2px solid #0a0a0a",
            background: "#0a0a0a",
            color: "#c4ff00",
            aspectRatio: "3/4",
            position: "relative",
            display: "flex", alignItems: "flex-end", padding: 14,
          }}>
            <svg viewBox="0 0 100 130" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <rect width="100" height="130" fill="#0a0a0a"/>
              <circle cx="50" cy="48" r="22" fill="#1a1a1a"/>
              <ellipse cx="50" cy="110" rx="40" ry="30" fill="#1a1a1a"/>
              <line x1="0" y1="0" x2="100" y2="130" stroke="#c4ff00" strokeWidth="0.3"/>
              <line x1="100" y1="0" x2="0" y2="130" stroke="#c4ff00" strokeWidth="0.3"/>
            </svg>
            <span className="mono" style={{ position: "relative", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              FOTOGRAFÍA · 3:4 · PLACEHOLDER
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 48 }}>
          <div>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b" }}>
              § B · OBJETO
            </span>
            <p style={{ fontSize: 22, lineHeight: 1.4, marginTop: 12, marginBottom: 0, maxWidth: "32ch" }}>
              {A.shortDossier}
            </p>
          </div>
          <div>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b" }}>
              § C · ANTECEDENTES
            </span>
            <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 12, marginBottom: 0, color: "#3a3a3a" }}>
              {A.long}
            </p>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ borderTop: "2px solid #0a0a0a", borderBottom: "2px solid #0a0a0a", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "#0a0a0a", color: "#ededed" }}>
        {A.stats.map((s, i) => (
          <div key={i} style={{
            padding: "28px 24px",
            borderRight: i < 3 ? "1px solid #2a2a2a" : "none",
          }}>
            <div className="display" style={{ fontSize: 56, lineHeight: 0.9, color: "#c4ff00" }}>{s.n}</div>
            <div className="mono" style={{ marginTop: 10, fontSize: 10, color: "#a8a8a8", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* CASOS — TABLA */}
      <section style={{ padding: "48px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 24 }}>
          <div>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b" }}>
              § D · CASOS DOCUMENTADOS
            </span>
            <h2 className="display" style={{ fontSize: 64, lineHeight: 0.9, marginTop: 12, margin: 0 }}>
              SEIS PROYECTOS<br/>EN EL EXPEDIENTE.
            </h2>
          </div>
          <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em", color: "#6b6b6b" }}>
            FOLIOS 01–06
          </span>
        </div>

        <div style={{ borderTop: "2px solid #0a0a0a" }}>
          <div className="mono" style={{
            display: "grid", gridTemplateColumns: "60px 1.4fr 2fr 1fr 1.4fr 60px",
            padding: "10px 0", borderBottom: "1px solid #0a0a0a",
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b",
          }}>
            <span>FOLIO</span>
            <span>PROYECTO</span>
            <span>DESCRIPCIÓN</span>
            <span>AÑO</span>
            <span>ESTADO</span>
            <span></span>
          </div>
          {A.projects.map((p) => (
            <div key={p.id} style={{
              display: "grid", gridTemplateColumns: "60px 1.4fr 2fr 1fr 1.4fr 60px",
              padding: "20px 0", borderBottom: "1px solid #0a0a0a", alignItems: "center",
            }}>
              <span className="mono" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.14em" }}>{p.n}</span>
              <span className="display" style={{ fontSize: 24, lineHeight: 1 }}>{p.title}</span>
              <span style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.45 }}>{p.sub}</span>
              <span className="mono" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", color: "#3a3a3a" }}>{p.year}</span>
              <span className="mono" style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.12em",
                background: "#c4ff00", color: "#0a0a0a", padding: "5px 8px", justifySelf: "start", fontWeight: 600,
              }}>{p.stat}</span>
              <span className="display" style={{ fontSize: 18, textAlign: "right" }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRAYECTORIA + RECONOCIMIENTOS */}
      <section style={{ padding: "0 32px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div style={{ border: "2px solid #0a0a0a", padding: 28 }}>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#6b6b6b" }}>
              § E · RECONOCIMIENTOS
            </span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {A.awards.slice(0, 5).map((a, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr", gap: 12, paddingBottom: 12, borderBottom: i < 4 ? "1px solid #0a0a0a" : "none" }}>
                  <span className="mono" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.14em", color: "#0a0a0a", fontWeight: 600 }}>{a.y}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.4, fontWeight: 600 }}>{a.k}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.4, color: "#3a3a3a" }}>{a.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#0a0a0a", color: "#ededed", padding: 28, position: "relative" }}>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#a8a8a8" }}>
              § F · CHARLAS Y SPEAKING
            </span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {A.speaking.slice(0, 6).map((s, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, fontSize: 14, lineHeight: 1.45 }}>
                  <span style={{ color: "#c4ff00" }}>▸</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ position: "absolute", bottom: 14, right: 14 }}>
              <span className="mono" style={{ fontSize: 10, color: "#6b6b6b", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em" }}>+ 12 EVENTOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE / SELLO */}
      <section style={{ padding: "48px 32px", borderTop: "2px solid #0a0a0a", background: "#c4ff00" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "end" }}>
          <h2 className="display" style={{ fontSize: 88, lineHeight: 0.88, margin: 0 }}>
            ABRIR<br/>NUEVO<br/>EXPEDIENTE.
          </h2>
          <div>
            <span className="mono" style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#0a0a0a", fontWeight: 600 }}>
              § Z · CONTACTO OFICIAL
            </span>
            <div style={{ marginTop: 14, fontSize: 16, lineHeight: 1.7 }}>
              <div style={{ fontWeight: 600 }}>{A.email}</div>
              <div>{A.phone}</div>
              <div>{A.city}</div>
              <div style={{ marginTop: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>{A.linkedin}</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, paddingTop: 16, borderTop: "1px solid #0a0a0a" }}>
          <span className="mono" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em" }}>
            FIRMA · A. PUTRINO / 2026
          </span>
          <span className="mono" style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.14em" }}>
            FIN DEL EXPEDIENTE — VÁLIDO
          </span>
        </div>
      </section>
    </div>
  );
}

window.HomeDossier = HomeDossier;
