"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
import * as client from "../client";

type PeopleTableProps = {
  allUsers?: any[];
  fetchAllUsers?: () => Promise<void> | void;
  fetchAll?: boolean;
};

type User = {
  _id: string;
  firstName?: string;
  lastName?: string;
  loginId?: string;
  section?: string;
  role?: string;
  lastActivity?: string;
  totalActivity?: string;
};

function normalizeUsers(input: any): User[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((u): u is User => !!u && typeof u === "object" && !!u._id)
    .map((u) => ({
      _id: String(u._id),
      firstName: u.firstName ?? "",
      lastName: u.lastName ?? "",
      loginId: u.loginId ?? "",
      section: u.section ?? "",
      role: u.role ?? "",
      lastActivity: u.lastActivity ?? "",
      totalActivity: u.totalActivity ?? "",
    }));
}

export default function PeopleTable({
  allUsers,
  fetchAllUsers,
  fetchAll = false,
}: PeopleTableProps) {
  const { cid } = useParams<{ cid: string }>();

  const [users, setUsers] = useState<User[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const fetchUsersForCourse = async () => {
    if (!cid) return;
    const data = await client.findUsersForCourse(String(cid));
    setUsers(normalizeUsers(data));
  };

  useEffect(() => {
    if (fetchAll) {
      setUsers(normalizeUsers(allUsers));
    } else {
      fetchUsersForCourse();
    }
  }, [fetchAll, allUsers, cid]);

  const openDetails = (id: string) => {
    if (!id) return;
    setShowUserId(id);
    setShowDetails(true);
  };

  const closeDetails = async () => {
    setShowDetails(false);
    setShowUserId(null);

    if (fetchAll) {
      await fetchAllUsers?.();
    } else {
      await fetchUsersForCourse();
    }
  };

  const safeUsers = useMemo(() => users.filter((u) => u && u._id), [users]);

  return (
    <div id="wd-people-table" className="position-relative">
      {showDetails && showUserId && (
        <PeopleDetails uid={showUserId} onClose={closeDetails} />
      )}

      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {safeUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <button
                  type="button"
                  className="btn btn-link p-0 text-decoration-none text-danger"
                  onClick={() => openDetails(user._id)}
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  {(user.firstName || "Unknown") + " " + (user.lastName || "")}
                </button>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
