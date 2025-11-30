"use client";

import { useEffect, useState } from "react";
import { FiUsers, FiFilter } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { FormControl } from "react-bootstrap";
import PeopleTable from "../../Courses/[cid]/People/Table/page";
import * as client from "../client";
import "./user.css";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState("");

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchUsers = async () => {
    const allUsers = await client.findAllUsers();
    setUsers(allUsers);
    scrollToTop();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsersByName = async (value: string) => {
    setName(value);
    const term = value.trim();

    if (!term) {
      await fetchUsers();
      return;
    }

    const filtered = await client.findUsersByPartialName(term);
    setUsers(filtered);
    scrollToTop();
  };

  const handleRoleChange = async (value: string) => {
    setRole(value);

    if (!value) {
      await fetchUsers();
      return;
    }

    const filtered = await client.findUsersByRole(value);
    setUsers(filtered);
    scrollToTop();
  };

  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers((prev) => [...prev, user]);
    scrollToTop();
  };

  return (
    <div id="wd-account-users" className="py-3">
      <div className="users-shell">
        <div className="users-header">
          <div className="users-title">
            <FiUsers size={24} className="text-danger me-2" />
            <div>
              <h3 className="mb-0">Users</h3>
              <span className="text-muted small">
                Directory of all Kambaz users
              </span>
            </div>
          </div>

          <div className="users-search flex-grow-1 mx-4">
            <FormControl
              type="text"
              placeholder="Search people by name..."
              value={name}
              onChange={(e) => filterUsersByName(e.target.value)}
              className="wd-filter-by-name"
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="users-role-filter d-flex align-items-center">
              <FiFilter
                className="text-muted me-1 d-none d-md-inline"
                size={16}
              />
              <select
                value={role}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="filter-select"
              >
                <option value="">All roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
              </select>
            </div>

            <button
              type="button"
              onClick={createUser}
              className="btn btn-danger wd-add-people"
            >
              <FaPlus className="me-2" />
              People
            </button>
          </div>
        </div>

        <PeopleTable allUsers={users} fetchAllUsers={fetchUsers} fetchAll={true} />
      </div>
    </div>
  );
}
