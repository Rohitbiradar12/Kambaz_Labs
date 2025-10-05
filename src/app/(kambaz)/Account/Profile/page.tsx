import Link from "next/link";

export default function Profile() {
  const field = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d0d7de",
    borderRadius: 8,
    outline: "none" as const,
    marginBottom: 10,
  };

  return (
    <div id="wd-profile-screen" style={{ maxWidth: 300, marginTop: 8 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Profile</h1>

      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username"
        style={field}
      />

      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password"
        style={field}
      />

      <input
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
        style={field}
      />

      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        style={field}
      />

      <input
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        style={field}
      />

      <input
        defaultValue="alice@wonderland.com"
        type="email"
        id="wd-email"
        style={field}
      />

      <select
        defaultValue="USER"
        id="wd-role"
        style={field}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link
        href="Signin"
        className="text-decoration-none"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "10px 12px",
          borderRadius: 8,
          background: "#dc3545",
          color: "#fff",
          fontWeight: 600,
          marginTop: 4,
        }}
      >
        Signout
      </Link>
    </div>
  );
}
