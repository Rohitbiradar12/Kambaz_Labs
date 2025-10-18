import type { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import { FaAlignJustify } from "react-icons/fa6";
import Breadcrumb from "./Breadcrumb";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

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

      <div className="d-flex align-items-center gap-3">
        <FaAlignJustify className="text-danger" style={{ fontSize: 28 }} />
        <h2 className="text-danger fw m-0">
          <Breadcrumb course={{ name: course?.name ?? "" }} />
        </h2>
      </div>

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
