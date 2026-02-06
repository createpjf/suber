interface TopBarProps {
  onAdd: () => void
  onToggleList: () => void
  onSettings: () => void
  view: 'calendar' | 'list' | 'settings'
}

export default function TopBar({ onAdd, onToggleList, onSettings, view }: TopBarProps) {
  return (
    <header className="relative flex items-center justify-between px-4 py-1 shrink-0">
      {/* Left buttons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onAdd}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-secondary text-text-primary transition-colors cursor-pointer"
          aria-label="Add subscription"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </button>
        <button
          onClick={onToggleList}
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer ${view === 'list' ? 'text-text-primary' : 'text-text-secondary'}`}
          aria-label="Toggle list view"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="2" y1="4" x2="14" y2="4" />
            <line x1="2" y1="8" x2="14" y2="8" />
            <line x1="2" y1="12" x2="14" y2="12" />
          </svg>
        </button>
      </div>

      {/* Centered title with S-knot logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-2">
          <img src="/icons/icon-48.png" alt="" className="w-5 h-5" />
          <span className="text-[15px] font-medium text-text-primary tracking-wide">Suber</span>
        </div>
      </div>

      {/* Right button */}
      <div className="flex items-center">
        <button
          onClick={onSettings}
          className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-bg-secondary transition-colors cursor-pointer ${view === 'settings' ? 'text-text-primary' : 'text-text-secondary'}`}
          aria-label="Settings"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>
    </header>
  )
}
