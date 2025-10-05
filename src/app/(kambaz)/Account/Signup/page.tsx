import Link from "next/link";

export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      style={{
        maxWidth: 300,
        marginTop: 8,
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>Signup</h1>

      <input
        placeholder="username"
        className="wd-username"
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #d0d7de",
          borderRadius: 8,
          outline: "none",
          marginBottom: 10,
        }}
      />

      <input
        placeholder="password"
        type="password"
        className="wd-password"
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #d0d7de",
          borderRadius: 8,
          outline: "none",
          marginBottom: 10,
        }}
      />

      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #d0d7de",
          borderRadius: 8,
          outline: "none",
          marginBottom: 12,
        }}
      />

      <Link
        href="Profile"
        className="text-decoration-none"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          padding: "10px 12px",
          borderRadius: 8,
          background: "#1a73e8",
          color: "#fff",
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        Signup
      </Link>

      <Link href="Signin">Signin</Link>
    </div>
  );
}
