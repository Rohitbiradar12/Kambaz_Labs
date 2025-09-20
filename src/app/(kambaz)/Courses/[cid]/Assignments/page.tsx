import Link from "next/link";

export default function Assignments() {
  const wrap: React.CSSProperties = { maxWidth: 760, margin: "16px auto", padding: 8 };
  const toolbar: React.CSSProperties = { display: "flex", gap: 8, alignItems: "center", marginBottom: 12 };
  const search: React.CSSProperties = { flex: 1, padding: 8 };
  const titleRow: React.CSSProperties = { display: "flex", alignItems: "center", gap: 8, margin: "8px 0 12px" };
  const list: React.CSSProperties = { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 };
  const card: React.CSSProperties = {
    border: "1px solid #e5e5e5",
    borderRadius: 8,
    padding: 12,
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  };
  const link: React.CSSProperties = { fontWeight: 600, textDecoration: "none" };
  const meta: React.CSSProperties = { marginTop: 6, fontSize: 14, lineHeight: 1.35, color: "#333" };

  return (
    <div id="wd-assignments" style={wrap}>
      {/* toolbar */}
      <div style={toolbar}>
        <input style={search} placeholder="Search for Assignments" id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      {/* header */}
      <div style={titleRow}>
        <h3 id="wd-assignments-title" style={{ margin: 0 }}>ASSIGNMENTS 40% of Total</h3>
        <button type="button" aria-label="Add">+</button>
      </div>

      {/* list */}
      <ul id="wd-assignment-list" style={list}>
        <li className="wd-assignment-list-item" style={card}>
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" style={link}>
            A1 - ENV + HTML
          </Link>
          <div style={meta}>
            Multiple Modules · <strong>Not available</strong> until May 6 at 12:00am · <strong>Due</strong> May 13 at 11:59pm · <strong>100 pts</strong>
          </div>
        </li>

        <li className="wd-assignment-list-item" style={card}>
          <Link href="/Courses/1234/Assignments/124" className="wd-assignment-link" style={link}>
            A2 - CSS + BOOTSTRAP
          </Link>
          <div style={meta}>
            Multiple Modules · <strong>Not available</strong> until May 13 at 12:00am · <strong>Due</strong> May 20 at 11:59pm · <strong>100 pts</strong>
          </div>
        </li>

        <li className="wd-assignment-list-item" style={card}>
          <Link href="/Courses/1234/Assignments/125" className="wd-assignment-link" style={link}>
            A3 - JAVASCRIPT + REACT
          </Link>
          <div style={meta}>
            Multiple Modules · <strong>Not available</strong> until May 20 at 12:00am · <strong>Due</strong> May 27 at 11:59pm · <strong>100 pts</strong>
          </div>
        </li>
      </ul>
    </div>
  );
}
