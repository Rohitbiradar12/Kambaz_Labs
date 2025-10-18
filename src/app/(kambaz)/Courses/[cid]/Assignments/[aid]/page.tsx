// app/(kambaz)/Courses/[cid]/Assignments/[aid]/page.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";

type Assignment = {
  _id: string;
  title: string;
  description: string;
  course: string;
  available: string; 
  due: string;       
  until: string;     
  points: number;
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const assignments = db.assignments as unknown as Assignment[];
  const assignment = assignments.find((a) => a._id === aid);

  return (
    <div
      id="wd-assignments-editor"
      style={{ padding: "16px 24px", maxWidth: 960, margin: "0 auto" }}
    >
      <style>{`
        :root { --label-col: 220px; --field-col: 560px; }
        .form-row { display: grid; grid-template-columns: var(--label-col) var(--field-col); align-items: start; column-gap: 12px; row-gap: 12px; }
        .row-span > .span-full { grid-column: 1 / -1; width: 100%; }
        .row-label { text-align: right; font-weight: 400; margin: 0; line-height: 1.2; color:#111; }
        .row-label.left { text-align: left; }
        .field-col { display: flex; align-items: center; }
        .panel { width: 100%; border: 1px solid rgba(0,0,0,0.1); border-radius: 6px; background: #fff; padding: 12px; box-sizing: border-box; }
        .panel-muted { background: #f6f7f8; }
        .stacked { display: flex; flex-direction: column; gap: 6px; }
        .two-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; }
        .actions { display: flex; justify-content: flex-end; gap: 8px; }
        .plain-field { width: 100%; }
        .plain-field .form-control, .plain-field .form-select { width: 100%; }
        .panel .form-control, .panel .form-select, .panel input[type="text"], .panel input[type="number"], .panel input[type="datetime-local"], .panel select { width: 100%; }
        @media (max-width: 992px) {
          #wd-assignments-editor { padding-left: 16px; padding-right: 16px; }
          :root{ --label-col: clamp(140px, 22vw, 200px); --field-col: minmax(0, 1fr); }
          .form-row { grid-template-columns: var(--label-col) 1fr; }
        }
        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr; }
          .row-label { text-align: left; }
          .field-col, .panel, .plain-field { width: 100%; }
          .two-cols { grid-template-columns: 1fr; }
          .actions { justify-content: stretch; gap: 10px; }
          .actions .btn { flex: 1; }
        }
      `}</style>

      <div className="form-row row-span mb-3">
        <div className="span-full">
          <div className="stacked">
            <label htmlFor="wd-name" className="row-label left">Assignment Name</label>
            <input
              id="wd-name"
              defaultValue={assignment?.title ?? ""}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="form-row row-span mb-3">
        <div className="span-full">
          <div className="panel panel-muted">
            <p style={{ marginBottom: 8 }}>
              The assignment is <span className="text-danger">available online</span>.
            </p>
            <p style={{ margin: 0 }}>
              {assignment?.description ?? ""}
            </p>
          </div>
        </div>
      </div>

      <div className="form-row mb-3">
        <label htmlFor="wd-points" className="row-label">Points</label>
        <div className="field-col">
          <div className="plain-field">
            <input
              id="wd-points"
              defaultValue={String(assignment?.points ?? 0)}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="form-row mb-3">
        <label htmlFor="wd-group" className="row-label">Assignment Group</label>
        <div className="field-col">
          <div className="plain-field">
            <select id="wd-group" defaultValue="EXAMS" className="form-select">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-row mb-3">
        <label htmlFor="wd-display-grade-as" className="row-label">Display Grade as</label>
        <div className="field-col">
          <div className="plain-field">
            <select id="wd-display-grade-as" defaultValue="Letter Grade" className="form-select">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
              <option>GPA</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-row mb-3">
        <label className="row-label">Submission Type</label>
        <div className="field-col">
          <div className="panel">
            <select id="wd-submission-type" defaultValue="On Paper" className="form-select mb-2">
              <option>Online</option>
              <option>On Paper</option>
              <option>External Tool</option>
            </select>

            <div className="stacked">
              <div className="fw-semibold">Online Entry Options</div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-website-url" defaultChecked />
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wd-file-uploads" />
                <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-row mb-3">
        <label className="row-label">Assign</label>
        <div className="field-col">
          <div className="panel">
            <div className="stacked mb-3">
              <label htmlFor="wd-assign-to" className="fw-semibold">Assign to</label>
              <input id="wd-assign-to" defaultValue="Everyone" className="form-control" />
            </div>

            <div className="stacked mb-3">
              <label htmlFor="wd-due-date" className="fw-semibold">Due</label>
              <input
                type="datetime-local"
                id="wd-due-date"
                defaultValue={assignment?.due ?? ""}
                className="form-control"
              />
            </div>

            <div className="two-cols">
              <div className="stacked">
                <label htmlFor="wd-available-from" className="fw-semibold">Available from</label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  defaultValue={assignment?.available ?? ""}
                  className="form-control"
                />
              </div>
              <div className="stacked">
                <label htmlFor="wd-available-until" className="fw-semibold">Until</label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  defaultValue={assignment?.until ?? ""}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="actions mt-3">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-light">Cancel</Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}
