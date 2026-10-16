import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f2ee] dark:bg-[#090b0e] text-[#0d0d0d] dark:text-[#f4f2ee] p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white dark:bg-[#13171e] border border-[#0d0d0d]/10 dark:border-white/10 shadow-xl">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <div>
          <span className="font-mono-tech text-xs uppercase tracking-widest text-[#77756f] dark:text-[#94928d] block mb-2 font-bold">
            404 — Access Denied / Not Found
          </span>
          <h1 className="text-3xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#77756f] dark:text-[#94928d] mt-2 font-mono-tech">
            The requested route does not exist or has been relocated.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0d0d] dark:bg-emerald-400 text-white dark:text-[#0d0d0d] font-mono-tech text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
