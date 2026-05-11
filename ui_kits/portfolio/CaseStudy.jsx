/* global React */
function CaseStudy({ caseId, setRoute }) {
  const data = {
    altavoz: {
      n: "01", title: "ALTAVOZ.AI", kind: "LOCAL LLM PLATFORM", year: "2026", client: "Altavoz / Internal",
      summary: "Una plataforma para correr LLMs sobre hardware propio. Sin OpenAI, sin tokens fugados. Voz, texto, código.",
      stats: [{ n: "12×", l: "FASTER INFERENCE" }, { n: "0", l: "TOKENS LEAKED" }, { n: "180D", l: "DELIVERY" }],
      stack: ["Llama 3.1", "vLLM", "Postgres", "Next.js", "Tauri", "Whisper"],
      role: "Sole engineer + designer.",
    },
    fonsa: {
      n: "02", title: "FONSA / CLM", kind: "CONTRACT LIFECYCLE", year: "2025", client: "Fonsa Abogados",
      summary: "CLM hecho a medida para una firma de 40 abogados. Plantillas, redlines, firma, archivo, todo en un sistema.",
      stats: [{ n: "8×", l: "FASTER REDLINES" }, { n: "40", l: "USERS LIVE" }, { n: "120D", l: "DELIVERY" }],
      stack: ["Next.js", "Postgres", "Stripe", "Resend", "Y.js", "DocuSign"],
      role: "Lead engineer.",
    },
    raw: {
      n: "03", title: "RAW STUDIO", kind: "WEB · PORTFOLIO", year: "2025", client: "Raw Studio",
      summary: "Portfolio + CMS para un estudio de fotografía. Carga instantánea, 100 en Lighthouse, edición de contenido sin tocar código.",
      stats: [{ n: "2×", l: "LOAD SPEED" }, { n: "100", l: "LIGHTHOUSE" }, { n: "14D", l: "DELIVERY" }],
      stack: ["Astro", "React", "Sanity CMS", "Vercel"],
      role: "Sole developer + designer.",
    },
    krn: {
      n: "04", title: "KRN BOT", kind: "AI · RAG CHATBOT", year: "2025", client: "Karen Health",
      summary: "Chatbot RAG sobre 12k documentos internos. Respuestas precisas, fuentes citadas, cero alucinaciones en producción.",
      stats: [{ n: "12k", l: "DOCS INDEXED" }, { n: "94%", l: "ANSWER ACCURACY" }, { n: "45D", l: "DELIVERY" }],
      stack: ["OpenAI", "Pinecone", "FastAPI", "React", "PostgreSQL"],
      role: "Lead AI engineer.",
    },
    metric: {
      n: "05", title: "METRIC.UNO", kind: "WEB · ANALYTICS", year: "2024", client: "Metric S.A.",
      summary: "Dashboard analítico para un retailer. Ventas, stock e indicadores en tiempo real. Sin Excel, sin reuniones de reporte.",
      stats: [{ n: "3×", l: "LESS REPORTING TIME" }, { n: "6", l: "INTEGRATIONS" }, { n: "30D", l: "DELIVERY" }],
      stack: ["Next.js", "PostgreSQL", "Recharts", "Vercel"],
      role: "Sole developer.",
    },
    "audit-norte": {
      n: "06", title: "AUDIT / NORTE", kind: "AUDIT · STRATEGY", year: "2024", client: "Norte Bank",
      summary: "Stack review completo para un banco regional. 84 páginas de hallazgos, prioridades claras y roadmap ejecutable a 90 días.",
      stats: [{ n: "84", l: "PAGE REPORT" }, { n: "47", l: "FINDINGS" }, { n: "90D", l: "ROADMAP" }],
      stack: ["Stack Review", "Performance", "Security", "Architecture"],
      role: "Lead auditor.",
    },
    loop: {
      n: "07", title: "LOOP MOTION", kind: "MOTION · BRAND", year: "2024", client: "Loop",
      summary: "Sistema de motion para identidad de marca. Componentes animados, timing consistente, listo para producto y marketing.",
      stats: [{ n: "24", l: "COMPONENTS" }, { n: "4", l: "BRAND SYSTEMS" }, { n: "21D", l: "DELIVERY" }],
      stack: ["After Effects", "Lottie", "React", "GSAP"],
      role: "Motion designer + developer.",
    },
    tienda: {
      n: "08", title: "TIENDA / CRM", kind: "CRM · CUSTOM", year: "2024", client: "Tienda Real",
      summary: "CRM custom para una cadena de 18 tiendas físicas. Pipeline de ventas, reportes por sucursal y vista unificada de clientes.",
      stats: [{ n: "18", l: "STORES CONNECTED" }, { n: "3×", l: "FASTER REPORTING" }, { n: "60D", l: "DELIVERY" }],
      stack: ["Next.js", "Postgres", "Prisma", "Vercel"],
      role: "Lead engineer.",
    },
  }[caseId] || { n: "??", title: "PROJECT NOT FOUND", kind: "—", year: "—", client: "—", summary: "Click a project from /work.", stats: [], stack: [], role: "—" };

  const isMobile = window.useIsMobile();
  return (
    <article>
      {/* Hero */}
      <section style={{ padding: isMobile ? "32px 20px" : "64px 32px 48px", borderBottom: "1px solid #2a2a2a", position: "relative", overflow: "hidden" }}>
        {!isMobile && (
          <svg style={{ position: "absolute", top: -20, right: -20 }} width="240" height="240" viewBox="0 0 240 240">
            <line x1="140" y1="-20" x2="280" y2="160" stroke="#c4ff00" strokeWidth="2"/>
            <line x1="170" y1="-20" x2="310" y2="160" stroke="#c4ff00" strokeWidth="2"/>
          </svg>
        )}
        <button onClick={() => setRoute("projects")} className="mono" style={{
          background: "transparent", border: "none", color: "#a8a8a8", padding: 0, marginBottom: 20,
          fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.12em", cursor: "crosshair",
        }}>← / WORK</button>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
          <span className="tag">CASE / {data.n}</span>
          <span className="mono" style={{ fontSize: 12, color: "#a8a8a8" }}>{data.kind} · {data.year}</span>
        </div>
        <h1 className="display" style={{ fontSize: isMobile ? 48 : 144, lineHeight: 0.88 }}>{data.title}</h1>
        <p style={{ fontSize: isMobile ? 16 : 22, color: "#ededed", maxWidth: "60ch", marginTop: isMobile ? 20 : 32, lineHeight: 1.4 }}>{data.summary}</p>
      </section>

      {/* Big stats */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, background: "#c4ff00", color: "#0a0a0a" }}>
        <span className="mono" style={{ fontSize: 12, marginBottom: 20, display: "block" }}>FIGURES THAT MATTER</span>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 20 : 32 }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ borderTop: "2px solid #0a0a0a", paddingTop: 12 }}>
              <div className="display" style={{ fontSize: isMobile ? 64 : 96, lineHeight: 1 }}>{s.n}</div>
              <div className="mono" style={{ fontSize: 12, marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: isMobile ? 32 : 48 }}>
        <div>
          <span className="tag">THE BRIEF</span>
          <h2 className="display" style={{ fontSize: isMobile ? 36 : 56, lineHeight: 0.9, marginTop: 14, marginBottom: 20 }}>WHAT THEY <span className="hl">NEEDED.</span></h2>
          <p style={{ fontSize: isMobile ? 15 : 18, color: "#ededed", lineHeight: 1.55 }}>
            {data.client} llegó con un problema concreto: un proceso atascado, un equipo que perdía horas en tareas manuales, y una pila de software que se había vuelto el cuello de botella.
          </p>
          <p style={{ fontSize: isMobile ? 15 : 18, color: "#a8a8a8", lineHeight: 1.55, marginTop: 16 }}>
            La conversación inicial duró 90 minutos. Salí con un brief de una página y un diagrama de servicios en una servilleta. Tres semanas después había un prototipo funcionando en sus máquinas.
          </p>

          <span className="tag" style={{ marginTop: 40, display: "inline-block" }}>HOW IT SHIPPED</span>
          <h2 className="display" style={{ fontSize: isMobile ? 36 : 56, lineHeight: 0.9, marginTop: 14, marginBottom: 20 }}>THE BUILD.</h2>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 24 }}>
            {["DISCOVER", "BUILD", "DEPLOY"].map((step, i) => (
              <li key={step}>
                <div className="display" style={{ fontSize: isMobile ? 40 : 56, color: "#c4ff00", lineHeight: 1 }}>0{i+1}</div>
                <div className="mono" style={{ fontSize: 11, color: "#a8a8a8", marginTop: 4 }}>{step}</div>
                <p style={{ fontSize: 14, color: "#a8a8a8", marginTop: 8, lineHeight: 1.45 }}>
                  {i === 0 ? "Workshops, mapping, finding the real bottleneck — not the one they think they have." :
                   i === 1 ? "Iterative builds. Weekly demos. No black boxes, no Figma theater." :
                   "Hand-off, training, monitoring. Ship a system, not a project."}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <aside>
          <div style={{ border: "2px solid #ededed", padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, color: "#c4ff00", marginBottom: 14 }}>CLIENT</div>
            <div style={{ fontSize: 16, marginBottom: 24 }}>{data.client}</div>
            <div className="mono" style={{ fontSize: 11, color: "#c4ff00", marginBottom: 14 }}>ROLE</div>
            <div style={{ fontSize: 16, marginBottom: 24 }}>{data.role}</div>
            <div className="mono" style={{ fontSize: 11, color: "#c4ff00", marginBottom: 14 }}>STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {data.stack.map(s => (
                <span key={s} className="mono" style={{
                  border: "1px solid #ededed", padding: "5px 9px 6px", fontSize: 10, letterSpacing: "0.1em",
                  fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase",
                }}>{s}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Pull quote */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, borderTop: "1px solid #2a2a2a" }}>
        <div className="display" style={{ fontSize: isMobile ? 36 : 56, color: "#c4ff00", lineHeight: 1, marginBottom: 12 }}>"</div>
        <blockquote className="display" style={{ fontSize: isMobile ? 32 : 64, lineHeight: 1, maxWidth: "20ch", margin: 0 }}>
          THIRTY DAYS IN, IT JUST <span className="hl">WORKED.</span>
        </blockquote>
        <div className="mono" style={{ fontSize: 12, color: "#a8a8a8", marginTop: 20 }}>— {data.client.toUpperCase()}, 2025</div>
      </section>

      {/* Next */}
      <section style={{ padding: isMobile ? "24px 20px" : 32, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #2a2a2a", flexWrap: "wrap", gap: 16 }}>
        <button onClick={() => setRoute("projects")} className="mono" style={{ background: "transparent", border: "none", color: "#ededed", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.12em", cursor: "crosshair" }}>← ALL WORK</button>
        {!isMobile && <span className="display" style={{ fontSize: 24, color: "#6b6b6b" }}>{data.n} / 12</span>}
        <button onClick={() => setRoute("contacto")} className="btn" style={window.btnPrimary}>HIRE ME →</button>
      </section>
    </article>
  );
}
window.CaseStudy = CaseStudy;
