import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <main className="bg-white p-6 md:max-h-[90vh] md:rounded-4xl md:p-8 md:shadow-2xl dark:bg-slate-600">
          <Image
            src="/face.png"
            alt="Paweł J. Wal's face"
            className="mx-auto mb-8 block h-30 w-30 rounded-full bg-teal-100 object-cover md:hidden dark:bg-teal-900"
            width={120}
            height={120}
          />
          <h1 className="mb-8 text-center text-6xl font-bold text-teal-800 dark:text-teal-500">
            Paweł J. Wal
          </h1>
          <h2 className="mb-8 text-center text-4xl font-bold text-teal-800 dark:text-teal-500">
            hacker, builder, software engineer
          </h2>
          <p className="mt-4 text-center text-2xl" title="e-mail">
            📩<span className="sr-only">e-mail</span>{" "}
            <Link href="mailto:pawel@cooling.coffee" target="_blank">
              pawel@cooling.coffee
            </Link>{" "}
            (
            <Link href="/Paweł J. Wal (7D67CE8A).asc" target="_blank">
              GPG
            </Link>
            )
          </p>
          <p className="mt-4 text-center text-2xl" title="blog">
            📤 <span className="sr-only">blog</span>{" "}
            <Link
              href="https://pjw.lol"
              target="_blank"
              rel="me noopener noreferrer"
            >
              pjw.lol
            </Link>
          </p>
          <p className="mt-4 text-center text-2xl" title="source code">
            🧑🏻‍💻 <span className="sr-only">source code</span>{" "}
            <Link
              href="https://github.com/paweljw"
              target="_blank"
              rel="me noopener noreferrer"
            >
              github.com/paweljw
            </Link>
          </p>
          <p
            className="mt-4 text-center text-2xl"
            title="current projects and companies"
          >
            👷🏻‍♂️ <span className="sr-only">current projects and companies</span>{" "}
            <Link href="https://betterstack.com" target="_blank">
              Better Stack
            </Link>
          </p>
          <p
            className="mt-4 text-center text-2xl"
            title="past projects and companies"
          >
            ⌛ <span className="sr-only">past projects and companies</span>{" "}
            <Link
              href="https://measure.studio"
              target="_blank"
              className="opacity-70"
            >
              Measure Studio
            </Link>
            <br />
            <Link
              href="https://planetgolang.dev"
              target="_blank"
              className="opacity-60"
            >
              Planet Golang
            </Link>
            <br />
            <Link
              href="https://thecodest.co/"
              target="_blank"
              className="opacity-50"
            >
              The Codest
            </Link>
          </p>
        </main>
        <Image
          src="/face.png"
          alt="Paweł J. Wal's face"
          className="hidden h-30 w-30 rounded-full border-white bg-white object-cover shadow-2xl md:absolute md:-top-15 md:-right-15 md:mx-auto md:block dark:border-slate-600 dark:bg-slate-600"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}
