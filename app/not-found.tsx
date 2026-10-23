import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f5ef] px-5 text-center">
      <div>
        <p className="text-xs uppercase tracking-[.3em] text-[#a1844c]">404</p>
        <h1 className="serif mt-4 text-6xl">Property not found.</h1>
        <Link href="/properties" className="mt-8 inline-block bg-[#17231d] px-6 py-4 text-sm font-semibold text-white">Browse Properties</Link>
      </div>
    </main>
  );
}
