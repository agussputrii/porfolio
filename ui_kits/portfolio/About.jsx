/* global React */
function About({ setRoute }) {
  const isMobile = window.useIsMobile();

  const awards = [
    { title: "10 Jóvenes Sobresalientes (TOYP)", org: "JCI" },
    { title: "Declaración de Interés Legislativo", org: "PREDETECT AI · INNOVADUCATE & Biobox" },
    { title: "Declaración de Interés Legislativo", org: "INNOVADUCATE" },
    { title: "Premios a la Innovación", org: "UNCuyo / FUNC" },
    { title: "Reconocimiento Provincial", org: "Hackathon Tu Economía en Juego" },
  ];

  const edu = [
    { year: "2024", title: "Magíster en Inteligencia Artificial", org: "TECH University" },
    { year: "2024", title: "Diplomatura Iberoamericana en Innovación Abierta", org: "UTN" },
    { year: "2023", title: "Técnico Superior Universitario en Programación", org: "UTN FRSR" },
    { year: "2021–23", title: "Fullstack Dev · Python · JavaScript · Big Data", org: "Egg Cooperación · Fundación Telefónica · Santísima Trinidad" },
  ];

  const skillGroups = [
    { cat: "IA & ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "CNNs", "RAG", "Fine-tuning", "Whisper", "OCR"] },
    { cat: "LLMs", items: ["OpenAI API", "Gemini", "DeepSeek", "Hugging Face", "Ollama", "vLLM", "Embeddings"] },
    { cat: "DEV", items: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL", "MongoDB", "Tauri"] },
    { cat: "INFRA", items: ["Docker", "Git", "JWT / OAuth", "SSL/TLS", "APIs REST", "Automatización"] },
  ];

  const speakers = [
    "REDIPP · Jornadas Internacionales — Latinoamérica para Contar – UCH",
    "UNCuyo · UtopIAs — Caso de éxito: IA en escuelas",
    "Cámara de Senadores · Programa 7 Aportes de IA",
    "SAIA Mendoza · CNN en predicción de estado mamográfico",
    "SummitX · POLO TIC & EX BODEGA ARIZU",
    "Cdad de Mendoza · Hackathón Tu economía en juego",
    "JCI · Evento Líder 360",
    "Mentor · Hackathon EduTech 360 — 130 participantes · equipos 1° y 2° puesto",
  ];

  return (
    <article>
      {/* Hero */}
      <section style={{ padding: isMobile ? "40px 20px 32px" : "64px 32px 48px", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <svg style={{ position: "absolute", top: -20, right: -20 }} width="320" height="320" viewBox="0 0 320 320">
            <line x1="180" y1="-20" x2="380" y2="220" stroke="#c4ff00" strokeWidth="2"/>
            <line x1="220" y1="-20" x2="420" y2="220" stroke="#c4ff00" strokeWidth="2"/>
          </svg>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <span className="tag">/ ABOUT</span>
          {!isMobile && <span className="mono" style={{ fontSize: 12, color: "#a8a8a8" }}>AGUSTÍN PUTRINO · MENDOZA, ARG</span>}
        </div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 128, lineHeight: 0.88 }}>
          ONE BUILDER.<br/><span className="hl">NO AGENCY.</span>
        </h1>
        <p style={{ fontSize: isMobile ? 14 : 18, color: "#a8a8a8", marginTop: 20, maxWidth: "56ch" }}>
          Magíster en IA · Founder de INNOVADUCATE (Ex CEO) · Desarrollador Fullstack · Consultor &amp; Speaker
        </p>
      </section>

      {/* Impact stats */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, background: "#c4ff00", color: "#0a0a0a" }}>
        <span className="mono" style={{ fontSize: 12, marginBottom: 20, display: "block" }}>IMPACTO REAL</span>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 20 : 32 }}>
          {[
            { n: "+500", l: "CAPACITACIONES" },
            { n: "+60", l: "INSTITUCIONES" },
            { n: "5", l: "RECONOCIMIENTOS" },
            { n: "12+", l: "SPEAKER EVENTS" },
          ].map((s, i) => (
            <div key={i} style={{ borderTop: "2px solid #0a0a0a", paddingTop: 12 }}>
              <div className="display" style={{ fontSize: isMobile ? 40 : 64, lineHeight: 1 }}>{s.n}</div>
              <div className="mono" style={{ fontSize: 11, marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio + Experience */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 64 }}>
        <div>
          <span className="tag">BIO</span>
          <p style={{ fontSize: isMobile ? 16 : 20, color: "#ededed", lineHeight: 1.5, marginTop: 14 }}>
            Especializado en inteligencia artificial aplicada para educación, salud, seguridad y empresas. Implemento IA local (on-premise): privacidad primero, datos adentro.
          </p>
          <p style={{ fontSize: isMobile ? 14 : 17, color: "#a8a8a8", lineHeight: 1.55, marginTop: 12 }}>
            Creador del programa <strong style={{ color: "#ededed" }}>"IA-DAPTÁ TU FUTURO"</strong> junto a Banco Galicia y la Dirección de Educación de Mendoza. Más de 500 instancias formativas dictadas.
          </p>
        </div>
        <div>
          <span className="tag">EXPERIENCIA</span>
          <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column" }}>
            {[
              ["2026 →", "Consultor & Dev Independiente · DeepLayers AI"],
              ["2023–2025", "Founder & CEO · INNOVADUCATE S.A.S"],
              ["2021–2022", "Fullstack Developer · proyectos freelance"],
            ].map(([y, w]) => (
              <li key={y} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 12, padding: "14px 0", borderBottom: "1px solid #2a2a2a" }}>
                <span className="mono" style={{ fontSize: 11, color: "#c4ff00" }}>{y}</span>
                <span style={{ fontSize: 14, color: "#a8a8a8" }}>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, borderTop: "1px solid #2a2a2a" }}>
        <span className="tag">STACK COMPLETO</span>
        <h2 className="display" style={{ fontSize: isMobile ? 40 : 64, lineHeight: 0.9, marginTop: 14, marginBottom: 24 }}>SHARP <span className="hl">EDGES.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 0, border: "1px solid #2a2a2a" }}>
          {skillGroups.map((g, i) => (
            <div key={g.cat} style={{
              padding: isMobile ? 16 : 24,
              borderRight: (isMobile ? i % 2 === 0 : i < skillGroups.length - 1) ? "1px solid #2a2a2a" : "none",
              borderBottom: isMobile && i < 2 ? "1px solid #2a2a2a" : "none",
            }}>
              <div className="display" style={{ fontSize: isMobile ? 18 : 22, color: "#c4ff00", marginBottom: 14 }}>{g.cat}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {g.items.map(t => (
                  <span key={t} className="mono" style={{ fontSize: isMobile ? 10 : 11, color: "#a8a8a8" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, borderTop: "1px solid #2a2a2a" }}>
        <span className="tag">RECONOCIMIENTOS</span>
        <h2 className="display" style={{ fontSize: isMobile ? 40 : 64, lineHeight: 0.9, marginTop: 14, marginBottom: 24 }}>DISTINCTIONS.</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, border: "1px solid #2a2a2a" }}>
          {awards.map((a, i) => (
            <div key={i} style={{
              padding: isMobile ? 16 : 24,
              borderRight: !isMobile && i % 2 === 0 ? "1px solid #2a2a2a" : "none",
              borderBottom: (isMobile ? i < awards.length - 1 : Math.floor(i / 2) < Math.floor((awards.length - 1) / 2)) ? "1px solid #2a2a2a" : "none",
              display: "flex", alignItems: "flex-start", gap: 14,
            }}>
              <span style={{ width: 8, height: 8, background: "#c4ff00", flexShrink: 0, marginTop: 6 }}></span>
              <div>
                <div style={{ fontSize: isMobile ? 14 : 16, marginBottom: 4 }}>{a.title}</div>
                <div className="mono" style={{ fontSize: 10, color: "#a8a8a8" }}>{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, borderTop: "1px solid #2a2a2a" }}>
        <span className="tag">EDUCACIÓN</span>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column" }}>
          {edu.map((e, i) => (
            <li key={i} style={{ display: "grid", gridTemplateColumns: isMobile ? "72px 1fr" : "100px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid #2a2a2a" }}>
              <span className="mono" style={{ fontSize: 11, color: "#c4ff00" }}>{e.year}</span>
              <div>
                <div style={{ fontSize: isMobile ? 14 : 16 }}>{e.title}</div>
                <div className="mono" style={{ fontSize: 10, color: "#a8a8a8", marginTop: 4 }}>{e.org}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Speaker Events */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, borderTop: "1px solid #2a2a2a" }}>
        <span className="tag">SPEAKER / EVENTS</span>
        <h2 className="display" style={{ fontSize: isMobile ? 40 : 64, lineHeight: 0.9, marginTop: 14, marginBottom: 24 }}>ON STAGE.</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, border: "1px solid #2a2a2a" }}>
          {speakers.map((s, i) => (
            <div key={i} style={{
              padding: isMobile ? 14 : 20,
              borderRight: !isMobile && i % 2 === 0 ? "1px solid #2a2a2a" : "none",
              borderBottom: (isMobile ? i < speakers.length - 1 : Math.floor(i / 2) < Math.floor((speakers.length - 1) / 2)) ? "1px solid #2a2a2a" : "none",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span className="mono" style={{ fontSize: 11, color: "#c4ff00", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: isMobile ? 12 : 14, color: "#a8a8a8" }}>{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, background: "#c4ff00", color: "#0a0a0a", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
        <h2 className="display" style={{ fontSize: isMobile ? 36 : 56, lineHeight: 0.9 }}>WANT TO WORK?</h2>
        <button onClick={() => setRoute("contacto")} className="btn" style={{ background: "#0a0a0a", color: "#c4ff00", border: "2px solid #0a0a0a", padding: "14px 22px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: "0.12em", fontWeight: 600, cursor: "crosshair" }}>START A BRIEF →</button>
      </section>
    </article>
  );
}
window.About = About;
