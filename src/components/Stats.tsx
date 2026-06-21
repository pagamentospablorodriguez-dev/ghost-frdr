const stats = [
  { value: '12.847', label: 'status verdes mantidos' },
  { value: '99,98%', label: 'uptime do jiggler' },
  { value: '4h 12min', label: 'poupadas por dia' },
  { value: '0', label: 'suspeitas geradas' },
];

export default function Stats() {
  return (
    <section className="border-y border-hairline bg-ink-900/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:grid-cols-4 sm:px-8">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center">
            <div className="text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1.5 text-xs text-ink-400 sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
