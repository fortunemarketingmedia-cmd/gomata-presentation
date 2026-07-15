"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        router.refresh();
        router.push("/");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#6105A3] via-[#3C0366] to-[#241F24] px-6 py-12 overflow-hidden select-none">
      {/* Subtle grid pattern matching home page aesthetic */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo Container */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl bg-black/10 backdrop-blur-md mb-4 flex items-center justify-center">
            <Image
              src="/logoo.webp"
              alt="Gomata Logo"
              fill
              priority
              className="scale-[1.3] object-cover"
            />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white mt-2">
            <span className="text-[#FFD700]">Gomata</span> Vision
          </h1>
          <p className="text-sm text-white/60 mt-1 font-medium tracking-wide">
            Portal Authentication
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/40 text-red-200 text-sm font-medium rounded-xl p-3 text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white/95 tracking-wide">
                User ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Enter User ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder-white/35 font-medium outline-none focus:border-[#C8A2C8] focus:ring-1 focus:ring-[#C8A2C8] transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white/95 tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="password"
                  required
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl py-3.5 pl-11 pr-4 text-white placeholder-white/35 font-medium outline-none focus:border-[#C8A2C8] focus:ring-1 focus:ring-[#C8A2C8] transition-all text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6105A3] hover:bg-[#75386E] text-white font-bold py-3.5 px-4 rounded-2xl shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider mt-4"
            >
              {loading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
