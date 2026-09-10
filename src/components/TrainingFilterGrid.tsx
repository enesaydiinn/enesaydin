"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { CourseCard } from "@/components/CourseCard";
import type { CorporateTraining } from "@/data/corporate-trainings";

export function TrainingFilterGrid({ trainings }: { trainings: CorporateTraining[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tümü");
  const [institution, setInstitution] = useState("Tümü");

  const categories = useMemo(
    () => [
      "Tümü",
      ...Array.from(
        new Set(trainings.flatMap((training) => training.categories ?? [training.category]))
      )
    ],
    [trainings]
  );
  const institutions = useMemo(
    () => ["Tümü", ...Array.from(new Set(trainings.map((training) => training.institution)))],
    [trainings]
  );
  const filteredTrainings = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    return trainings.filter((training) => {
      const matchesQuery =
        !normalizedQuery ||
        [
          training.title,
          training.category,
          ...(training.categories ?? []),
          training.institution,
          training.description
        ]
          .join(" ")
          .toLocaleLowerCase("tr-TR")
          .includes(normalizedQuery);
      const matchesCategory =
        category === "Tümü" || (training.categories ?? [training.category]).includes(category);
      const matchesInstitution = institution === "Tümü" || training.institution === institution;

      return matchesQuery && matchesCategory && matchesInstitution;
    });
  }, [category, institution, query, trainings]);

  return (
    <div>
      <div className="grid gap-4 rounded-lg border border-brand-line bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_1fr_1fr]">
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Arama
          <span className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-h-11 w-full rounded-md border border-brand-line pl-10 pr-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
              placeholder="Eğitim, kategori veya kurum ara"
              type="search"
            />
          </span>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Kategori
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-11 rounded-md border border-brand-line bg-white px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-brand-ink">
          Kurum
          <select
            value={institution}
            onChange={(event) => setInstitution(event.target.value)}
            className="min-h-11 rounded-md border border-brand-line bg-white px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
          >
            {institutions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm font-medium text-brand-muted">
        {filteredTrainings.length} eğitim listeleniyor
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTrainings.map((course) => (
          <CourseCard course={course} key={course.slug} />
        ))}
      </div>
    </div>
  );
}
