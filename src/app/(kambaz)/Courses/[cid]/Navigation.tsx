import Link from "next/link";
export default function CourseNav({ cid }: { cid: string }) {
  return (
    <nav aria-label="Course navigation">
      <ul>
        <li><a href={`/Courses/${cid}/Home`}>Home</a></li>
        <li><a href={`/Courses/${cid}/Modules`}>Modules</a></li>
        <li><a href={`/Courses/${cid}/Piazza`}>Piazza</a></li>
        <li><a href={`/Courses/${cid}/Zoom`}>Zoom</a></li>
        <li><a href={`/Courses/${cid}/Quizzes`}>Quizzes</a></li>
        <li><a href={`/Courses/${cid}/Assignments`}>Assignments</a></li>
        <li><a href={`/Courses/${cid}/Grades`}>Grades</a></li>
        <li><a href={`/Courses/${cid}/People`}>People</a></li>
      </ul>
    </nav>
  );
}


