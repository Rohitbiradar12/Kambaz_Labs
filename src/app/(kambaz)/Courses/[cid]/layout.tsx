import type { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-courses">
      <style>{`
        #wd-courses {
          padding-left: 0px;
          padding-right: 16px;
          padding-top: 8px;
        }
        @media (min-width: 768px) {
          #wd-courses { padding-left: 140px; }
        }
      `}</style>

      <h2 className="mb-2">Course {cid}</h2>
      <hr className="mt-2" />

      <div className="d-flex gap-4">
        <aside
          aria-label="Course navigation"
          className="d-none d-md-block"
          style={{ width: 220, minWidth: 220 }}
        >
          <CourseNavigation cid={cid} />
        </aside>

        <main className="flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
