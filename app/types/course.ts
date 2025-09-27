// types/course.ts

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Filters {
  categories: string[];
  level: CourseLevel[];
  price: [number, number];
  rating: number;
  language: string[];
  duration: string[];
}
