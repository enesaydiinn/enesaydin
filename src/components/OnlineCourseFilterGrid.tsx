"use client";

import { useMemo, useState } from "react";

import { OnlineCourseCard } from "@/components/OnlineCourseCard";
import type { OnlineCourse } from "@/data/online-courses";

export function OnlineCourseFilterGrid({ courses }: { courses: OnlineCourse[] }) {
  const [platform, setPlatform] = useState("Tümü");
  const platforms = useMemo(
    () => ["Tümü", "Udemy", "BTK Akademi", "Uphop", "TutorialsPoint", "Diğer"],
    []
  );
  const filteredCourses = useMemo(
    () => courses.filter((course) => platform === "Tümü" || course.platform === platform),
    [courses, platform]
  );

  return (
    <div>
      <div className="flex flex-col gap-3 rounded-lg border border-brand-line bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <label className="grid w-full gap-2 text-sm font-semibold text-brand-ink sm:max-w-xs">
          Platform
          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value)}
            className="min-h-11 rounded-md border border-brand-line bg-white px-3 text-sm font-normal text-brand-ink outline-none transition focus:border-brand-blue"
          >
            {platforms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <p className="text-sm font-medium text-brand-muted">
          {filteredCourses.length} çevrim içi eğitim listeleniyor
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {filteredCourses.map((course) => (
          <OnlineCourseCard course={course} key={`${course.platform}-${course.title}`} />
        ))}
      </div>
    </div>
  );
}
