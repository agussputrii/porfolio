/* global window */
/* Agustín Putrino — datos reales del CV */
window.AGUS = {
  name: "Agustín Putrino",
  handle: "@agussputrii",
  city: "Mendoza, Argentina",
  email: "agussputrii@gmail.com",
  phone: "+54 9 261 251-7577",
  linkedin: "linkedin.com/in/agussputrii",

  role: "Magíster en IA",
  subroles: [
    "Consultor",
    "Speaker",
    "Researcher",
    "Capacitador",
    "Fullstack SSR",
  ],

  // Pitch corto / largo
  short: "Construyo sistemas de IA aplicada sobre datos sensibles. On-premise. Trazables. En producción.",
  long:  "Magíster en Inteligencia Artificial. Founder de INNOVADUCATE. Diseño e implemento IA local (on-premise) sobre datos sensibles, con foco en trazabilidad, automatización de procesos y visión por computadora. Más de 500 capacitaciones dictadas y proyectos en producción con DGE Mendoza, municipios, sector salud y asociaciones profesionales.",

  // Hero variants por diseño
  heroTerminal: "Convierto tus datos sensibles en inteligencia operativa.",
  shortDossier: "Diseño e implemento IA local sobre datos sensibles, con trazabilidad y soberanía total del dato.",

  // Terminal design: diferencial on-prem
  differential: [
    { icon: "📁", k: "Datos sensibles, en tu hardware", v: "Salud, gobierno, organismos públicos. Cumple con marco normativo local." },
    { icon: "⚙️", k: "Pipelines reales, no pruebas",   v: "OCR + LLM + RAG en producción. Procesos que ya están corriendo, no slides." },
  ],

  // Dossier design: metadatos del expediente
  meta: {
    expediente:    "AP-2026-001",
    clasificacion: "IA APLICADA",
    jurisdiccion:  "LATAM · REMOTO",
    estado:        "ABIERTO A PROYECTOS",
  },

  stats: [
    { n: "500+", l: "Capacitaciones dictadas" },
    { n: "60+",  l: "Instituciones alcanzadas" },
    { n: "07",   l: "Ediciones Consultores en IA" },
    { n: "ON-PREM", l: "IA local sobre datos sensibles" },
  ],

  services: [
    { code: "01", k: "IA APLICADA", v: "Pipelines de IA para producción real: OCR inteligente, transcripción, análisis de audio, RAG y fine-tuning sobre tu dato." },
    { code: "02", k: "IA LOCAL / ON-PREM", v: "LLMs corriendo en tu hardware. Llama, Mistral, Whisper, Ollama. Trazabilidad y soberanía del dato." },
    { code: "03", k: "VISIÓN POR COMPUTADORA", v: "CNNs para imágenes médicas, detección de anomalías, procesamiento documental." },
    { code: "04", k: "AUTOMATIZACIÓN", v: "ABM, verificación documental, asistentes conversacionales y chatbots integrados a tus sistemas." },
    { code: "05", k: "FORMACIÓN & CONSULTORÍA", v: "Programas a medida para docentes, equipos técnicos y organizaciones. De 0 a 100 en IA real." },
    { code: "06", k: "FULLSTACK SSR", v: "Plataformas, APIs y producto digital. Node.js, FastAPI, React, PostgreSQL." },
  ],

  // Proyectos reales del CV
  projects: [
    {
      id: "predetect",
      n: "01",
      title: "PREDETECT AI",
      sub: "Detección de anomalías en mamografías",
      kind: "VISIÓN / SALUD",
      year: "2024",
      tags: ["CNN", "Imágenes médicas", "On-prem"],
      stat: "Declaración de Interés Legislativo",
      blurb: "Red convolucional entrenada para detección temprana de anomalías mamográficas. Implementación local junto a Biobox.",
    },
    {
      id: "iadapta",
      n: "02",
      title: "IA-DAPTÁ TU FUTURO",
      sub: "Programa de IA con Banco Galicia + DGE Mendoza",
      kind: "EDUCACIÓN / PROGRAMA",
      year: "2024",
      tags: ["Currícula", "Capacitación", "Sector público"],
      stat: "60+ instituciones alcanzadas",
      blurb: "Programa de adopción de IA en escuelas y universidades. Diseño curricular, capacitación docente y proyectos finales con estudiantes.",
    },
    {
      id: "abm",
      n: "03",
      title: "ABM",
      sub: "Verificación documental automatizada",
      kind: "AUTOMATIZACIÓN / GOV",
      year: "2024",
      tags: ["OCR", "LLM local", "Workflow"],
      stat: "Producción · Datos sensibles",
      blurb: "Sistema de altas/bajas/modificaciones con OCR + LLM local que valida documentación oficial sin sacar el dato del organismo.",
    },
    {
      id: "innovaducate",
      n: "04",
      title: "INNOVADUCATE",
      sub: "Plataforma EdTech con IA aplicada",
      kind: "PLATAFORMA / EDTECH",
      year: "2023–2025",
      tags: ["Founder", "Producto", "Pipeline IA"],
      stat: "Ex-CEO / Founder",
      blurb: "Startup EdTech con foco en IA aplicada a educación, salud y gestión documental. Liderazgo, producto y pipeline técnico.",
    },
    {
      id: "audios-medicos",
      n: "05",
      title: "AUDIOS MÉDICOS",
      sub: "Transcripción + análisis con Whisper + LLMs",
      kind: "PROCESAMIENTO / SALUD",
      year: "2024",
      tags: ["Whisper", "LLM", "Pipeline"],
      stat: "Procesamiento on-prem",
      blurb: "Pipeline de transcripción y análisis semántico de audios clínicos para extracción estructurada de información.",
    },
    {
      id: "carnavales",
      n: "06",
      title: "CARNAVALES SN",
      sub: "Aplicaciones de IA en cultura",
      kind: "CULTURA",
      year: "2024",
      tags: ["IA generativa", "Cultura"],
      stat: "Carnavales de San Nicolás",
      blurb: "Experiencias de IA aplicadas al patrimonio y la cultura local. Generación, archivo y curaduría asistida.",
    },
    {
      id: "reit",
      n: "07",
      title: "DIGITAL TWINS",
      sub: "Gemelos digitales fotorrealistas para inmobiliarias",
      kind: "PRODUCTO / PROPTECH",
      year: "2025",
      tags: ["Gemini", "3D", "Real Estate", "AI Studio"],
      stat: "Landing + demo interactiva",
      blurb: "Plataforma de digital twins fotorrealistas para agencias inmobiliarias. Recorridos 3D generados con IA sobre planos reales.",
      videos: [
        "assets/videos/reit-01.mp4",
        "assets/videos/reit-02.mp4",
        "assets/videos/reit-03.mp4",
        "assets/videos/reit-04.mp4",
        "assets/videos/reit-05.mp4",
      ],
    },
  ],

  awards: [
    { y: "2024", k: "Declaración de Interés Legislativo", v: "PREDETECT AI" },
    { y: "2024", k: "10 Jóvenes Sobresalientes (TOYP)",   v: "JCI" },
    { y: "2024", k: "Magíster en IA",                     v: "TECH University" },
    { y: "2023", k: "Declaración de Interés Legislativo", v: "INNOVADUCATE" },
    { y: "2023", k: "Premios a la Innovación",            v: "UNCuyo / FUNC" },
    { y: "2023", k: "Hackathon Tu Economía en Juego",     v: "Mendoza" },
  ],

  speaking: [
    "REDIPP — Latinoamérica para Contar (UCH)",
    "UNCuyo — UtopIAs",
    "SAIA Mendoza — CNN en mamografía",
    "Cámara de Senadores — 7 Aportes de IA",
    "JCI — Líder 360",
    "SummitX — Polo TIC",
    "Hackathón Tu Economía en Juego",
  ],

  stack: {
    "IA / ML":   ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "LightGBM", "CNNs", "Transformers", "RAG", "Fine-tuning", "LoRA", "QLoRA", "RLHF", "Embeddings", "Vector Search", "FAISS", "LangChain", "LlamaIndex"],
    "LLMs":      ["GPT-4o", "GPT-4 Turbo", "Claude 3.5", "Gemini 1.5 Pro", "Gemini Flash", "DeepSeek R1", "DeepSeek V3", "Llama 3.3", "Llama 3.1", "Mistral", "Mixtral", "Qwen 2.5", "Phi-4", "Command R+", "Gemma 2", "Ollama", "Hugging Face", "vLLM", "LM Studio"],
    "Visión":    ["OpenCV", "YOLO v8", "Detectron2", "SAM", "CLIP", "Stable Diffusion", "ComfyUI", "PaddleOCR", "Tesseract", "Whisper", "Faster-Whisper", "Pyannote"],
    "Datos":     ["Pandas", "NumPy", "Polars", "Apache Spark", "dbt", "Airflow", "ETL", "Pinecone", "Weaviate", "Chroma", "Qdrant", "Redis", "Elasticsearch"],
    "Backend":   ["Python", "Node.js", "FastAPI", "Flask", "Express", "Celery", "GraphQL", "REST", "WebSockets", "gRPC"],
    "Frontend":  ["React", "Next.js", "Angular", "TypeScript", "TailwindCSS", "Vite", "Shadcn/ui"],
    "DB":        ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Supabase", "Firebase", "Redis", "Neo4j"],
    "DevOps":    ["Docker", "Docker Compose", "Kubernetes", "Git", "GitHub Actions", "Nginx", "PM2", "Linux", "JWT", "OAuth2", "SSH"],
  },
};
