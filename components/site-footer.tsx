export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <p className="text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} Asra Sharib
        </p>
      </div>
    </footer>
  )
}