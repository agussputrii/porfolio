/* global React */

const services = [
  { code: "01", title: "WEB & PRODUCT", desc: "Marketing sites, web apps, product UI. Hand-coded, fast, accesibles. Zero bloat.", tags: ["React", "Astro", "Landing"], acid: false },
  { code: "02", title: "CHATBOTS / AGENTS", desc: "WhatsApp + Web. RAGbasico incluido. Ventas, soporte, turnos.", tags: ["WhatsApp", "Web", "RAG"], acid: true },
  { code: "03", title: "LOCAL AI", desc: "LLMs on-prem. Llama, Mistral, Whisper en tu hardware. Sin datos afuera.", tags: ["Llama", "vLLM", "Whisper"], acid: false },
  { code: "04", title: "AUDIT", desc: "Stack review, code health, performance. Reporte de 20 paginas que podes actuar.", tags: ["Stack", "Performance", "Security"], acid: false },
  { code: "05", title: "CRM / CLM", desc: "Pipeline de ventas. Leads, deals, contratos — bajo tu control.", tags: ["Pipelines", "Contracts"], acid: false },
  { code: "06", title: "3D / MOTION", desc: "Visual systems para las partes ruidosas de tu producto.", tags: ["3D", "Motion", "Brand"], acid: false },
];

function Servicios() {
  const isMobile = window.useIsMobile();
  return (
    <div style={{ padding: isMobile ? "40px 20px" : "64px 32px" }}>
      <div style={{ marginBottom: 40 }}>
        <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 16 }}>§ 01 / SERVICIOS</div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 72, lineHeight: 0.9, marginBottom: 20 }}>LO QUE<br /><span className="hl">CONSTRUYO.</span></h1>
        <p style={{ color: "#a8a8a8", maxWidth: "48ch", fontSize: 16 }}>Seis areas. Cada una con un alcance claro y un precio fijo. No hay sorpresas.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 0, border: "1px solid #2a2a2a" }}>
        {services.map((s, i) => (
          <div key={s.code} style={{
            padding: isMobile ? "20px" : 32,
            borderRight: isMobile ? "none" : (i % 3 !== 2 ? "1px solid #2a2a2a" : "none"),
            borderBottom: isMobile ? "1px solid #2a2a2a" : (i < 3 ? "1px solid #2a2a2a" : "none"),
            background: s.acid ? "#c4ff00" : "transparent",
            color: s.acid ? "#0a0a0a" : "#ededed",
          }}>
            <div className="mono" style={{ fontSize: 11, marginBottom: 8, opacity: 0.6 }}>{s.code}</div>
            <h2 className="display" style={{ fontSize: isMobile ? 20 : 24, lineHeight: 1, marginBottom: 10 }}>{s.title}</h2>
            <p style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 14, opacity: s.acid ? 0.8 : 1 }}>{s.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {s.tags.map(t => (
                <span key={t} className="mono" style={{ fontSize: 10, padding: "4px 8px", border: `1px solid ${s.acid ? "#0a0a0a" : "#2a2a2a"}`, letterSpacing: "0.1em" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, padding: isMobile ? 20 : 32, border: "2px solid #c4ff00", background: "#0a0a0a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 8 }}>CHATBOT ADDON</div>
            <h3 className="display" style={{ fontSize: isMobile ? 24 : 32 }}>WHATSAPP + WEB</h3>
            <p style={{ color: "#a8a8a8", fontSize: 14 }}>50 USD — RAG basico sobre tus datos. Se agrega a cualquier pack.</p>
          </div>
          <div className="display" style={{ fontSize: isMobile ? 48 : 64, color: "#c4ff00" }}>50<span style={{ fontSize: 20 }}> USD</span></div>
        </div>
      </div>
    </div>
  );
}

window.Servicios = Servicios;