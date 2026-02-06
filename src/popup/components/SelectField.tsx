interface SelectFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}

export default function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] font-medium text-text-primary">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-sm bg-bg-cell rounded-[10px] px-3 py-2 text-text-primary appearance-none pr-8 focus:outline-none"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3.5L5 6.5L8 3.5" />
        </svg>
      </div>
    </div>
  )
}
