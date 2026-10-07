import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <h1 className="font-display text-4xl font-bold">Page not found</h1>
      <p className="text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
      >
        Back to home
      </Link>
    </div>
  );
}
