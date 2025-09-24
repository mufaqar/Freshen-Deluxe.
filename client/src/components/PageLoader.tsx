import LoadingSpinner from "./LoadingSpinner";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

