export default function CourseStatus() {
  const box: React.CSSProperties = {
    maxWidth: 640,
    margin: "16px auto",
    padding: 16,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    background: "#fff",
  };
  const group: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: 8,
  };

  return (
    <section
      id="wd-course-status"
      aria-labelledby="wd-course-status-title"
      style={box}
    >
      <h2 id="wd-course-status-title" style={{ marginTop: 0, marginBottom: 8 }}>
        Course Status
      </h2>

    
      <div style={group}>
        <button type="button" aria-pressed="false">
          Unpublish
        </button>
        <button type="button" aria-pressed="true">
          Publish
        </button>
      </div>

  
      <div style={{ ...group, marginTop: 12 }}>
        <button type="button">Import Existing Content</button>
        <button type="button">Import From Commons</button>
        <button type="button">Choose Home Page</button>
      </div>

     
      <div aria-label="Course tools" style={{ ...group, marginTop: 12 }}>
        <button type="button">View Course Stream</button>
        <button type="button">New Announcement</button>
        <button type="button">New Analytics</button>
        <button type="button">View Course Calendar</button>
        <button type="button">View Course Notifications</button>
      </div>
    </section>
  );
}
