export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-signal border-t-transparent animate-spin" />
        <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Loading
        </p>
      </div>
    </div>
  );
}
