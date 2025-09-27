import { Suspense } from "react";
import CoursesContent from "../courses/CourseContent";

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading courses...</div>}>
      <CoursesContent />
    </Suspense>
  );
}
