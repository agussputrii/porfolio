/* global React */

const pricingTiers = [
  { id: "24h", label: "24 HORAS", price: 600, delivery: "24 horas", desc: "Urgente. Lo necesitas ayer.", highlight: false },
  { id: "3d", label: "3 DIAS", price: 400, delivery: "3 dias habiles", desc: "Rush. Proyecto con fecha fija.", highlight: true },
  { id: "1w", label: "1 SEMANA", price: 350, delivery: "7 dias habiles", desc: "Estandar. Calidad sin apuro.", highlight: false },
  { id: "spa", label: "SPA / SINGLE PAGE", price: 250, delivery: "7 dias habiles", desc: "One-pager. Landing o presentacion.", highlight: false },
];

function Precios() {
  const isMobile = window.useIsMobile();
  return (
    <div style={{ padding: isMobile ? "40px 20px" : "64px 32px" }}>
      <div style={{ marginBottom: 40 }}>
        <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 16 }}>§ 02 / PRECIOS</div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 72, lineHeight: 0.9, marginBottom: 20 }}>CUANTO<br /><span className="hl">CUESTA.</span></h1>
        <p style={{ color: "#a8a8a8", maxWidth: "48ch", fontSize: 16 }}>Precio fijo por tiempo de entrega. Si para mi se puede negociar.</p>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div className="mono" style={{ color: "#a8a8a8", fontSize: 11, marginBottom: 16 }}>ENTREGA + PAGINA WEB</div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: 0, border: "1px solid #2a2a2a" }}>
          {pricingTiers.map((t, i) => (
            <div key={t.id} style={{
              padding: isMobile ? 16 : 24,
              borderRight: isMobile ? (i % 2 === 0 ? "1px solid #2a2a2a" : "none") : (i < 3 ? "1px solid #2a2a2a" : "none"),
              borderBottom: isMobile && i < 2 ? "1px solid #2a2a2a" : "none",
              background: t.highlight ? "#c4ff00" : "transparent",
              color: t.highlight ? "#0a0a0a" : "#ededed",
            }}>
              <div className="mono" style={{ fontSize: 10, marginBottom: 8, opacity: 0.6 }}>{t.delivery}</div>
              <h2 className="display" style={{ fontSize: isMobile ? 14 : 20, lineHeight: 1, marginBottom: 6 }}>{t.label}</h2>
              <div className="display" style={{ fontSize: isMobile ? 28 : 40, marginBottom: 6 }}>{t.price} <span style={{ fontSize: 14 }}>USD</span></div>
              <p style={{ fontSize: 11, opacity: 0.8 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: 0, border: "1px solid #2a2a2a", marginBottom: 32 }}>
        <div style={{ padding: isMobile ? 20 : 32, borderRight: isMobile ? "none" : "1px solid #2a2a2a", borderBottom: isMobile ? "1px solid #2a2a2a" : "none" }}>
          <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 8 }}>ADD TO ANY PACKAGE</div>
          <h2 className="display" style={{ fontSize: isMobile ? 24 : 32, marginBottom: 8 }}>CHATBOT</h2>
          <p style={{ color: "#a8a8a8", fontSize: 14 }}>WhatsApp o Web. RAG basico sobre tus datos. Se agrega a cualquier pack de arriba.</p>
        </div>
        <div style={{ padding: isMobile ? 20 : 32, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8, background: "#0a0a0a" }}>
          <div className="display" style={{ fontSize: isMobile ? 40 : 48, color: "#c4ff00" }}>+50</div>
          <div className="mono" style={{ fontSize: 11, color: "#a8a8a8" }}>USD</div>
        </div>
      </div>

      <div style={{ padding: isMobile ? 20 : 32, border: "2px solid #c4ff00", background: "linear-gradient(135deg, #0a0a0a 0%, #141414 100%)", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 8 }}>PAQUETE ESPECIAL</div>
            <h3 className="display" style={{ fontSize: isMobile ? 28 : 40 }}>PAGINA + CHATBOT</h3>
            <p style={{ color: "#a8a8a8", fontSize: 14 }}>Los dos juntos. Discount aplicado.</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="display" style={{ fontSize: isMobile ? 36 : 48, color: "#c4ff00" }}>400<span style={{ fontSize: 18 }}> USD</span></div>
            <div className="mono" style={{ fontSize: 10, color: "#a8a8a8", textDecoration: "line-through" }}>ahorras 50 usd</div>
          </div>
        </div>
      </div>

      <div style={{ padding: isMobile ? 20 : 32, border: "1px solid #2a2a2a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div>
            <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 8 }}>SOLO CHATBOT</div>
            <h3 className="display" style={{ fontSize: isMobile ? 24 : 32 }}>WHATSAPP + WEB</h3>
            <p style={{ color: "#a8a8a8", fontSize: 14 }}>Bot independiente. Sin pagina. RAG basico.</p>
          </div>
          <div className="display" style={{ fontSize: isMobile ? 36 : 48, color: "#c4ff00" }}>50<span style={{ fontSize: 18 }}> USD</span></div>
        </div>
      </div>
    </div>
  );
}

window.Precios = Precios;