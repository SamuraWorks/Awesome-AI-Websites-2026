import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Syscend Marketing AI",
  description: "A practical AI marketing workspace for planning, creating, executing, and improving your marketing.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
