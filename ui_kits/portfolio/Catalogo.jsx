/* global React */
const { useState } = React;

const products = [
  {
    id: "p01",
    name: "LANDING PAGE PRO",
    price: 350,
    category: "WEB",
    desc: "One-page de conversion. SEO, speed, diseno brutal.",
    acid: false,
  },
  {
    id: "p02",
    name: "WEB APP STARTER",
    price: 600,
    category: "WEB",
    desc: "React app. Auth, dashboard base, API ready.",
    acid: false,
  },
  {
    id: "p03",
    name: "CHATBOT WHATSAPP",
    price: 200,
    category: "CHATBOT",
    desc: "Bot RAG sobre tus datos. WhatsApp o web.",
    acid: true,
  },
  {
    id: "p04",
    name: "CRM STARTER",
    price: 400,
    category: "CRM",
    desc: "Pipeline de ventas. Leads, deals, informes.",
    acid: false,
  },
  {
    id: "p05",
    name: "AUDIT TECNICO",
    price: 300,
    category: "AUDIT",
    desc: "Stack completo. Reporte de 20 paginas.",
    acid: false,
  },
  {
    id: "p06",
    name: "MOTION KIT",
    price: 250,
    category: "MOTION",
    desc: "Sistema de animacion. Componentes, timing.",
    acid: false,
  },
];

const categories = ["ALL", "WEB", "CHATBOT", "CRM", "AUDIT", "MOTION"];

