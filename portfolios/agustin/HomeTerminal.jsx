/* global React, AGUS */
/* VARIATION 02 — TERMINAL / DEEP LAYERS
   Inspired by the Deep Layers captures the user shared.
   Dark surface, electric blue accent, code-as-centerpiece, technical voice.
   Same core BRUTAL system but tuned for "serious AI consultant" pitch. */

function HomeTerminal() {
  const A = window.AGUS;
  const W = 1280;

  const blue = "#3b82f6";
  const blueLight = "#60a5fa";

  return (
    <div style={{ width: W, background: "#050505", color: "#ededed", fontFamily: "Inter, sans-serif" }}>
      {/* TOPBAR */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #1a1a1a", background: "#050505" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 7 L11 3 L19 7 L11 11 Z" fill={blue} stroke={blueLight} strokeWidth="0.5"/>
            <path d="M3 11 L11 7 L19 11 L11 15 Z" fill={blue} opacity="0.7"/>
            <path d="M3 15 L11 11 L19 15 L11 19 Z" fill={blue} opacity="0.4"/>
          </svg>
          <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>Putrino<span style={{ color: blueLight }}>.AI</span></span>
        </div>
        <nav style={{ display: "flex", gap: 28 }}>
          {["Concepto","Trabajo","Servicios","Charlas","Contacto"].map((it) => (
            <span key={it} style={{ fontSize: 14, color: "#a8a8a8", cursor: "pointer" }}>{it}</span>
          ))}
        </nav>
        <span style={{
          padding: "10px 18px", border: "1px solid #2a2a2a", borderRadius: 999,
          fontSize: 13, fontWeight: 500, background: "#fff", color: "#0a0a0a"
        }}>Agendar Demo</span>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", padding: "72px 40px 56px", overflow: "hidden" }}>
        {/* radial blue glow */}
        <div style={{
          position: "absolute", top: -100, right: -100, width: 600, height: 600,
          background: `radial-gradient(circle, ${blue}26 0%, transparent 60%)`,
          pointerEvents: "none",
        }}></div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 14px", borderRadius: 999,
          border: `1px solid ${blue}66`, background: `${blue}1a`,
          marginBottom: 28,
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1 L9 5 L13 7 L9 9 L7 13 L5 9 L1 7 L5 5 Z" fill={blueLight}/>
          </svg>
          <span style={{ fontSize: 11, color: blueLight, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
            APPLIED AI · ON-PREMISE · LATAM
          </span>
        </div>

        <h1 style={{
          fontFamily: "Inter, sans-serif", fontWeight: 800,
          fontSize: 88, lineHeight: 1, letterSpacing: "-0.04em",
          margin: 0, maxWidth: "18ch",
        }}>
          {A.heroTerminal.split(" en ")[0]} en<br/>
          <span style={{
            background: `linear-gradient(90deg, ${blueLight}, ${blue})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>{A.heroTerminal.split(" en ")[1]}</span>
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.5, color: "#a8a8a8", maxWidth: "60ch", marginTop: 28 }}>
          {A.long}
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
          <span style={{
            padding: "14px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            background: blue, color: "#fff",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>Ver casos reales →</span>
          <span style={{
            padding: "14px 22px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            background: "transparent", color: "#ededed", border: "1px solid #2a2a2a",
          }}>Agendar diagnóstico</span>
        </div>
      </section>

      {/* CONCEPT + CODE BLOCK — the Deep Layers signature move */}
      <section style={{ padding: 40, borderTop: "1px solid #1a1a1a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: 12, color: blueLight, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600 }}>
              EL DIFERENCIAL
            </span>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: 14, marginBottom: 18 }}>
              IA local sobre datos<br/>que <span style={{ color: blueLight }}>no pueden salir</span><br/>de tu organización.
            </h2>
            <p style={{ color: "#a8a8a8", fontSize: 16, lineHeight: 1.6, maxWidth: "44ch" }}>
              Implemento modelos de lenguaje, OCR y visión por computadora corriendo en tu propia infraestructura. Trazabilidad, soberanía del dato y procesos auditables — sin enviar nada a APIs externas.
            </p>
            <div style={{ display: "grid", gap: 16, marginTop: 28 }}>
              {A.differential.map((it, i) => (
                <div key={i} style={{ display: "flex", gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                    background: `${blue}26`, border: `1px solid ${blue}66`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
                  }}>{it.icon}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{it.k}</div>
                    <div style={{ fontSize: 14, color: "#a8a8a8", lineHeight: 1.5 }}>{it.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* code block */}
          <div style={{
            border: `1px solid ${blue}55`,
            borderRadius: 12,
            background: "#0a0a0a",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              height: 3,
              background: `linear-gradient(90deg, ${blueLight}, transparent)`,
            }}></div>
            <div style={{ padding: "12px 16px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#3a3a3a" }}></span>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#3a3a3a" }}></span>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#3a3a3a" }}></span>
              <span style={{ marginLeft: 12, fontSize: 11, color: "#6b6b6b", fontFamily: "'JetBrains Mono', monospace" }}>
                pipeline.local.py
              </span>
            </div>
            <pre style={{
              margin: 0, padding: 22,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.7,
              color: "#ededed", overflow: "hidden",
            }}>
<span style={{ color: "#6b6b6b" }}>{`# Pipeline IA on-premise · Putrino`}</span>{`\n`}
<span style={{ color: blueLight }}>from</span>{` ollama `}<span style={{ color: blueLight }}>import</span>{` Llama\n`}
<span style={{ color: blueLight }}>from</span>{` paddleocr `}<span style={{ color: blueLight }}>import</span>{` PaddleOCR\n\n`}
<span style={{ color: "#a8a8a8" }}>{`docs = scan(`}</span><span style={{ color: "#c4ff00" }}>{`"/datos/sensibles"`}</span><span style={{ color: "#a8a8a8" }}>{`)\n`}</span>
<span style={{ color: "#a8a8a8" }}>{`text = ocr.extract(docs, lang=`}</span><span style={{ color: "#c4ff00" }}>{`"es"`}</span><span style={{ color: "#a8a8a8" }}>{`)\n\n`}</span>
<span style={{ color: blueLight }}>{`agent`}</span>{` = Llama(`}<span style={{ color: "#c4ff00" }}>{`"llama3.1:70b"`}</span>{`,\n        host=`}<span style={{ color: "#c4ff00" }}>{`"localhost"`}</span>{`)\n\n`}
<span style={{ color: "#a8a8a8" }}>{`result = agent.process(\n  text,\n  task=`}</span><span style={{ color: "#c4ff00" }}>{`"verificar_documental"`}</span><span style={{ color: "#a8a8a8" }}>{`,\n  trace=`}</span><span style={{ color: blueLight }}>{`True`}</span><span style={{ color: "#a8a8a8" }}>{`\n)\n\n`}</span>
<span style={{ color: "#6b6b6b" }}>{`# 100% on-prem · 0 datos a la nube`}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* CASES GRID */}
      <section style={{ padding: 40, borderTop: "1px solid #1a1a1a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 28 }}>
          <div>
            <span style={{ fontSize: 12, color: blueLight, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600 }}>
              CASOS REALES
            </span>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.025em", marginTop: 14, margin: 0 }}>
              Sistemas en producción.
            </h2>
          </div>
          <span style={{ fontSize: 14, color: "#a8a8a8" }}>Ver todos →</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {A.projects.slice(0, 3).map((p) => (
            <div key={p.id} style={{
              padding: 24, borderRadius: 12,
              background: "#0a0a0a", border: "1px solid #1a1a1a",
              minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: `${blue}26`, border: `1px solid ${blue}66`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                  marginBottom: 18,
                }}>
                  {p.id === "predetect" ? "🩺" : p.id === "iadapta" ? "🎓" : "📋"}
                </div>
                <div style={{ fontSize: 11, color: blueLight, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>
                  {p.kind}
                </div>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>{p.title}</div>
                <p style={{ fontSize: 14, color: "#a8a8a8", lineHeight: 1.55, margin: 0 }}>{p.blurb}</p>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: "4px 9px", borderRadius: 999,
                    border: "1px solid #2a2a2a", color: "#a8a8a8",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 40px", borderTop: "1px solid #1a1a1a", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at center, ${blue}1a 0%, transparent 60%)`,
          pointerEvents: "none",
        }}></div>
        <h2 style={{
          fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 56,
          lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0, maxWidth: "20ch", marginInline: "auto",
        }}>
          Podemos transformar todo lo que ya hiciste<br/>
          <span style={{ color: blueLight }}>en un sistema que trabaje por vos.</span>
        </h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
          <span style={{
            padding: "14px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            background: blue, color: "#fff",
          }}>Agendar diagnóstico →</span>
          <span style={{
            padding: "14px 24px", borderRadius: 999, fontSize: 14, fontWeight: 600,
            background: "transparent", color: "#ededed", border: "1px solid #2a2a2a",
          }}>Escribir directo</span>
        </div>
      </section>
    </div>
  );
}

window.HomeTerminal = HomeTerminal;
