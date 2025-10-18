"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module: string;
};

type ModuleItem = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
};

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = (db.modules as unknown as ModuleItem[]);

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <ListGroupItem
              key={module._id ?? module.name}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                <div>
                  <BsGripVertical className="me-2 fs-3" /> {module.name}
                </div>
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson) => (
                    <ListGroupItem
                      key={lesson._id ?? lesson.name}
                      className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                      </div>
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
