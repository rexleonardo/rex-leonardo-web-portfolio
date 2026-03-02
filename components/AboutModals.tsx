"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { Award, BookOpen, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutModals() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const t = useTranslations("Index.aboutModals");

  const closeModal = () => setActiveModal(null);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setActiveModal("certifications")}
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 px-4 py-3 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          <Award className="w-5 h-5 text-zinc-500" />
          {t("buttons.certifications")}
        </button>
        <button
          onClick={() => setActiveModal("academic")}
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 px-4 py-3 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          <BookOpen className="w-5 h-5 text-zinc-500" />
          {t("buttons.academic")}
        </button>
        <button
          onClick={() => setActiveModal("education")}
          className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 px-4 py-3 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          <GraduationCap className="w-5 h-5 text-zinc-500" />
          {t("buttons.education")}
        </button>
      </div>

      <Modal
        isOpen={activeModal === "certifications"}
        onClose={closeModal}
        title={t("certifications.title")}
      >
        <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
          {(
            t.raw("certifications.items") as Array<{
              name: string;
              date: string;
            }>
          ).map((item, index) => (
            <li key={index} className="flex flex-col gap-1">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {item.name}
              </span>
              <span className="text-sm">{item.date}</span>
            </li>
          ))}
        </ul>
      </Modal>

      <Modal
        isOpen={activeModal === "academic"}
        onClose={closeModal}
        title={t("academic.title")}
      >
        <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
          {(
            t.raw("academic.orgs") as Array<{
              name: string;
              role: string;
              description: string;
              bullets: string[];
            }>
          ).map((org, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
                {org.name}
              </h3>
              <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">
                {org.role}
              </p>
              {org.description ? (
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    {org.description}
                    <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1">
                      {org.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              ) : (
                <ul className="list-disc list-outside ml-5 space-y-1">
                  {org.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === "education"}
        onClose={closeModal}
        title={t("education.title")}
      >
        <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
          {(
            t.raw("education.schools") as Array<{
              name: string;
              degree: string;
              grade: string;
              activitiesLabel: string;
              activities: string[];
              bullets: string[];
            }>
          ).map((school, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1">
                {school.name}
              </h3>
              <div
                className={
                  school.activities.length > 0 || school.bullets.length > 0
                    ? "ml-2 space-y-2"
                    : "ml-2 space-y-1"
                }
              >
                <p>{school.degree}</p>
                <p>{school.grade}</p>
                {school.activitiesLabel && (
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">
                      {school.activitiesLabel}
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                      {school.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {school.bullets.length > 0 && (
                  <ul className="list-disc list-outside ml-5 space-y-1 mt-2 tracking-tight">
                    {school.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
