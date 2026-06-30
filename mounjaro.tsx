export default function MyApp(props: any) {
  return (
    <BeaUI.ToastProvider>
      <AppContent {...props} />
    </BeaUI.ToastProvider>
  );
}

function AppContent({ db, user }: any) {
  const { toast } = BeaUI.useToast();

  // ── constants ──────────────────────────────────────────────
  const DOSE_STEPS = [2.5, 5, 7.5, 10, 12.5, 15];
  const SITES = [
    "Abdômen (esquerda)", "Abdômen (direita)",
    "Coxa esquerda", "Coxa direita",
    "Braço esquerdo", "Braço direito",
    "Glúteo esquerdo", "Glúteo direito",
  ];
  const SYMPTOMS = [
    "Náusea", "Vômito", "Diarreia", "Constipação", "Fadiga",
    "Dor de cabeça", "Falta de apetite", "Refluxo / azia",
    "Tontura", "Dor abdominal", "Outro",
  ];
  const INTENSITIES = ["Leve", "Moderado", "Forte"];
  const canEdit = user.role !== "viewer";

  // ── date helpers (native, timezone-safe for date-only) ─────
  function toISODate(d: Date) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function iso(v: any) { return v == null ? "" : String(v).slice(0, 10); }
  function parseDate(s: string) { return new Date(iso(s) + "T00:00:00"); }
  function fmtDate(s: any) { try { return parseDate(s).toLocaleDateString("pt-BR"); } catch { return String(s); } }
  function fmtShort(s: any) {
    const d = parseDate(s);
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
  }
  function daysBetween(aStr: string, bStr: string) {
    return Math.round((parseDate(aStr).getTime() - parseDate(bStr).getTime()) / 86400000);
  }
  const today = toISODate(new Date());

  function fmtKg(n: any) {
    return n == null ? "—" : Number(n).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " kg";
  }
  function fmtMg(n: any) {
    return n == null ? "—" : Number(n).toLocaleString("pt-BR", { maximumFractionDigits: 2 }) + " mg";
  }

  // ── state ──────────────────────────────────────────────────
  const bootstrapped = useRef(false);
  const [ready, setReady] = useState(false);
  const [bootError, setBootError] = useState<string | null>(null);
  const [page, setPage] = useState("dashboard");

  const [aplicacoes, setAplicacoes] = useState<any[]>([]);
  const [pesos, setPesos] = useState<any[]>([]);
  const [sintomas, setSintomas] = useState<any[]>([]);
  const [config, setConfig] = useState<any>(null);

  const [saving, setSaving] = useState(false);

  // app dialog
  const [appDialog, setAppDialog] = useState(false);
  const [editingAppId, setEditingAppId] = useState<number | null>(null);
  const [appDate, setAppDate] = useState(today);
  const [appDose, setAppDose] = useState("2.5");
  const [appSite, setAppSite] = useState(SITES[0]);
  const [appNotes, setAppNotes] = useState("");
  const [appError, setAppError] = useState("");

  // peso dialog
  const [pesoDialog, setPesoDialog] = useState(false);
  const [editingPesoId, setEditingPesoId] = useState<number | null>(null);
  const [pesoDate, setPesoDate] = useState(today);
  const [pesoValue, setPesoValue] = useState("");
  const [pesoError, setPesoError] = useState("");

  // sintoma dialog
  const [sintDialog, setSintDialog] = useState(false);
  const [editingSintId, setEditingSintId] = useState<number | null>(null);
  const [sintDate, setSintDate] = useState(today);
  const [sintName, setSintName] = useState(SYMPTOMS[0]);
  const [sintIntensity, setSintIntensity] = useState("Leve");
  const [sintNotes, setSintNotes] = useState("");
  const [sintError, setSintError] = useState("");

  // config dialog
  const [configDialog, setConfigDialog] = useState(false);
  const [cfgStart, setCfgStart] = useState("");
  const [cfgTarget, setCfgTarget] = useState("");

  // ── data loading ───────────────────────────────────────────
  const loadAll = useCallback(async () => {
    const [apps, weights, symptoms, cfg] = await Promise.all([
      db.query("SELECT * FROM app_aplicacoes_mj7k2 WHERE owner_id = $1 AND deleted_at IS NULL ORDER BY applied_at DESC, id DESC", [user.id]),
      db.query("SELECT * FROM app_pesos_mj7k2 WHERE owner_id = $1 AND deleted_at IS NULL ORDER BY measured_at ASC, id ASC", [user.id]),
      db.query("SELECT * FROM app_sintomas_mj7k2 WHERE owner_id = $1 AND deleted_at IS NULL ORDER BY occurred_at DESC, id DESC", [user.id]),
      db.query("SELECT * FROM app_config_mj7k2 WHERE owner_id = $1 LIMIT 1", [user.id]),
    ]);
    setAplicacoes(Array.isArray(apps) ? apps : []);
    setPesos(Array.isArray(weights) ? weights : []);
    setSintomas(Array.isArray(symptoms) ? symptoms : []);
    setConfig(Array.isArray(cfg) && cfg.length ? cfg[0] : null);
  }, [db, user.id]);

  useEffect(() => {
    if (bootstrapped.current) return;
    bootstrapped.current = true;
    (async () => {
      try {
        await db.execute(`CREATE TABLE IF NOT EXISTS app_aplicacoes_mj7k2 (
          id SERIAL PRIMARY KEY,
          owner_id TEXT NOT NULL,
          applied_at DATE NOT NULL,
          dose NUMERIC(5,2) NOT NULL,
          site TEXT,
          notes TEXT,
          deleted_at TIMESTAMP,
          created_at TIMESTAMP DEFAULT NOW()
        )`);
        await db.execute(`CREATE TABLE IF NOT EXISTS app_pesos_mj7k2 (
          id SERIAL PRIMARY KEY,
          owner_id TEXT NOT NULL,
          measured_at DATE NOT NULL,
          weight NUMERIC(6,2) NOT NULL,
          deleted_at TIMESTAMP,
          created_at TIMESTAMP DEFAULT NOW()
        )`);
        await db.execute(`CREATE TABLE IF NOT EXISTS app_sintomas_mj7k2 (
          id SERIAL PRIMARY KEY,
          owner_id TEXT NOT NULL,
          occurred_at DATE NOT NULL,
          symptom TEXT NOT NULL,
          intensity TEXT NOT NULL,
          notes TEXT,
          deleted_at TIMESTAMP,
          created_at TIMESTAMP DEFAULT NOW()
        )`);
        await db.execute(`CREATE TABLE IF NOT EXISTS app_config_mj7k2 (
          id SERIAL PRIMARY KEY,
          owner_id TEXT NOT NULL UNIQUE,
          start_weight NUMERIC(6,2),
          target_weight NUMERIC(6,2),
          updated_at TIMESTAMP DEFAULT NOW(),
          created_at TIMESTAMP DEFAULT NOW()
        )`);
        await db.execute(`CREATE INDEX IF NOT EXISTS idx_apl_owner_mj7k2 ON app_aplicacoes_mj7k2(owner_id)`);
        await db.execute(`CREATE INDEX IF NOT EXISTS idx_peso_owner_mj7k2 ON app_pesos_mj7k2(owner_id)`);
        await db.execute(`CREATE INDEX IF NOT EXISTS idx_sint_owner_mj7k2 ON app_sintomas_mj7k2(owner_id)`);
        await loadAll();
        setReady(true);
      } catch (e) {
        setBootError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, []);

  function showError(e: any) {
    toast(e instanceof Error ? e.message : "Ocorreu um erro. Tente novamente.", "error");
  }

  // ── derived: applications / dose ───────────────────────────
  const ascApps = [...aplicacoes].sort(
    (a, b) => parseDate(a.applied_at).getTime() - parseDate(b.applied_at).getTime()
  );
  const lastApp = aplicacoes.length ? aplicacoes[0] : null;
  const currentDose = lastApp ? Number(lastApp.dose) : null;

  let nextDateStr: string | null = null;
  let daysUntilNext: number | null = null;
  if (lastApp) {
    const nd = new Date(parseDate(lastApp.applied_at).getTime() + 7 * 86400000);
    nextDateStr = toISODate(nd);
    daysUntilNext = daysBetween(nextDateStr, today);
  }

  let doseStartStr: string | null = null;
  if (ascApps.length && currentDose != null) {
    doseStartStr = iso(ascApps[ascApps.length - 1].applied_at);
    for (let i = ascApps.length - 1; i >= 0; i--) {
      if (Number(ascApps[i].dose) === currentDose) doseStartStr = iso(ascApps[i].applied_at);
      else break;
    }
  }
  const daysOnDose = doseStartStr ? daysBetween(today, doseStartStr) : null;
  const doseIdx = currentDose != null ? DOSE_STEPS.indexOf(currentDose) : -1;
  const nextDose = doseIdx >= 0 && doseIdx < DOSE_STEPS.length - 1 ? DOSE_STEPS[doseIdx + 1] : null;
  const suggestIncrease = daysOnDose != null && daysOnDose >= 28 && nextDose != null;

  function nextLabel() {
    if (daysUntilNext == null) return "Sem registro";
    if (daysUntilNext < 0) return `Atrasada · ${Math.abs(daysUntilNext)}d`;
    if (daysUntilNext === 0) return "É hoje";
    if (daysUntilNext === 1) return "Amanhã";
    return `Em ${daysUntilNext} dias`;
  }
  const nextAccent: any = daysUntilNext == null ? "neutral"
    : daysUntilNext < 0 ? "destructive"
    : daysUntilNext === 0 ? "warning" : "primary";

  // ── derived: weight ────────────────────────────────────────
  const currentWeight = pesos.length ? Number(pesos[pesos.length - 1].weight) : null;
  const firstWeight = pesos.length ? Number(pesos[0].weight) : null;
  const startWeight = config && config.start_weight != null ? Number(config.start_weight) : firstWeight;
  const targetWeight = config && config.target_weight != null ? Number(config.target_weight) : null;
  const lost = startWeight != null && currentWeight != null ? startWeight - currentWeight : null;
  const toGo = currentWeight != null && targetWeight != null ? Math.max(0, currentWeight - targetWeight) : null;
  let progressPct: number | null = null;
  if (startWeight != null && targetWeight != null && currentWeight != null && startWeight > targetWeight) {
    progressPct = Math.min(100, Math.max(0, ((startWeight - currentWeight) / (startWeight - targetWeight)) * 100));
  }
  let weightTrend: any = null;
  if (pesos.length >= 2) {
    const d = Number(pesos[pesos.length - 1].weight) - Number(pesos[pesos.length - 2].weight);
    weightTrend = {
      value: (d > 0 ? "+" : "") + d.toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + " kg",
      direction: d < 0 ? "down" : d > 0 ? "up" : "neutral",
    };
  }

  const weightChartData = {
    labels: pesos.map((p) => fmtShort(p.measured_at)),
    datasets: [
      {
        label: "Peso (kg)",
        data: pesos.map((p) => Number(p.weight)),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.12)",
        tension: 0.35,
        fill: true,
        pointRadius: 3,
        pointBackgroundColor: "#3b82f6",
        borderWidth: 2,
      },
      ...(targetWeight != null
        ? [{
            label: "Meta",
            data: pesos.map(() => targetWeight),
            borderColor: "#22c55e",
            borderDash: [6, 6],
            pointRadius: 0,
            fill: false,
            borderWidth: 1.5,
          }]
        : []),
    ],
  };
  const chartOptions: any = {
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: { y: { beginAtZero: false } },
  };

  // ── handlers: open dialogs ─────────────────────────────────
  function openAppDialog(item?: any) {
    if (item) {
      setEditingAppId(item.id);
      setAppDate(iso(item.applied_at));
      setAppDose(String(Number(item.dose)));
      setAppSite(item.site || SITES[0]);
      setAppNotes(item.notes || "");
    } else {
      setEditingAppId(null);
      setAppDate(today);
      setAppDose(currentDose != null ? String(currentDose) : "2.5");
      const suggested = SITES.find((s) => s !== (lastApp ? lastApp.site : "")) || SITES[0];
      setAppSite(suggested);
      setAppNotes("");
    }
    setAppError("");
    setAppDialog(true);
  }

  function openPesoDialog(item?: any) {
    if (item) {
      setEditingPesoId(item.id);
      setPesoDate(iso(item.measured_at));
      setPesoValue(String(Number(item.weight)));
    } else {
      setEditingPesoId(null);
      setPesoDate(today);
      setPesoValue(currentWeight != null ? String(currentWeight) : "");
    }
    setPesoError("");
    setPesoDialog(true);
  }

  function openSintDialog(item?: any) {
    if (item) {
      setEditingSintId(item.id);
      setSintDate(iso(item.occurred_at));
      setSintName(item.symptom || SYMPTOMS[0]);
      setSintIntensity(item.intensity || "Leve");
      setSintNotes(item.notes || "");
    } else {
      setEditingSintId(null);
      setSintDate(today);
      setSintName(SYMPTOMS[0]);
      setSintIntensity("Leve");
      setSintNotes("");
    }
    setSintError("");
    setSintDialog(true);
  }

  function openConfigDialog() {
    setCfgStart(config && config.start_weight != null ? String(Number(config.start_weight)) : (firstWeight != null ? String(firstWeight) : ""));
    setCfgTarget(config && config.target_weight != null ? String(Number(config.target_weight)) : "");
    setConfigDialog(true);
  }

  // ── handlers: save ─────────────────────────────────────────
  async function saveApp() {
    if (!appDate || !appDose || !appSite) { setAppError("Preencha data, dose e local."); return; }
    setSaving(true);
    try {
      if (editingAppId) {
        await db.execute(
          "UPDATE app_aplicacoes_mj7k2 SET applied_at=$1, dose=$2, site=$3, notes=$4 WHERE id=$5 AND owner_id=$6",
          [appDate, Number(appDose), appSite, appNotes || null, editingAppId, user.id]
        );
      } else {
        await db.execute(
          "INSERT INTO app_aplicacoes_mj7k2 (owner_id, applied_at, dose, site, notes) VALUES ($1,$2,$3,$4,$5)",
          [user.id, appDate, Number(appDose), appSite, appNotes || null]
        );
      }
      await loadAll();
      toast(editingAppId ? "Aplicação atualizada" : "Aplicação registrada", "success");
      setAppDialog(false);
    } catch (e) { showError(e); } finally { setSaving(false); }
  }

  async function savePeso() {
    const v = Number(pesoValue);
    if (!pesoDate || !pesoValue || isNaN(v) || v <= 0) { setPesoError("Informe uma data e um peso válido."); return; }
    setSaving(true);
    try {
      if (editingPesoId) {
        await db.execute(
          "UPDATE app_pesos_mj7k2 SET measured_at=$1, weight=$2 WHERE id=$3 AND owner_id=$4",
          [pesoDate, v, editingPesoId, user.id]
        );
      } else {
        await db.execute(
          "INSERT INTO app_pesos_mj7k2 (owner_id, measured_at, weight) VALUES ($1,$2,$3)",
          [user.id, pesoDate, v]
        );
      }
      await loadAll();
      toast(editingPesoId ? "Peso atualizado" : "Peso registrado", "success");
      setPesoDialog(false);
    } catch (e) { showError(e); } finally { setSaving(false); }
  }

  async function saveSint() {
    if (!sintDate || !sintName || !sintIntensity) { setSintError("Preencha data, sintoma e intensidade."); return; }
    setSaving(true);
    try {
      if (editingSintId) {
        await db.execute(
          "UPDATE app_sintomas_mj7k2 SET occurred_at=$1, symptom=$2, intensity=$3, notes=$4 WHERE id=$5 AND owner_id=$6",
          [sintDate, sintName, sintIntensity, sintNotes || null, editingSintId, user.id]
        );
      } else {
        await db.execute(
          "INSERT INTO app_sintomas_mj7k2 (owner_id, occurred_at, symptom, intensity, notes) VALUES ($1,$2,$3,$4,$5)",
          [user.id, sintDate, sintName, sintIntensity, sintNotes || null]
        );
      }
      await loadAll();
      toast(editingSintId ? "Sintoma atualizado" : "Sintoma registrado", "success");
      setSintDialog(false);
    } catch (e) { showError(e); } finally { setSaving(false); }
  }

  async function saveConfig() {
    setSaving(true);
    try {
      const s = cfgStart ? Number(cfgStart) : null;
      const t = cfgTarget ? Number(cfgTarget) : null;
      await db.execute(
        `INSERT INTO app_config_mj7k2 (owner_id, start_weight, target_weight, updated_at)
         VALUES ($1,$2,$3,NOW())
         ON CONFLICT (owner_id) DO UPDATE SET start_weight=EXCLUDED.start_weight, target_weight=EXCLUDED.target_weight, updated_at=NOW()`,
        [user.id, s, t]
      );
      await loadAll();
      toast("Metas salvas", "success");
      setConfigDialog(false);
    } catch (e) { showError(e); } finally { setSaving(false); }
  }

  // ── handlers: delete (soft) + undo ─────────────────────────
  async function delApp(item: any) {
    try {
      await db.execute("UPDATE app_aplicacoes_mj7k2 SET deleted_at=NOW() WHERE id=$1 AND owner_id=$2", [item.id, user.id]);
      await loadAll();
      toast("Aplicação removida", "success", { action: { label: "Desfazer", onClick: () => undoApp(item.id) } });
    } catch (e) { showError(e); }
  }
  async function undoApp(id: number) {
    try { await db.execute("UPDATE app_aplicacoes_mj7k2 SET deleted_at=NULL WHERE id=$1 AND owner_id=$2", [id, user.id]); await loadAll(); } catch (e) { showError(e); }
  }
  async function delPeso(item: any) {
    try {
      await db.execute("UPDATE app_pesos_mj7k2 SET deleted_at=NOW() WHERE id=$1 AND owner_id=$2", [item.id, user.id]);
      await loadAll();
      toast("Registro de peso removido", "success", { action: { label: "Desfazer", onClick: () => undoPeso(item.id) } });
    } catch (e) { showError(e); }
  }
  async function undoPeso(id: number) {
    try { await db.execute("UPDATE app_pesos_mj7k2 SET deleted_at=NULL WHERE id=$1 AND owner_id=$2", [id, user.id]); await loadAll(); } catch (e) { showError(e); }
  }
  async function delSint(item: any) {
    try {
      await db.execute("UPDATE app_sintomas_mj7k2 SET deleted_at=NOW() WHERE id=$1 AND owner_id=$2", [item.id, user.id]);
      await loadAll();
      toast("Sintoma removido", "success", { action: { label: "Desfazer", onClick: () => undoSint(item.id) } });
    } catch (e) { showError(e); }
  }
  async function undoSint(id: number) {
    try { await db.execute("UPDATE app_sintomas_mj7k2 SET deleted_at=NULL WHERE id=$1 AND owner_id=$2", [id, user.id]); await loadAll(); } catch (e) { showError(e); }
  }

  function intVariant(i: string): any {
    return i === "Forte" ? "destructive" : i === "Moderado" ? "warning" : "success";
  }

  // ── input class helpers ────────────────────────────────────
  const inputCls = "w-full h-10 px-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
  const selectCls = inputCls + " appearance-none cursor-pointer";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5";

  // ── render: dashboard ──────────────────────────────────────
  function renderDashboard() {
    return (
      <div className="space-y-6">
        {lastApp && daysUntilNext != null && daysUntilNext < 0 && (
          <BeaUI.Banner variant="destructive" title="Aplicação atrasada">
            Sua aplicação está atrasada há {Math.abs(daysUntilNext)} dia(s) (prevista para {fmtDate(nextDateStr)}). Aplique assim que possível e registre aqui.
          </BeaUI.Banner>
        )}
        {lastApp && daysUntilNext === 0 && (
          <BeaUI.Banner variant="warning" title="Hoje é dia de aplicação 💉">
            Não esqueça de aplicar sua dose de {fmtMg(currentDose)} hoje. Lembre de alternar o local da injeção.
          </BeaUI.Banner>
        )}
        {suggestIncrease && (
          <BeaUI.Banner variant="info" title="Possível ajuste de dose">
            Você está há {daysOnDose} dias na dose de {fmtMg(currentDose)}. Converse com seu médico sobre subir para {fmtMg(nextDose)} — só ajuste com orientação profissional.
          </BeaUI.Banner>
        )}

        {/* Hero próxima aplicação */}
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-accent/5 to-background p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <BeaUI.Icon name="syringe" size={26} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Próxima aplicação</p>
                <p className="text-2xl font-bold text-foreground mt-0.5">{nextLabel()}</p>
                <p className="text-sm text-muted-foreground">
                  {lastApp
                    ? `Prevista para ${fmtDate(nextDateStr)} · dose atual ${fmtMg(currentDose)}`
                    : "Registre sua primeira aplicação para começar."}
                </p>
              </div>
            </div>
            {canEdit && (
              <BeaUI.Button onClick={() => openAppDialog()} className="shrink-0">
                <BeaUI.Icon name="plus" size={16} /> Registrar aplicação
              </BeaUI.Button>
            )}
          </div>
        </div>

        {/* KPIs */}
        <BeaUI.StatsGrid>
          <BeaUI.MetricCard
            label="Próxima dose"
            value={nextLabel()}
            icon={<BeaUI.Icon name="calendar-clock" />}
            accent={nextAccent}
            hint={lastApp ? `Última: ${fmtDate(lastApp.applied_at)}` : "Sem registro"}
          />
          <BeaUI.MetricCard
            label="Dose atual"
            value={currentDose != null ? fmtMg(currentDose) : "—"}
            icon={<BeaUI.Icon name="droplet" />}
            accent="primary"
            hint={daysOnDose != null ? `Há ${daysOnDose} dias nesta dose` : "—"}
          />
          <BeaUI.MetricCard
            label="Peso atual"
            value={currentWeight != null ? fmtKg(currentWeight) : "—"}
            icon={<BeaUI.Icon name="scale" />}
            accent="neutral"
            trend={weightTrend || undefined}
            hint={lost != null ? `${lost >= 0 ? "−" : "+"}${Math.abs(lost).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} kg no total` : "Registre seu peso"}
          />
          <BeaUI.MetricCard
            label="Falta p/ meta"
            value={toGo != null ? fmtKg(toGo) : "—"}
            icon={<BeaUI.Icon name="target" />}
            accent={toGo != null && toGo <= 0 ? "success" : "warning"}
            hint={targetWeight != null ? `Meta: ${fmtKg(targetWeight)}` : "Defina sua meta"}
          />
        </BeaUI.StatsGrid>

        {/* Progresso da meta */}
        {progressPct != null && (
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-foreground">Progresso até a meta</p>
              <span className="text-sm font-semibold text-primary">{Math.round(progressPct)}%</span>
            </div>
            <BeaUI.ProgressBar value={progressPct} max={100} variant="gradient" size="md" />
            <p className="text-xs text-muted-foreground mt-2">
              De {fmtKg(startWeight)} até {fmtKg(targetWeight)} · você já avançou {fmtKg(lost)}.
            </p>
          </div>
        )}

        {/* Gráfico de peso */}
        <BeaUI.Section title="Evolução do peso" description="Acompanhe a tendência das suas medições ao longo do tratamento.">
          {pesos.length >= 2 ? (
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm" style={{ height: 300 }}>
              <BeaUI.LineChart data={weightChartData} options={chartOptions} height={268} />
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              Registre pelo menos 2 pesagens para visualizar o gráfico de evolução.
              {canEdit && (
                <div className="mt-3">
                  <BeaUI.Button size="sm" variant="outline" onClick={() => openPesoDialog()}>
                    <BeaUI.Icon name="plus" size={14} /> Registrar peso
                  </BeaUI.Button>
                </div>
              )}
            </div>
          )}
        </BeaUI.Section>

        {/* Atividade recente */}
        <BeaUI.Section title="Aplicações recentes">
          {aplicacoes.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
              Nenhuma aplicação registrada ainda.
            </div>
          ) : (
            <BeaUI.Timeline
              items={aplicacoes.slice(0, 6).map((a) => ({
                id: a.id,
                title: `${fmtMg(a.dose)}`,
                description: a.site || "Local não informado",
                timestamp: fmtDate(a.applied_at),
                variant: "primary",
                icon: <BeaUI.Icon name="syringe" size={14} />,
              }))}
            />
          )}
        </BeaUI.Section>
      </div>
    );
  }

  // ── render: aplicações ─────────────────────────────────────
  function renderAplicacoes() {
    return (
      <div className="space-y-5">
        <BeaUI.PageHeader
          eyebrow="Histórico"
          title="Aplicações"
          description="Registre cada aplicação semanal e alterne o local da injeção."
          actions={canEdit ? (
            <BeaUI.Button onClick={() => openAppDialog()}>
              <BeaUI.Icon name="plus" size={14} /> Nova aplicação
            </BeaUI.Button>
          ) : undefined}
        />
        {lastApp && (
          <div className="rounded-2xl border border-border bg-muted/40 p-4 flex items-center gap-3 text-sm">
            <BeaUI.Icon name="refresh-cw" size={16} className="text-primary" />
            <span className="text-muted-foreground">
              Último local: <span className="font-medium text-foreground">{lastApp.site || "—"}</span>. Alterne o local nesta aplicação para evitar irritação na pele.
            </span>
          </div>
        )}
        {aplicacoes.length === 0 ? (
          <BeaUI.EmptyState
            icon={<BeaUI.Icon name="syringe" size={48} />}
            title="Nenhuma aplicação registrada"
            description="Registre sua primeira aplicação para começar a acompanhar a dose e o rodízio de local."
            action={canEdit ? (
              <BeaUI.Button onClick={() => openAppDialog()}>
                <BeaUI.Icon name="plus" size={14} /> Registrar aplicação
              </BeaUI.Button>
            ) : undefined}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aplicacoes.map((a, i) => (
              <div
                key={a.id}
                className="group p-4 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <BeaUI.Icon name="syringe" size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">{fmtMg(a.dose)}</p>
                      <p className="text-xs text-muted-foreground">{fmtDate(a.applied_at)}</p>
                    </div>
                  </div>
                  {canEdit && (
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openAppDialog(a)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                        <BeaUI.Icon name="pencil" size={15} />
                      </button>
                      <button onClick={() => delApp(a)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                        <BeaUI.Icon name="trash-2" size={15} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <BeaUI.Badge variant="secondary">{a.site || "Local não informado"}</BeaUI.Badge>
                </div>
                {a.notes && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{a.notes}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── render: peso ───────────────────────────────────────────
  function renderPeso() {
    return (
      <div className="space-y-5">
        <BeaUI.PageHeader
          eyebrow="Acompanhamento"
          title="Peso"
          description="Registre suas pesagens e acompanhe a evolução rumo à meta."
          actions={
            <>
              <BeaUI.Button variant="outline" size="sm" onClick={openConfigDialog}>
                <BeaUI.Icon name="target" size={14} /> Metas
              </BeaUI.Button>
              {canEdit && (
                <BeaUI.Button onClick={() => openPesoDialog()}>
                  <BeaUI.Icon name="plus" size={14} /> Registrar peso
                </BeaUI.Button>
              )}
            </>
          }
        />

        <BeaUI.StatsGrid>
          <BeaUI.MetricCard label="Peso atual" value={currentWeight != null ? fmtKg(currentWeight) : "—"} icon={<BeaUI.Icon name="scale" />} accent="primary" trend={weightTrend || undefined} />
          <BeaUI.MetricCard label="Peso inicial" value={startWeight != null ? fmtKg(startWeight) : "—"} icon={<BeaUI.Icon name="flag" />} accent="neutral" />
          <BeaUI.MetricCard label="Total perdido" value={lost != null ? fmtKg(Math.abs(lost)) : "—"} icon={<BeaUI.Icon name="trending-down" />} accent="success" hint={lost != null && lost < 0 ? "Ganho de peso" : undefined} />
          <BeaUI.MetricCard label="Meta" value={targetWeight != null ? fmtKg(targetWeight) : "—"} icon={<BeaUI.Icon name="target" />} accent="warning" hint={toGo != null ? `Faltam ${fmtKg(toGo)}` : "Defina sua meta"} />
        </BeaUI.StatsGrid>

        {progressPct != null && (
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-foreground">Progresso até a meta</p>
              <span className="text-sm font-semibold text-primary">{Math.round(progressPct)}%</span>
            </div>
            <BeaUI.ProgressBar value={progressPct} max={100} variant="gradient" size="md" />
          </div>
        )}

        {pesos.length >= 2 && (
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm" style={{ height: 300 }}>
            <BeaUI.LineChart data={weightChartData} options={chartOptions} height={268} />
          </div>
        )}

        {pesos.length === 0 ? (
          <BeaUI.EmptyState
            icon={<BeaUI.Icon name="scale" size={48} />}
            title="Nenhuma pesagem registrada"
            description="Adicione sua primeira pesagem para acompanhar a evolução do tratamento."
            action={canEdit ? (
              <BeaUI.Button onClick={() => openPesoDialog()}>
                <BeaUI.Icon name="plus" size={14} /> Registrar peso
              </BeaUI.Button>
            ) : undefined}
          />
        ) : (
          <BeaUI.Section title="Histórico de pesagens">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Data</th>
                      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Peso</th>
                      <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">Variação</th>
                      {canEdit && <th className="px-4 py-3"></th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[...pesos].reverse().map((p, idx, arr) => {
                      const prev = arr[idx + 1];
                      const diff = prev ? Number(p.weight) - Number(prev.weight) : null;
                      return (
                        <tr key={p.id} className="hover:bg-accent/50 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground font-mono tabular-nums">{fmtDate(p.measured_at)}</td>
                          <td className="px-4 py-3 text-sm text-foreground tabular-nums">{fmtKg(p.weight)}</td>
                          <td className="px-4 py-3 text-sm tabular-nums">
                            {diff == null ? (
                              <span className="text-muted-foreground">—</span>
                            ) : (
                              <span className={diff < 0 ? "text-green-600" : diff > 0 ? "text-destructive" : "text-muted-foreground"}>
                                {diff > 0 ? "+" : ""}{diff.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} kg
                              </span>
                            )}
                          </td>
                          {canEdit && (
                            <td className="px-4 py-3 text-right">
                              <div className="inline-flex items-center gap-1">
                                <button onClick={() => openPesoDialog(p)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                                  <BeaUI.Icon name="pencil" size={15} />
                                </button>
                                <button onClick={() => delPeso(p)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                                  <BeaUI.Icon name="trash-2" size={15} />
                                </button>
                              </div>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </BeaUI.Section>
        )}
      </div>
    );
  }

  // ── render: sintomas ───────────────────────────────────────
  function renderSintomas() {
    return (
      <div className="space-y-5">
        <BeaUI.PageHeader
          eyebrow="Bem-estar"
          title="Sintomas"
          description="Registre efeitos colaterais para correlacionar com as doses."
          actions={canEdit ? (
            <BeaUI.Button onClick={() => openSintDialog()}>
              <BeaUI.Icon name="plus" size={14} /> Novo sintoma
            </BeaUI.Button>
          ) : undefined}
        />
        {sintomas.length === 0 ? (
          <BeaUI.EmptyState
            icon={<BeaUI.Icon name="activity" size={48} />}
            title="Nenhum sintoma registrado"
            description="Sem efeitos colaterais por enquanto. Caso sinta algo, registre aqui com data e intensidade."
            action={canEdit ? (
              <BeaUI.Button onClick={() => openSintDialog()}>
                <BeaUI.Icon name="plus" size={14} /> Registrar sintoma
              </BeaUI.Button>
            ) : undefined}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sintomas.map((s, i) => (
              <div
                key={s.id}
                className="group p-4 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-0.5 transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{s.symptom}</p>
                    <p className="text-xs text-muted-foreground">{fmtDate(s.occurred_at)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BeaUI.Badge variant={intVariant(s.intensity)}>{s.intensity}</BeaUI.Badge>
                    {canEdit && (
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openSintDialog(s)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                          <BeaUI.Icon name="pencil" size={15} />
                        </button>
                        <button onClick={() => delSint(s)} className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                          <BeaUI.Icon name="trash-2" size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {s.notes && <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{s.notes}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── loading skeleton ───────────────────────────────────────
  function renderSkeleton() {
    return (
      <div className="space-y-4">
        <BeaUI.Skeleton variant="rect" height={96} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => <BeaUI.Skeleton key={i} variant="rect" height={88} />)}
        </div>
        <BeaUI.Skeleton variant="rect" height={220} />
      </div>
    );
  }

  // ── main render ────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-background">
      <style>{":root { --primary: 217 91% 60%; --primary-foreground: 0 0% 100%; --ring: 217 91% 60%; --radius: 1rem; }"}</style>

      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
              <BeaUI.Icon name="syringe" size={18} />
            </div>
            <h1 className="text-base font-semibold text-foreground truncate">Monitor Mounjaro</h1>
            <BeaUI.StatusDot variant="success" pulse />
          </div>
          <div className="flex items-center gap-2">
            <BeaUI.Button variant="outline" size="sm" onClick={openConfigDialog}>
              <BeaUI.Icon name="settings" size={14} /> <span className="hidden sm:inline">Metas</span>
            </BeaUI.Button>
            <BeaUI.Avatar name={user.name} size="sm" />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {bootError && (
          <BeaUI.Banner variant="destructive" title="Erro ao iniciar o app">{bootError}</BeaUI.Banner>
        )}

        {!ready ? (
          renderSkeleton()
        ) : (
          <div className="space-y-6">
            <BeaUI.SegmentedControl
              value={page}
              onChange={setPage}
              size="md"
              options={[
                { value: "dashboard", label: "Painel", icon: <BeaUI.Icon name="layout-dashboard" size={14} /> },
                { value: "aplicacoes", label: "Aplicações", icon: <BeaUI.Icon name="syringe" size={14} /> },
                { value: "peso", label: "Peso", icon: <BeaUI.Icon name="scale" size={14} /> },
                { value: "sintomas", label: "Sintomas", icon: <BeaUI.Icon name="activity" size={14} /> },
              ]}
            />

            {page === "dashboard" && renderDashboard()}
            {page === "aplicacoes" && renderAplicacoes()}
            {page === "peso" && renderPeso()}
            {page === "sintomas" && renderSintomas()}

            <p className="text-xs text-muted-foreground text-center pt-4">
              Este app é um apoio pessoal de acompanhamento e não substitui orientação médica. Siga sempre as recomendações do seu médico.
            </p>
          </div>
        )}
      </main>

      {/* ── Dialog: Aplicação ── */}
      <BeaUI.Dialog open={appDialog} onClose={() => setAppDialog(false)} title={editingAppId ? "Editar aplicação" : "Nova aplicação"}>
        <div className="space-y-4">
          {appError && <p className="text-sm text-destructive">{appError}</p>}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Data</label>
              <input type="date" value={appDate} onChange={(e) => setAppDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Dose</label>
              <select value={appDose} onChange={(e) => setAppDose(e.target.value)} className={selectCls}>
                {DOSE_STEPS.map((d) => (
                  <option key={d} value={String(d)}>{d.toLocaleString("pt-BR")} mg</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>Local da injeção</label>
            <select value={appSite} onChange={(e) => setAppSite(e.target.value)} className={selectCls}>
              {SITES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Observação (opcional)</label>
            <textarea value={appNotes} onChange={(e) => setAppNotes(e.target.value)} rows={2} placeholder="Caneta/lote, como se sentiu, etc."
              className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <BeaUI.Button variant="outline" onClick={() => setAppDialog(false)}>Cancelar</BeaUI.Button>
            <BeaUI.Button loading={saving} onClick={saveApp}>{editingAppId ? "Salvar" : "Registrar"}</BeaUI.Button>
          </div>
        </div>
      </BeaUI.Dialog>

      {/* ── Dialog: Peso ── */}
      <BeaUI.Dialog open={pesoDialog} onClose={() => setPesoDialog(false)} title={editingPesoId ? "Editar pesagem" : "Registrar peso"}>
        <div className="space-y-4">
          {pesoError && <p className="text-sm text-destructive">{pesoError}</p>}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Data</label>
              <input type="date" value={pesoDate} onChange={(e) => setPesoDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Peso (kg)</label>
              <input type="number" inputMode="decimal" step="0.1" min="0" value={pesoValue} onChange={(e) => setPesoValue(e.target.value)} placeholder="Ex.: 92,5" className={inputCls} />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <BeaUI.Button variant="outline" onClick={() => setPesoDialog(false)}>Cancelar</BeaUI.Button>
            <BeaUI.Button loading={saving} onClick={savePeso}>{editingPesoId ? "Salvar" : "Registrar"}</BeaUI.Button>
          </div>
        </div>
      </BeaUI.Dialog>

      {/* ── Dialog: Sintoma ── */}
      <BeaUI.Dialog open={sintDialog} onClose={() => setSintDialog(false)} title={editingSintId ? "Editar sintoma" : "Registrar sintoma"}>
        <div className="space-y-4">
          {sintError && <p className="text-sm text-destructive">{sintError}</p>}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Data</label>
              <input type="date" value={sintDate} onChange={(e) => setSintDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Sintoma</label>
              <select value={sintName} onChange={(e) => setSintName(e.target.value)} className={selectCls}>
                {SYMPTOMS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className={labelCls}>Intensidade</label>
            <BeaUI.SegmentedControl
              value={sintIntensity}
              onChange={setSintIntensity}
              size="sm"
              options={INTENSITIES.map((i) => ({ value: i, label: i }))}
            />
          </div>
          <div>
            <label className={labelCls}>Observação (opcional)</label>
            <textarea value={sintNotes} onChange={(e) => setSintNotes(e.target.value)} rows={2} placeholder="Duração, o que ajudou a aliviar, etc."
              className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <BeaUI.Button variant="outline" onClick={() => setSintDialog(false)}>Cancelar</BeaUI.Button>
            <BeaUI.Button loading={saving} onClick={saveSint}>{editingSintId ? "Salvar" : "Registrar"}</BeaUI.Button>
          </div>
        </div>
      </BeaUI.Dialog>

      {/* ── Dialog: Metas ── */}
      <BeaUI.Dialog open={configDialog} onClose={() => setConfigDialog(false)} title="Metas e configuração">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Defina seu peso inicial e a meta para acompanhar o progresso.</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Peso inicial (kg)</label>
              <input type="number" inputMode="decimal" step="0.1" min="0" value={cfgStart} onChange={(e) => setCfgStart(e.target.value)} placeholder="Ex.: 98,0" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Meta de peso (kg)</label>
              <input type="number" inputMode="decimal" step="0.1" min="0" value={cfgTarget} onChange={(e) => setCfgTarget(e.target.value)} placeholder="Ex.: 80,0" className={inputCls} />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <BeaUI.Button variant="outline" onClick={() => setConfigDialog(false)}>Cancelar</BeaUI.Button>
            <BeaUI.Button loading={saving} onClick={saveConfig}>Salvar</BeaUI.Button>
          </div>
        </div>
      </BeaUI.Dialog>
    </div>
  );
}
