"use client";

import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Form,
  InputGroup,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import {
  FaPlus,
  FaGripVertical,
  FaCheckCircle,
  FaEllipsisV,
  FaChevronDown,
} from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="pt-2">
      <div className="d-flex align-items-center gap-2 mb-3">
        <div className="flex-grow-1 position-relative">
          <BiSearch
            className="position-absolute top-50 translate-middle-y ms-2 text-secondary"
            size={18}
          />
          <input
            type="text"
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control ps-5 shadow-sm"
          />
        </div>

        <button id="wd-add-assignment-group" className="btn btn-secondary px-3">
          + Group
        </button>
        <button id="wd-add-assignment" className="btn btn-danger px-3">
          + Assignment
        </button>
      </div>

      <div
        className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between border rounded-1 bg-light px-2 py-2 mb-2"
        aria-label="Assignments section header"
      >
        <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
          <FaGripVertical className="text-secondary" />
          <button
            type="button"
            className="btn btn-link link-dark text-decoration-none p-0 d-inline-flex align-items-center"
            aria-expanded="true"
            aria-label="Toggle assignments section"
          >
            <FaChevronDown className="me-2" />
            <span className="fw-semibold text-uppercase">Assignments</span>
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Badge bg="light" text="dark" className="border rounded-pill px-3 py-2">
            40% of Total
          </Badge>
          <Button size="sm" variant="light" className="border">
            <FaPlus />
          </Button>
          <Button size="sm" variant="light" className="border">
            <FaEllipsisV />
          </Button>
        </div>
      </div>

      <ListGroup id="wd-assignment-list" className="rounded-0">
        <AssignmentRow
          href="/Courses/1234/Assignments/123"
          title="A1 – ENV + HTML"
          subTop="Multiple Modules"
          subMidStrong="Not available until"
          subMidTail=" May 6 at 12:00 am"
          subBot="Due May 13 at 11:59 pm | 100 pts"
        />
        <AssignmentRow
          href="/Courses/1234/Assignments/124"
          title="A2 – CSS + Bootstrap"
          subTop="Multiple Modules"
          subMidStrong="Available from"
          subMidTail=" May 13"
          subBot="Due May 20 at 11:59 pm | 100 pts"
        />
        <AssignmentRow
          href="/Courses/1234/Assignments/125"
          title="A3 – JavaScript + DOM"
          subTop="Multiple Modules"
          subMidStrong="Available from"
          subMidTail=" May 20"
          subBot="Due May 27 at 11:59 pm | 100 pts"
        />
      </ListGroup>
    </div>
  );
}

function AssignmentRow({
  href,
  title,
  subTop,
  subMidStrong,
  subMidTail,
  subBot,
}: {
  href: string;
  title: string;
  subTop: string;
  subMidStrong: string;
  subMidTail: string;
  subBot: string;
}) {
  return (
    <ListGroup.Item className="p-0 border-0">
      <div className="d-flex align-items-stretch border-top border-bottom bg-white">
        <div
          className="d-flex align-items-center"
          style={{ borderLeft: "3px solid #198754" }}
          aria-hidden
        >
          <FaGripVertical className="text-secondary ms-2 me-2" />
        </div>

        <div className="flex-grow-1 py-3 px-3">
          <div className="d-flex flex-column flex-sm-row align-items-start justify-content-between gap-3">
            <div className="min-w-0">
              <Link
                href={href}
                className="fw-semibold text-decoration-none text-dark d-inline-block mb-1"
                style={{ fontSize: 18 }}
              >
                {title}
              </Link>

              <div className="small text-wrap">
                <span className="text-danger fw-semibold">{subTop}</span>
                <span className="text-muted"> | </span>
                <span className="text-muted">
                  <strong>{subMidStrong}</strong>
                  {subMidTail}
                </span>
              </div>
              <div className="small text-muted">{subBot}</div>
            </div>

            <div className="d-flex align-items-center gap-3 ms-sm-3">
              <FaCheckCircle className="text-success" title="Published" />
              <FaEllipsisV className="text-secondary" role="img" aria-label="More options" />
            </div>
          </div>
        </div>
      </div>
    </ListGroup.Item>
  );
}
