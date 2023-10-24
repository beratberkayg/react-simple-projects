import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      Merhaba
      <Link href="/hakkimizda">Hakkımızda</Link>
      <Link href="/docs/post-1">Post 1</Link>
      <Link href="/docs/post-1/post-2">Post 2</Link>
      <Link
        className="text-2xl"
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "Next.js",
          },
        }}
      >
        Hakkımızda Obje İle
      </Link>
    </main>
  );
}
