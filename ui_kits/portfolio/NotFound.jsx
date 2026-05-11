/* global React */
function NotFound({ setRoute }) {
  return (
    <section style={{ padding: 32, minHeight: 600, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <svg style={{ position: "absolute", top: 40, right: -80, opacity: 0.6 }} width="500" height="500" viewBox="0 0 500 500">
        <line x1="200" y1="-50" x2="600" y2="400" stroke="#c4ff00" strokeWidth="2"/>
        <line x1="240" y1="-50" x2="640" y2="400" stroke="#c4ff00" strokeWidth="2"/>
        <line x1="280" y1="-50" x2="680" y2="400" stroke="#c4ff00" strokeWidth="2"/>
        <line x1="320" y1="-50" x2="720" y2="400" stroke="#c4ff00" strokeWidth="2"/>
      </svg>
      <span className="tag">/ ERROR</span>
      <h1 className="display" style={{ fontSize: 280, lineHeight: 0.85, marginTop: 24 }}>4<span className="hl">0</span>4.</h1>
      <p style={{ fontSize: 22, color: "#a8a8a8", marginTop: 24, maxWidth: "50ch" }}>
        File not found. La página que buscas no existe — o yo aún no la he construido.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
        <button onClick={() => setRoute("home")} className="btn" style={window.btnPrimary}>← BACK TO INDEX</button>
        <button onClick={() => setRoute("contact")} className="btn" style={window.btnGhost}>REPORT IT</button>
      </div>
      <div className="mono" style={{ fontSize: 11, color: "#6b6b6b", marginTop: 80 }}>STATUS / 404 · ROUTE / UNKNOWN · TIMESTAMP / {new Date().toISOString()}</div>
    </section>
  );
}
window.NotFound = NotFound;
