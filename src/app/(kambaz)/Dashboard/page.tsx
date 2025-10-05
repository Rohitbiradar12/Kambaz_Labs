"use client";

import Link from "next/link";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "react-bootstrap";
import { LuNotebookPen } from "react-icons/lu";

export default function Dashboard() {
  return (
    <div
      id="wd-dashboard"
      style={{ padding: "20px 16px 40px 140px", overflowX: "hidden" }}
    >
       <style>{`
    @media (max-width: 767.98px) {
      #wd-dashboard { padding-left: 0 !important; }
    }
  `}</style>
      <div className="container-xl px-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <hr />

        <Row className="g-4">
          {courses.map((course) => (
            <Col
              key={course.id}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              className="d-flex align-items-stretch"
            >
              <Link
                href={`/Courses/${course.id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark w-100"
              >
                <Card className="h-100 shadow-sm">
                  <CardImg
                    variant="top"
                    src={course.image}
                    alt={`${course.code} thumbnail`}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    }}
                  />
                  <CardBody style={{ minHeight: 130 }}>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.code} {course.title}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden mb-3"
                      style={{ height: 48, lineHeight: 1.2 }}
                    >
                      {course.description}
                    </CardText>
                    <span
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: 36,
                        height: 32,
                        borderRadius: 8,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "#fff",
                        color: "#6c757d",
                      }}
                      title={`Open ${course.code}`}
                      aria-label="Edit course"
                    >
                      <LuNotebookPen />
                    </span>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

const courses = [
  {
    id: "1234",
    code: "CS1234",
    title: "React JS",
    description: "Full Stack software developer",
    image: "/reactjs.jpg",
  },
  {
    id: "CS5610",
    code: "CS5610",
    title: "Next.js Web Development",
    description: "App Router, Routing, Deployment",
    image: "/next.jpg",
  },
  {
    id: "CS1100",
    code: "CS1100",
    title: "HTML & CSS",
    description: "Semantic HTML, Lists, Tables, Forms",
    image: "/HTML.png",
  },
  {
    id: "CS2000",
    code: "CS2000",
    title: "JavaScript Fundamentals",
    description: "Syntax, DOM, Events",
    image: "/js.png",
  },
  {
    id: "CS3200",
    code: "CS3200",
    title: "Databases",
    description: "SQL, ER Modeling, Joins",
    image: "/database.jpg",
  },
  {
    id: "CS4500",
    code: "CS4500",
    title: "DevOps Foundations",
    description: "CI/CD, Containers, Cloud Basics",
    image: "/devops.svg",
  },
  {
    id: "CS600",
    code: "CS600",
    title: "Data Structure and Algorithms",
    description: "Data Structure and Algorithms",
    image: "/dsa.png",
  },
];
