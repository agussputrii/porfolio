/* global React */
const { useState } = React;

const plans = [
  {
    id: "mantenimiento",
    name: "MANTENIMIENTO",
    desc: "Bug fixes, updates de dependencias, parches de seguridad. Lo que hace falta para que siga funcionando.",
    monthly: 150,
    annual: 1400,
    features: ["Bug fixes", "Security patches", "Dependency updates", "Email support", "Monthly report"],
    acid: false,
  },
  {
    id: "soporte",
    name: "SOPORTE",
    desc: "Horas dedicadas. Mejoras, features pequenas, cambios rapidos. Tu developer a disposicion.",
    monthly: 300,
    annual: 2800,
    hours: 8,
    features: ["8h / mes dedicadas", "Mejoras pequenas", "Cambios rapidos", "Slack directo", "Priority response"],
    acid: true,
  },
];

function Suscripciones() {
  const isMobile = window.useIsMobile();
  const [billing, setBilling] = useState("monthly");

  return (
    <div style={{ padding: isMobile ? "40px 20px" : "64px 32px" }}>
      <div style={{ marginBottom: 40 }}>
        <div className="mono" style={{ color: "#c4ff00", fontSize: 11, marginBottom: 16 }}>§ 04 / SUSCRIPCIONES</div>
        <h1 className="display" style={{ fontSize: isMobile ? 52 : 72, lineHeight: 0.9, marginBottom: 20 }}>
          MANTENE<br /><span className="hl">FUNCIONANDO.</span>
        </h1>
        <p style={{ color: "#a8a8a8", maxWidth: "48ch", fontSize: 16 }}>
          Dos niveles. Mantenimiento para que no se rompa. Soporte para mejorar.
        </p>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 40, flexWrap: "wrap" }}>
        <button onClick={() => setBilling("monthly")} className="mono" style={{
          padding: "8px 20px", background: billing === "monthly" ? "#c4ff00" : "transparent",
          color: billing === "monthly" ? "#0a0a0a" : "#ededed",
          border: "1px solid", borderColor: billing === "monthly" ? "#c4ff00" : "#2a2a2a",
          fontSize: 11, cursor: "crosshair", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em",
        }}>MENSUAL</button>
        <button onClick={() => setBilling("annual")} className="mono" style={{
          padding: "8px 20px", background: billing === "annual" ? "#c4ff00" : "transparent",
          color: billing === "annual" ? "#0a0a0a" : "#ededed",
          border: "1px solid", borderColor: billing === "annual" ? "#c4ff00" : "#2a2a2a",
          fontSize: 11, cursor: "crosshair", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em",
        }}>ANUAL <span style={{ opacity: 0.6 }}>(2 meses gratis)</span></button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, border: "1px solid #2a2a2a", marginBottom: 32 }}>
        {plans.map((plan, i) => (
          <div key={plan.id} style={{
            padding: isMobile ? 24 : 40,
            borderRight: isMobile ? "none" : (i === 0 ? "1px solid #2a2a2a" : "none"),
            borderBottom: isMobile && i === 0 ? "1px solid #2a2a2a" : "none",
            background: plan.acid ? "#c4ff00" : "transparent",
            color: plan.acid ? "#0a0a0a" : "#ededed",
          }}>
            <div className="mono" style={{ fontSize: 11, marginBottom: 8, opacity: 0.6 }}>
              {plan.hours ? `${plan.hours}h / mes` : "Ilimitado"}
            </div>
            <h2 className="display" style={{ fontSize: isMobile ? 28 : 36, marginBottom: 8 }}>{plan.name}</h2>
            <p style={{ fontSize: 14, marginBottom: 20, opacity: 0.9 }}>{plan.desc}</p>

            <div className="display" style={{ fontSize: isMobile ? 40 : 56, marginBottom: 4 }}>
              {billing === "monthly" ? plan.monthly : Math.floor(plan.annual / 12)}
              <span style={{ fontSize: 18 }}> USD</span>
            </div>
            <div className="mono" style={{ fontSize: 10, marginBottom: 20, opacity: 0.6 }}>
              {billing === "monthly" ? "/ mes" : `/ mes (${plan.annual} USD anual)`}
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                  <span style={{ width: 8, height: 8, background: plan.acid ? "#0a0a0a" : "#c4ff00", flexShrink: 0 }}></span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="mono" style={{
              marginTop: 24, padding: "12px 24px",
              background: plan.acid ? "#0a0a0a" : "transparent",
              color: plan.acid ? "#c4ff00" : "#ededed",
              border: `2px solid ${plan.acid ? "#0a0a0a" : "#ededed"}`,
              fontSize: 11, cursor: "crosshair",
              fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", width: "100%",
            }}>ELEGIR PLAN</button>
          </div>
        ))}
      </div>

      <div style={{ padding: 20, border: "1px solid #2a2a2a" }}>
        <p style={{ color: "#a8a8a8", fontSize: 14 }}>
          <span className="mono" style={{ color: "#c4ff00" }}>NOTA: </span>
          Los precios son orientativos. Se negocian segun proyecto. Escribime y armamos un plan a tu medida.
        </p>
      </div>
    </div>
  );
}

window.Suscripciones = Suscripciones;