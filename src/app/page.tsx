import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <main className="md:max-h-[90vh] bg-white p-8 rounded-4xl shadow-2xl dark:bg-slate-600">
          <img
            src="/face.png"
            alt="Paweł J. Wal's face"
            className="block md:hidden mx-auto mb-8 w-30 h-30 rounded-full object-cover bg-teal-100 dark:bg-teal-900"
            width={120}
            height={120}
          />
          <h1 className="text-6xl font-bold text-teal-800 dark:text-teal-500 text-center mb-8">
            Paweł J. Wal
          </h1>
          <h2 className="text-4xl font-bold text-teal-700 dark:text-teal-600 text-center mb-8">
            hacker, builder, software engineer, nerd
          </h2>
          <p className="text-center mt-4 text-2xl" title="e-mail">
            📩<span className="sr-only">e-mail</span>{" "}
            <Link href="mailto:pawel@cooling.coffee" target="_blank">
              pawel@cooling.coffee
            </Link>
          </p>
          <p className="text-center mt-4 text-2xl" title="linkedin">
            👤 <span className="sr-only">linkedin</span>{" "}
            <Link
              href="https://www.linkedin.com/in/paweł-wal/"
              target="_blank"
              rel="me noopener noreferrer"
            >
              linkedin.com/in/paweł-wal
            </Link>
          </p>
          <p className="text-center mt-4 text-2xl" title="blog">
            📤 <span className="sr-only">blog</span>{" "}
            <Link
              href="https://cooling.coffee"
              target="_blank"
              rel="me noopener noreferrer"
            >
              cooling.coffee
            </Link>
          </p>
          <p className="text-center mt-4 text-2xl" title="source code">
            🧑🏻‍💻 <span className="sr-only">source code</span>{" "}
            <Link
              href="https://github.com/paweljw"
              target="_blank"
              rel="me noopener noreferrer"
            >
              github.com/paweljw
            </Link>
          </p>
          <p className="text-center mt-4 text-2xl">
            👷🏻‍♂️ <span className="sr-only">stuff I worked on</span>{" "}
            <Link href="https://betterstack.com" target="_blank">
              Better Stack
            </Link>{" "}
            <Link href="https://measure.studio" target="_blank">
              Measure Studio
            </Link>{" "}
            <Link href="https://planetgolang.dev" target="_blank">
              Planet Golang
            </Link>{" "}
          </p>
        </main>
        <img
          src="/face.png"
          alt="Paweł J. Wal's face"
          className="hidden md:block md:mx-auto md:absolute md:-right-15 md:-top-15 w-30 h-30 rounded-full object-cover shadow-2xl bg-white dark:bg-slate-600 border-white dark:border-slate-600"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}
