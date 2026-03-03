export default function Loading() {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center text-linen">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-iris border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-pewter">Loading Lumivox Studio…</p>
      </div>
    </div>
  )
}