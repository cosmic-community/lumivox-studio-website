"use client"

export default function ErrorPage({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center text-linen px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-display mb-2">Something went wrong</h1>
        <p className="text-pewter mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-iris text-white rounded-full hover:bg-coral transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}