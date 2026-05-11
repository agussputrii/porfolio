/* global React */
function Contact() {
  const isMobile = window.useIsMobile();
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", services: [], brief: "" });
  const serviceOptions = ["WEB & PRODUCT", "CHATBOTS / AGENTS", "LOCAL AI", "AUDIT", "CRM / CLM", "3D / MOTION"];

  const toggleService = (svc) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter(s => s !== svc)
        : [...prev.services, svc]
    }));
  };

  if (sent) {
    return (
      <section style={{ padding: isMobile ? "32px 20px" : 32, minHeight: 480, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span className="tag">/ RECEIVED</span>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 128, lineHeight: 0.9, marginTop: 18 }}>BRIEF <span className="hl">LOGGED.</span></h1>
        <p style={{ fontSize: isMobile ? 16 : 22, color: "#a8a8a8", marginTop: 24, maxWidth: "50ch" }}>
          Te escribo en menos de 24h. Si no, escribe a hola@genlayers.ai — el formulario puede haber tenido un mal dia.
        </p>
        <div style={{ marginTop: 32 }}>
          <button onClick={() => { setSent(false); setForm({ name: "", email: "", services: [], brief: "" }); }} className="btn" style={window.btnGhost}>SEND ANOTHER</button>
        </div>
      </section>
    );
  }

  return (
    <article>
      <section style={{ padding: isMobile ? "40px 20px 24px" : "64px 32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <span className="tag">/ CONTACT</span>
          {!isMobile && <span className="mono" style={{ fontSize: 12, color: "#a8a8a8" }}>§ 05 / SIGNAL</span>}
        </div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 128, lineHeight: 0.88 }}>START A <span className="hl">BRIEF.</span></h1>
        <p style={{ fontSize: isMobile ? 15 : 20, color: "#a8a8a8", marginTop: 20, maxWidth: "60ch" }}>
          Cuentame el problema, no la solucion. Lo demas lo descubrimos juntos.
        </p>
      </section>

      <section style={{ padding: isMobile ? "20px 20px" : 32, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr", gap: isMobile ? 32 : 48, alignItems: "start" }}>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label className="mono" style={lbl}>NAME / REQUIRED</label>
            <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required className="input" style={inp} placeholder="Tu nombre"/>
          </div>
          <div>
            <label className="mono" style={lbl}>EMAIL / REQUIRED</label>
            <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} required type="email" className="input" style={inp} placeholder="hola@example.com"/>
          </div>
          <div>
            <label className="mono" style={lbl}>SERVICES / MULTI-SELECT</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "2px solid #ededed" }}>
              {serviceOptions.map((svc, i) => {
                const selected = form.services.includes(svc);
                return (
                  <button
                    type="button"
                    key={svc}
                    onClick={() => toggleService(svc)}
                    className="mono"
                    style={{
                      padding: "12px 10px",
                      background: selected ? "#c4ff00" : "transparent",
                      color: selected ? "#0a0a0a" : "#ededed",
                      border: "none",
                      borderRight: (i % 2 === 0) ? "1px solid #ededed" : "none",
                      borderBottom: i < serviceOptions.length - 2 ? "1px solid #ededed" : "none",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: isMobile ? 10 : 11,
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      cursor: "crosshair",
                      textAlign: "left",
                    }}
                  >
                    {selected ? "[X] " : "[ ] "}{svc}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="mono" style={lbl}>BRIEF / WHAT'S BROKEN?</label>
            <textarea value={form.brief} onChange={e => setForm({...form, brief: e.target.value})} rows="6" className="input" style={{...inp, resize: "vertical"}} placeholder="El equipo pierde 6h/sem en…"/>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>
            <button type="submit" className="btn" style={window.btnPrimary}>SEND BRIEF →</button>
          </div>
        </form>

        <aside>
          <div style={{ border: "2px solid #ededed", padding: 24, marginBottom: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: "#c4ff00", marginBottom: 14 }}>DIRECT</div>
            <div style={{ fontSize: isMobile ? 14 : 18, fontFamily: "'JetBrains Mono', monospace" }}>hola@genlayers.ai</div>
          </div>
          <div style={{ background: "#c4ff00", color: "#0a0a0a", padding: 24 }}>
            <div className="mono" style={{ fontSize: 11, marginBottom: 14 }}>RESPONSE TIME</div>
            <div className="display" style={{ fontSize: isMobile ? 40 : 56, lineHeight: 1 }}>&lt;24H</div>
            <p style={{ fontSize: 13, marginTop: 12, lineHeight: 1.4 }}>De lunes a viernes. Fines de semana, off.</p>
          </div>
          <div style={{ border: "2px solid #ededed", padding: 24, marginTop: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: "#c4ff00", marginBottom: 14 }}>BASED IN</div>
            <div style={{ fontSize: 16 }}>UTC-3 · remote-first</div>
          </div>
        </aside>
      </section>
    </article>
  );
}

const lbl = { display: "block", marginBottom: 8, fontSize: 11, color: "#c4ff00", letterSpacing: "0.12em" };
const inp = {
  background: "transparent", border: "2px solid #ededed", color: "#ededed",
  fontFamily: "'Inter', sans-serif", fontSize: 16, padding: "12px 14px",
  borderRadius: 0, width: "100%", outline: "none", boxSizing: "border-box",
};
window.Contact = Contact;