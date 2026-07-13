import React, { useState, useEffect } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("article h2, article h3");
    const items = Array.from(elements).map((el) => ({
      id: el.id || el.textContent.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      text: el.textContent,
      level: el.tagName,
    }));
    elements.forEach((el, i) => {
      if (!el.id) {
        el.id = items[i].id;
      }
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6" aria-label="Table of contents">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">On This Page</h3>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition ${
                h.level === "H3" ? "ml-4" : ""
              } ${
                activeId === h.id ? "text-brand-500" : "text-zinc-400 hover:text-white"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