function Catalogo() {
  const isMobile = window.useIsMobile();
  const [filter, setFilter] = useState("ALL");

  const filtered = filter === "ALL" ? products : products.filter(p => p.category === filter);
  const cols = isMobile ? 2 : 3;

  return (
    <div style={{ padding: isMobile ? "40px 20px" : "64px 32px" }}>
      <div style={{ marginBottom: 48 }}>
        <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 16 }}>§ 03 / CATALOGO</div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 72, lineHeight: 0.9, marginBottom: 24 }}>
          PRODUCTOS<br /><span className="hl">LISTOS.</span>
        </h1>
        <p style={{ color: "#a8a8a8", maxWidth: "48ch", fontSize: 16 }}>
          Entregables con alcance claro. Elegi, pedi, recibe.
        </p>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="mono"
            style={{
              padding: "8px 16px",
              background: filter === cat ? "#c4ff00" : "transparent",
              color: filter === cat ? "#0a0a0a" : "#ededed",
              border: "1px solid",
              borderColor: filter === cat ? "#c4ff00" : "#2a2a2a",
              fontSize: 11,
              cursor: "crosshair",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.1em",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: 0, border: "1px solid #2a2a2a" }}>
        {filtered.map((p, i) => (
          <div
            key={p.id}
            style={{
              padding: isMobile ? 16 : 32,
              borderRight: i % cols !== cols - 1 ? "1px solid #2a2a2a" : "none",
              borderBottom: Math.floor(i / cols) < Math.ceil(filtered.length / cols) - 1 ? "1px solid #2a2a2a" : "none",
              background: p.acid ? "#c4ff00" : "transparent",
              color: p.acid ? "#0a0a0a" : "#ededed",
            }}
          >
            <div style={{
              width: "100%",
              aspectRatio: "4/3",
              background: p.acid ? "#0a0a0a" : "#111",
              marginBottom: 16,
              overflow: "hidden",
              position: "relative",
            }}>
              {p.id === "p01" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#111"/>
                  <rect x="20" y="16" width="200" height="148" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="20" y="16" width="200" height="24" rx="4" fill="#222"/>
                  <circle cx="34" cy="28" r="4" fill="#c4ff00" opacity="0.4"/>
                  <circle cx="46" cy="28" r="4" fill="#2a2a2a"/>
                  <circle cx="58" cy="28" r="4" fill="#2a2a2a"/>
                  <rect x="36" y="56" width="120" height="10" rx="2" fill="#c4ff00" opacity="0.9"/>
                  <rect x="36" y="72" width="80" height="6" rx="2" fill="#3a3a3a"/>
                  <rect x="36" y="84" width="100" height="6" rx="2" fill="#2a2a2a"/>
                  <rect x="36" y="108" width="56" height="18" rx="2" fill="#c4ff00"/>
                  <rect x="100" y="108" width="56" height="18" rx="2" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1"/>
                </svg>
              )}
              {p.id === "p02" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#111"/>
                  <rect x="0" y="0" width="56" height="180" fill="#0d0d0d"/>
                  <rect x="8" y="16" width="40" height="8" rx="2" fill="#c4ff00" opacity="0.8"/>
                  <rect x="8" y="36" width="40" height="6" rx="2" fill="#2a2a2a"/>
                  <rect x="8" y="48" width="40" height="6" rx="2" fill="#2a2a2a"/>
                  <rect x="8" y="60" width="40" height="6" rx="2" fill="#2a2a2a"/>
                  <rect x="8" y="72" width="40" height="6" rx="2" fill="#c4ff00" opacity="0.3"/>
                  <rect x="64" y="12" width="80" height="40" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="72" y="20" width="30" height="6" rx="1" fill="#c4ff00" opacity="0.7"/>
                  <rect x="72" y="32" width="50" height="10" rx="1" fill="#c4ff00"/>
                  <rect x="152" y="12" width="76" height="40" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="160" y="20" width="30" height="6" rx="1" fill="#3a3a3a"/>
                  <rect x="160" y="32" width="40" height="10" rx="1" fill="#ededed" opacity="0.15"/>
                  <rect x="64" y="64" width="164" height="104" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="72" y="74" width="60" height="6" rx="1" fill="#2a2a2a"/>
                  <rect x="72" y="88" width="148" height="1" fill="#2a2a2a"/>
                  <rect x="72" y="98" width="30" height="6" rx="1" fill="#3a3a3a"/>
                  <rect x="72" y="110" width="30" height="6" rx="1" fill="#3a3a3a"/>
                  <rect x="72" y="122" width="30" height="6" rx="1" fill="#3a3a3a"/>
                  <rect x="110" y="98" width="40" height="6" rx="1" fill="#c4ff00" opacity="0.6"/>
                  <rect x="110" y="110" width="30" height="6" rx="1" fill="#2a2a2a"/>
                  <rect x="110" y="122" width="50" height="6" rx="1" fill="#2a2a2a"/>
                </svg>
              )}
              {p.id === "p03" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#0a0a0a"/>
                  <rect x="20" y="20" width="140" height="36" rx="18" fill="#1a1a1a"/>
                  <rect x="32" y="30" width="100" height="6" rx="3" fill="#2a2a2a"/>
                  <rect x="32" y="40" width="70" height="4" rx="2" fill="#2a2a2a" opacity="0.5"/>
                  <rect x="80" y="68" width="140" height="36" rx="18" fill="#c4ff00"/>
                  <rect x="92" y="78" width="90" height="6" rx="3" fill="#0a0a0a" opacity="0.6"/>
                  <rect x="92" y="88" width="60" height="4" rx="2" fill="#0a0a0a" opacity="0.3"/>
                  <rect x="20" y="116" width="140" height="36" rx="18" fill="#1a1a1a"/>
                  <rect x="32" y="126" width="110" height="6" rx="3" fill="#2a2a2a"/>
                  <rect x="32" y="136" width="80" height="4" rx="2" fill="#2a2a2a" opacity="0.5"/>
                  <circle cx="212" cy="38" r="14" fill="#25d366" opacity="0.9"/>
                  <text x="212" y="43" textAnchor="middle" fill="white" fontSize="14">✓</text>
                </svg>
              )}
              {p.id === "p04" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#111"/>
                  <rect x="12" y="12" width="52" height="156" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="18" y="20" width="40" height="8" rx="2" fill="#c4ff00" opacity="0.6"/>
                  <rect x="18" y="36" width="40" height="28" rx="2" fill="#2a2a2a"/>
                  <rect x="18" y="70" width="40" height="28" rx="2" fill="#2a2a2a"/>
                  <rect x="18" y="104" width="40" height="28" rx="2" fill="#c4ff00" opacity="0.2"/>
                  <rect x="72" y="12" width="52" height="156" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="78" y="20" width="40" height="8" rx="2" fill="#c4ff00" opacity="0.6"/>
                  <rect x="78" y="36" width="40" height="28" rx="2" fill="#c4ff00" opacity="0.9"/>
                  <rect x="78" y="70" width="40" height="28" rx="2" fill="#2a2a2a"/>
                  <rect x="132" y="12" width="52" height="156" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="138" y="20" width="40" height="8" rx="2" fill="#c4ff00" opacity="0.6"/>
                  <rect x="138" y="36" width="40" height="28" rx="2" fill="#2a2a2a"/>
                  <rect x="192" y="12" width="36" height="156" rx="3" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="198" y="20" width="24" height="8" rx="2" fill="#c4ff00" opacity="0.6"/>
                  <rect x="198" y="36" width="24" height="28" rx="2" fill="#2a2a2a" opacity="0.4"/>
                </svg>
              )}
              {p.id === "p05" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#111"/>
                  <rect x="20" y="16" width="200" height="148" rx="3" fill="#0d0d0d" stroke="#2a2a2a" strokeWidth="1"/>
                  <rect x="28" y="28" width="60" height="6" rx="2" fill="#c4ff00" opacity="0.8"/>
                  <rect x="28" y="48" width="184" height="1" fill="#2a2a2a"/>
                  <rect x="28" y="60" width="12" height="8" rx="1" fill="#c4ff00" opacity="0.9"/>
                  <rect x="46" y="62" width="130" height="4" rx="1" fill="#3a3a3a"/>
                  <rect x="28" y="76" width="12" height="8" rx="1" fill="#ff4444" opacity="0.7"/>
                  <rect x="46" y="78" width="100" height="4" rx="1" fill="#3a3a3a"/>
                  <rect x="28" y="92" width="12" height="8" rx="1" fill="#c4ff00" opacity="0.9"/>
                  <rect x="46" y="94" width="150" height="4" rx="1" fill="#3a3a3a"/>
                  <rect x="28" y="108" width="12" height="8" rx="1" fill="#c4ff00" opacity="0.9"/>
                  <rect x="46" y="110" width="120" height="4" rx="1" fill="#3a3a3a"/>
                  <rect x="28" y="124" width="12" height="8" rx="1" fill="#ff4444" opacity="0.7"/>
                  <rect x="46" y="126" width="80" height="4" rx="1" fill="#3a3a3a"/>
                  <rect x="28" y="140" width="12" height="8" rx="1" fill="#c4ff00" opacity="0.9"/>
                  <rect x="46" y="142" width="140" height="4" rx="1" fill="#3a3a3a"/>
                </svg>
              )}
              {p.id === "p06" && (
                <svg width="100%" height="100%" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid slice">
                  <rect width="240" height="180" fill="#111"/>
                  <path d="M0 90 C30 60, 60 120, 90 90 S150 60, 180 90 S210 120, 240 90" stroke="#c4ff00" strokeWidth="2.5" fill="none" opacity="0.9"/>
                  <path d="M0 110 C30 80, 60 140, 90 110 S150 80, 180 110 S210 140, 240 110" stroke="#c4ff00" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <path d="M0 70 C30 40, 60 100, 90 70 S150 40, 180 70 S210 100, 240 70" stroke="#c4ff00" strokeWidth="1" fill="none" opacity="0.2"/>
                  <circle cx="90" cy="90" r="6" fill="#c4ff00"/>
                  <circle cx="180" cy="90" r="6" fill="#c4ff00"/>
                  <circle cx="135" cy="60" r="4" fill="#c4ff00" opacity="0.6"/>
                  <line x1="0" y1="90" x2="240" y2="90" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4 4"/>
                </svg>
              )}
            </div>

            <span className="mono" style={{
              fontSize: 10,
              padding: "2px 6px",
              border: `1px solid ${p.acid ? "#0a0a0a" : "#2a2a2a"}`,
              letterSpacing: "0.1em",
              display: "inline-block",
              marginBottom: 8,
            }}>
              {p.category}
            </span>

            <h2 className="display" style={{ fontSize: 20, lineHeight: 1.1, marginBottom: 8 }}>{p.name}</h2>
            <p style={{ fontSize: 13, marginBottom: 16, opacity: 0.8 }}>{p.desc}</p>
            <div className="display" style={{ fontSize: 32, color: p.acid ? "#0a0a0a" : "#c4ff00" }}>
              {p.price} <span style={{ fontSize: 14 }}>USD</span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: 64, textAlign: "center", border: "1px solid #2a2a2a" }}>
          <div className="display" style={{ fontSize: 32, color: "#6b6b6b" }}>SIN RESULTADOS</div>
        </div>
      )}
    </div>
  );
}

window.Catalogo = Catalogo;