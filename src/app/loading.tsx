export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        {/* Animated loading spinner */}
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-tertiary text-lg font-semibold">Loading...</p>
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
