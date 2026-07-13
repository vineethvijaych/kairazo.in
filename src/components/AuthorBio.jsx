import React from "react";

const AuthorBio = ({ name, role, avatar }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-xl font-bold text-brand-500">
        {avatar || name.charAt(0)}
      </div>
      <div>
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-zinc-400">{role || "Digital Growth Studio"}</div>
      </div>
    </div>
  );
};

export default AuthorBio;
