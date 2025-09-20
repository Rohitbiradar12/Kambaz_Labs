import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  // inline style helpers (no external CSS)
  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    alignItems: "start",
  };
  const card: React.CSSProperties = {
    display: "block",
    background: "#fff",
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
    padding: 12,
    textDecoration: "none",
    color: "inherit",
  };
  const thumbWrap: React.CSSProperties = { textAlign: "center", marginBottom: 8 };
  const title: React.CSSProperties = { margin: "6px 0 4px 0" };
  const subtitle: React.CSSProperties = { margin: 0, fontSize: 14, lineHeight: 1.3, color: "#333" };

  return (
    <div id="wd-dashboard" style={{ padding: 16 }}>
      <h1 id="wd-dashboard-title" style={{ marginBottom: 8 }}>Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" style={{ margin: "12px 0" }}>Published Courses (6)</h2>
      <hr style={{ marginBottom: 16 }} />

      <div id="wd-dashboard-courses" style={grid}>
        {/* Card 1 */}
        <Link href="/Courses/CS1234" style={card}>
          <div style={thumbWrap}>
            <Image src="https://commons.wikimedia.org/wiki/Special:FilePath/React-icon.svg" width={220} height={120} alt="React JS" />
          </div>
          <h5 style={title}>CS1234 React JS</h5>
          <p style={subtitle}>Full Stack Software Developer</p>
        </Link>

        {/* Card 2 */}
        <Link href="/Courses/CS5610" style={card}>
          <div style={thumbWrap}>
            <Image src="/next.svg" width={220} height={120} alt="Next.js Web Development" />
          </div>
          <h5 style={title}>CS5610 Next.js Web Development</h5>
          <p style={subtitle}>App Router, Routing, Deployment</p>
        </Link>

        {/* Card 3 */}
        <Link href="/Courses/CS1100" style={card}>
          <div style={thumbWrap}>
            <Image src="/HTML.png" width={220} height={120} alt="HTML & CSS" />
          </div>
          <h5 style={title}>CS1100 HTML &amp; CSS</h5>
          <p style={subtitle}>Semantic HTML, Lists, Tables, Forms</p>
        </Link>

        {/* Card 4 */}
        <Link href="/Courses/CS2000" style={card}>
          <div style={thumbWrap}>
            <Image src="/JS.png" width={220} height={120} alt="JavaScript Fundamentals" />
          </div>
          <h5 style={title}>CS2000 JavaScript Fundamentals</h5>
          <p style={subtitle}>Syntax, DOM, Events</p>
        </Link>

        {/* Card 5 */}
        <Link href="/Courses/CS3200" style={card}>
          <div style={thumbWrap}>
            <Image src="/database.jpg" width={220} height={120} alt="Databases" />
          </div>
          <h5 style={title}>CS3200 Databases</h5>
          <p style={subtitle}>SQL, ER Modeling, Joins</p>
        </Link>

        {/* Card 6 */}
        <Link href="/Courses/CS4500" style={card}>
          <div style={thumbWrap}>
            <Image src="/devops.svg" width={220} height={120} alt="DevOps Foundations" />
          </div>
          <h5 style={title}>CS4500 DevOps Foundations</h5>
          <p style={subtitle}>CI/CD, Containers, Cloud Basics</p>
        </Link>
      </div>
    </div>
  );
}
