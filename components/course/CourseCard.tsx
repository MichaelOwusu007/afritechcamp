"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen } from "lucide-react";

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  category: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  level: string;
  language: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  isPopular?: boolean;
  isFree?: boolean;
}

interface CourseCardProps {
  course: Course;
  variant?: "default" | "featured";
}

export function CourseCard({ course, variant = "default" }: CourseCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Card className={`course-card p-0 overflow-hidden ${isFeatured ? "md:flex md:flex-row" : ""}`}>
      {/* Thumbnail */}
      <div className={`relative ${isFeatured ? "md:w-1/2" : ""}`}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className={`w-full object-cover ${isFeatured ? "h-64 md:h-full" : "h-48"}`}
        />
        {course.isPopular && (
          <Badge className="absolute top-3 left-3 gradient-sunset text-primary-foreground">
            Popular
          </Badge>
        )}
        {course.isFree && (
          <Badge className="absolute top-3 right-3 bg-green-600 gradient-forest text-secondary-foreground">
            Free
          </Badge>
        )}
      </div>

      {/* Content */}
      <CardContent className={`p-2 ${isFeatured ? "md:w-1/2 md:flex md:flex-col md:justify-between" : ""}`}>
        <div className="space-y-4">
          {/* Title & Category */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              <span>{course.category}</span>
            </div>
            <h3 className={`font-semibold leading-tight ${isFeatured ? "text-xl" : "text-lg"}`}>
              <Link 
                href={`/courses/${course.id}`} 
                className="hover:text-primary transition-smooth"
              >
                {course.title}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground">
              by {course.instructor}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">{course.rating}</span>
              <span>({course.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">
              {course.level}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {course.language}
            </Badge>
          </div>

          {/* Description only for featured */}
          {isFeatured && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {course.description}
            </p>
          )}
        </div>

        {/* Price & Button */}
        <div className={`flex items-center justify-between ${isFeatured ? "mt-6" : "mt-4"}`}>
          <div className="space-y-1">
            {course.isFree ? (
              <div className="text-xl font-bold text-secondary">Free</div>
            ) : (
              <>
                <div className="text-2xl font-bold text-foreground">${course.price}</div>
                {course.originalPrice && (
                  <div className="text-sm text-muted-foreground line-through">
                    ${course.originalPrice}
                  </div>
                )}
              </>
            )}
          </div>

          <Button asChild className={isFeatured ? "p-2 m-2" : ""}>
            <Link href={`/courses/${course.id}`}>
              {course.isFree ? "Enroll Free" : "View Course"}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
