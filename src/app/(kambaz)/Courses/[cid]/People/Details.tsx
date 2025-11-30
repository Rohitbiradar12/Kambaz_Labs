"use client";

import { useEffect, useState } from "react";
import { FormControl, FormSelect } from "react-bootstrap";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../Account/client";

type PeopleDetailsProps = {
  uid: string | null;
  onClose: () => void;
};

export default function PeopleDetails({ uid, onClose }: PeopleDetailsProps) {
  const [user, setUser] = useState<any | null>(null);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const fetchUser = async () => {
    if (!uid) return;
    const u = await client.findUserById(uid);
    setUser(u);
    setName(`${u.firstName ?? ""} ${u.lastName ?? ""}`.trim());
    setEmail(u.email ?? "");
    setRole(u.role ?? "");
    setEditing(false);
  };

  const deleteUser = async (id: string) => {
    await client.deleteUser(id);
    onClose();
  };

  const saveUser = async () => {
    if (!user || !uid) return;

    const trimmed = name.trim();
    const [firstName = "", ...rest] = trimmed.split(" ");
    const lastName = rest.join(" ");

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      role,
    };

    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose(); 
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
    } else {
      setUser(null);
      setEditing(false);
    }
  }, [uid]);

  if (!uid || !user) return null;

  return (
    <aside
      className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white shadow-lg p-4"
      style={{ width: "25%", minWidth: 280, zIndex: 1050 }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close details"
        className="btn btn-link position-absolute top-0 end-0 mt-2 me-2 p-0 wd-close-details"
      >
        <IoCloseSharp className="fs-2 text-secondary" />
      </button>

      <div className="text-center mt-3 mb-3">
        <FaUserCircle className="text-secondary" style={{ fontSize: "3rem" }} />
      </div>

      <hr className="mt-1 mb-3" />

      <div className="text-danger fs-4 mb-2 position-relative">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
            role="button"
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save text-success"
            role="button"
          />
        )}

        {!editing && (
          <div
            className="wd-name pe-4"
            onClick={() => setEditing(true)}
            style={{ cursor: "pointer" }}
          >
            {user.firstName} {user.lastName}
          </div>
        )}

        {editing && (
          <FormControl
            className="w-75 wd-edit-name mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                saveUser();
              }
            }}
          />
        )}
      </div>

      <p className="mb-1">
        <b>Roles:</b>{" "}
        {editing ? (
          <FormSelect
            size="sm"
            className="d-inline-block ms-1 wd-edit-role"
            style={{ maxWidth: 180, display: "inline-block" }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">STUDENT</option>
            <option value="TA">TA</option>
            <option value="FACULTY">FACULTY</option>
            <option value="ADMIN">ADMIN</option>
          </FormSelect>
        ) : (
          <span className="wd-roles ms-1">{user.role}</span>
        )}
      </p>

      <p className="mb-1">
        <b>Email:</b>{" "}
        {editing ? (
          <FormControl
            type="email"
            size="sm"
            className="d-inline-block ms-1 wd-edit-email"
            style={{ maxWidth: 260, display: "inline-block" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span className="wd-email ms-1">{user.email}</span>
        )}
      </p>

      <p className="mb-1">
        <b>Login ID:</b>{" "}
        <span className="wd-login-id">{user.loginId}</span>
      </p>
      <p className="mb-1">
        <b>Section:</b>{" "}
        <span className="wd-section">{user.section}</span>
      </p>
      <p className="mb-3">
        <b>Total Activity:</b>{" "}
        <span className="wd-total-activity">{user.totalActivity}</span>
      </p>

      <hr className="mb-3" />

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="btn btn-secondary wd-cancel"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => uid && deleteUser(uid)}
          className="btn btn-danger wd-delete"
        >
          Delete
        </button>
      </div>
    </aside>
  );
}
