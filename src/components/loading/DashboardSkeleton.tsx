export default function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="h-9 bg-gray-200 rounded animate-pulse w-64" />
        <div className="h-6 bg-gray-200 rounded animate-pulse w-96" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
            <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
            <div className="h-5 bg-gray-200 rounded animate-pulse w-20 mt-4" />
          </div>
        ))}
      </div>

      {/* Card Skeletons */}
      <div className="space-y-6">
        <div className="border rounded-lg p-6 space-y-4">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-48" />
          <div className="h-5 bg-gray-200 rounded animate-pulse w-64" />
          <div className="space-y-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-48" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
