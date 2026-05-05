// src/components/Navbar.jsx

import { Leaf, LogOut, Menu, Search, UserCircle } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import TranslateButton from "./TranslateButton";

const navItems = [
  ["/", "Home"],
  ["/community", "Community"],
  ["/remedies", "Remedies"],
  ["/experts", "Experts"],
  ["/verification", "Verification"],
];

export default function Navbar() {
  const { user, profile, logout } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-sage/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="HerbaCircle"
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="hero-title text-2xl font-bold text-forest md:text-3xl">
            HerbaCircle
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-forest underline decoration-sage decoration-2 underline-offset-[14px]"
                    : "text-stone-700 hover:text-forest"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <TranslateButton />

          <button
            className="hidden rounded-full bg-stone-100 p-3 text-forest hover:bg-mint md:block"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                to={`/profile/${user.uid}`}
                className="hidden rounded-full bg-mint px-4 py-2 text-sm font-bold text-forest md:inline-flex"
              >
                <UserCircle size={18} className="mr-1" />
                {profile?.displayName || "Profile"}
              </Link>

              <button
                onClick={logout}
                className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-white hover:bg-sage"
                title="Logout"
              >
                <LogOut size={16} className="inline" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-forest px-6 py-3 text-sm font-bold text-white shadow-soft hover:bg-sage"
            >
              Sign In
            </Link>
          )}

          <Menu className="lg:hidden" />
        </div>
      </div>
    </header>
  );
}