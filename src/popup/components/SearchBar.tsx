interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
        width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      >
        <circle cx="7" cy="7" r="5" />
        <line x1="11" y1="11" x2="15" y2="15" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search subscriptions..."
        className="w-full pl-8 pr-8 py-[7px] text-sm bg-bg-secondary border border-border-color rounded-lg text-text-primary placeholder:text-text-dim focus:outline-none"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm2.8 4.2a.6.6 0 01.85.85L9.4 8.3l2.25 2.25a.6.6 0 01-.85.85L8.55 9.15l-2.25 2.25a.6.6 0 01-.85-.85L7.7 8.3 5.45 6.05a.6.6 0 01.85-.85L8.55 7.45l2.25-2.25z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
