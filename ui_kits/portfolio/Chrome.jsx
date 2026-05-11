/* global React */
const { useState, useEffect } = React;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return isMobile;
}

function Mark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 14, height: 14, background: "#c4ff00" }}></div>
      <span className="display" style={{ fontSize: 18, color: "#ededed", letterSpacing: "-0.01em" }}>DEEP</span>
      <span className="display" style={{ fontSize: 18, color: "#c4ff00", letterSpacing: "-0.01em" }}>LAYERS</span>
      <span className="display" style={{ fontSize: 18, color: "#6b6b6b", letterSpacing: "-0.01em" }}> AI</span>
    </div>
  );
}

function Topbar({ route, setRoute }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const items = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "work", label: "WORK" },
    { id: "servicios", label: "SERVICIOS" },
    { id: "precios", label: "PRECIOS" },
    { id: "catalogo", label: "CATALOGO" },
    { id: "suscripciones", label: "SUSCRIPCIONES" },
    { id: "contacto", label: "CONTACTO" },
  ];

  const handleNav = (id) => { setRoute(id); setOpen(false); };

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#0a0a0a", borderBottom: "1px solid #2a2a2a" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px" }}>
        <button onClick={() => handleNav("home")} style={{ background: "none", border: "none", cursor: "crosshair", padding: 0 }}>
          <Mark />
        </button>

        {isMobile ? (
          <button onClick={() => setOpen(!open)} className="mono" style={{
            background: "none", border: "1px solid #2a2a2a", color: "#ededed",
            padding: "8px 14px", fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, cursor: "crosshair", letterSpacing: "0.1em",
          }}>
            {open ? "✕" : "≡ MENU"}
          </button>
        ) : (
          <nav style={{ display: "flex", gap: 4 }}>
            {items.map(it => (
              <button key={it.id} onClick={() => handleNav(it.id)} className="mono"
                style={{
                  background: route === it.id ? "#c4ff00" : "transparent",
                  color: route === it.id ? "#0a0a0a" : "#ededed",
                  border: "none", padding: "8px 12px", fontSize: 12, cursor: "crosshair",
                  fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase",
                  letterSpacing: "0.12em", fontWeight: 600,
                }}>
                {it.label}
              </button>
            ))}
          </nav>
        )}

        {!isMobile && <span className="mono" style={{ fontSize: 11, color: "#a8a8a8" }}>FILE 001 / DEEPLAYERS 2026</span>}
      </div>

      {isMobile && open && (
        <nav style={{ borderTop: "1px solid #2a2a2a", display: "flex", flexDirection: "column" }}>
          {items.map(it => (
            <button key={it.id} onClick={() => handleNav(it.id)} className="mono"
              style={{
                background: route === it.id ? "#c4ff00" : "transparent",
                color: route === it.id ? "#0a0a0a" : "#ededed",
                border: "none", borderBottom: "1px solid #2a2a2a",
                padding: "16px 24px", fontSize: 13, cursor: "crosshair",
                fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase",
                letterSpacing: "0.12em", fontWeight: 600, textAlign: "left",
              }}>
              {it.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer({ setRoute }) {
  const isMobile = useIsMobile();
  return (
    <footer style={{ borderTop: "1px solid #2a2a2a", padding: isMobile ? "32px 20px" : "32px", marginTop: 80 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr",
        gap: 32,
        marginBottom: 48,
      }}>
        <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
          <div className="display" style={{ fontSize: isMobile ? 32 : 40, lineHeight: 0.9 }}>READY?<br/><span className="hl">SHIP IT.</span></div>
          {!isMobile && (
            <p style={{ color: "#a8a8a8", marginTop: 16, maxWidth: "32ch" }}>
              Construyo software que funciona. Si necesitas web, IA local, auditoría o un CRM/CLM hecho a medida — escríbeme.
            </p>
          )}
        </div>
        <div>
          <div className="mono" style={{ color: "#c4ff00", marginBottom: 12, fontSize: 11 }}>SITE</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {[["home","Home"],["about","About"],["work","Work"],["servicios","Servicios"],["precios","Precios"],["contacto","Contacto"]].map(([id,lbl]) => (
              <li key={id}><a onClick={() => setRoute(id)} style={navLinkStyle}>{lbl}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mono" style={{ color: "#c4ff00", marginBottom: 12, fontSize: 11 }}>SERVICES</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: "#a8a8a8", fontSize: 14 }}>
            <li>Web &amp; product</li>
            <li>Chatbots</li>
            <li>Local AI</li>
            <li>Auditoría</li>
            <li>CRM / CLM</li>
          </ul>
        </div>
        <div>
          <div className="mono" style={{ color: "#c4ff00", marginBottom: 12, fontSize: 11 }}>CONTACT</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, color: "#a8a8a8", fontSize: 14 }}>
            <li>github / →</li>
            <li>linkedin / →</li>
            <li>agussputrii@gmail.com</li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #2a2a2a", paddingTop: 20 }}>
        <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>© 2026 / DEEPLAYERS AI</span>
        <span className="mono" style={{ fontSize: 11, color: "#6b6b6b" }}>END OF FILE</span>
      </div>
    </footer>
  );
}

const navLinkStyle = {
  color: "#ededed", textDecoration: "none", cursor: "crosshair",
  fontSize: 14, borderBottom: "1px solid transparent",
};

window.useIsMobile = useIsMobile;
window.Mark = Mark;
window.Topbar = Topbar;
window.Footer = Footer;
