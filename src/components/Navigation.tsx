import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-2 bg-slate-400">
      <Link href="/">home route</Link>
      <Link href="/error-client">Error on client</Link>
      <Link href="/error-server">Error on server</Link>
    </div>
  );
};
