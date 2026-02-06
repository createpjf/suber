import { useState } from 'react'
import { useSubscriptionStore } from '@/popup/store'
import { useDebounce } from '@/popup/hooks/useDebounce'
import { useFilteredSubscriptions, type SortBy } from '@/popup/hooks/useFilteredSubscriptions'
import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import SubCard from './SubCard'
import type { Subscription, SubscriptionStatus } from '@/shared/types'

interface ListViewProps {
  onEdit: (sub: Subscription) => void
}

export default function ListView({ onEdit }: ListViewProps) {
  const subscriptions = useSubscriptionStore((s) => s.subscriptions)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<SubscriptionStatus | 'all'>('all')
  const [sortBy, setSortBy] = useState<SortBy>('nextBilling')
  const debouncedSearch = useDebounce(search)

  const filtered = useFilteredSubscriptions(subscriptions, debouncedSearch, statusFilter, sortBy)

  return (
    <div className="flex flex-col h-full">
      {/* Controls */}
      <div className="px-3 pt-3 space-y-1.5 shrink-0">
        <SearchBar value={search} onChange={setSearch} />
        <div className="flex items-center justify-between">
          <FilterBar value={statusFilter} onChange={setStatusFilter} />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="text-[10px] bg-bg-cell border-none rounded-lg px-2.5 py-1.5 text-text-secondary focus:outline-none ml-2 shrink-0 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%228%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22%23888%22%3E%3Cpath%20d%3D%22M4%206l4%204%204-4%22%20stroke%3D%22%23888%22%20stroke-width%3D%222%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_6px_center] pr-5"
          >
            <option value="nextBilling">Next billing</option>
            <option value="name">Name</option>
            <option value="amount">Amount</option>
            <option value="dateAdded">Date added</option>
          </select>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-text-secondary">
            <p className="text-3xl mb-2">
              {subscriptions.length === 0 ? '\uD83D\uDCE6' : '\uD83D\uDD0D'}
            </p>
            <p className="text-sm">
              {subscriptions.length === 0
                ? 'No subscriptions yet'
                : 'No matching subscriptions'}
            </p>
            {subscriptions.length === 0 && (
              <p className="text-xs mt-1">Tap + to add your first one</p>
            )}
          </div>
        ) : (
          filtered.map((sub) => (
            <SubCard key={sub.id} subscription={sub} onClick={() => onEdit(sub)} />
          ))
        )}
      </div>
    </div>
  )
}
