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
import * as db from "../Database";

type Course = {
  _id: string;
  number?: string;
  code?: string;  
  name?: string;   
  title?: string;  
  description?: string;
  image: string;
};

export default function Dashboard() {
  const courses = db.courses as Course[];


  return (
    <div
      id="wd-dashboard"
      style={{ padding: "20px 16px 40px 140px", overflowX: "hidden" }}
    >
      <style>{`
        @media (max-width: 767.98px) {
          #wd-dashboard { padding-left: 0 !important; }
        }
        @media (min-width: 1920px) {
          .wd-col-5xl {
            flex: 0 0 20%;
            max-width: 20%;
          }
        }
      `}</style>

      <div className="container-fluid px-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <hr />

        <Row className="g-4">
          {courses.map((course) => {
            const code = course.number ?? course.code;
            const title = course.name ?? course.title;
            const image = course.image;

            return (
              <Col
                key={course._id}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
                className="d-flex align-items-stretch wd-col-5xl"
              >
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark w-100"
                >
                  <Card className="h-100 shadow-sm">
                    <CardImg
                      variant="top"
                      src={image}
                      alt={`${code ?? ""} thumbnail`}
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
                        {code ? `${code} ` : ""}{title}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden mb-3"
                        style={{ height: 48, lineHeight: 1.4 }}
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
                        title={`Open ${code ?? title}`}
                        aria-label="Edit course"
                      >
                        <LuNotebookPen />
                      </span>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
