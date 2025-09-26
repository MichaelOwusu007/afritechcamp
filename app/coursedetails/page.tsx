import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Layout } from '@/components/layout/Layout';
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Globe,
  Award,
  Play,
  Download,
  Share,
  Heart,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import { mockCourses } from '@/data/mockData';

const courseModules = [
  {
    title: 'Introduction to Modern Web Development',
    duration: '45 min',
    lessons: [
      { title: 'Course Overview & Setup', duration: '12 min', type: 'video', completed: true },
      { title: 'Development Environment Setup', duration: '18 min', type: 'video', completed: true },
      { title: 'Understanding the Web Ecosystem', duration: '15 min', type: 'reading', completed: false },
    ]
  },
  {
    title: 'React Fundamentals',
    duration: '2h 30min',
    lessons: [
      { title: 'What is React?', duration: '20 min', type: 'video', completed: false },
      { title: 'Components and JSX', duration: '35 min', type: 'video', completed: false },
      { title: 'Props and State', duration: '40 min', type: 'video', completed: false },
      { title: 'Practice Exercise', duration: '55 min', type: 'exercise', completed: false },
    ]
  },
  {
    title: 'TypeScript Integration',
    duration: '1h 45min',
    lessons: [
      { title: 'Why TypeScript?', duration: '15 min', type: 'video', completed: false },
      { title: 'Basic Types and Interfaces', duration: '30 min', type: 'video', completed: false },
      { title: 'React with TypeScript', duration: '45 min', type: 'video', completed: false },
      { title: 'Quiz: TypeScript Basics', duration: '15 min', type: 'quiz', completed: false },
    ]
  },
];

const reviews = [
  {
    id: '1',
    name: 'Adaora Nkem',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2024-01-15',
    content: 'Excellent course! Kwame explains everything clearly with practical examples that work in our African context.'
  },
  {
    id: '2', 
    name: 'Samuel Kofi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2024-01-12',
    content: 'This course helped me land a job at a Lagos startup. The content is current and relevant.'
  },
];

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const progress = 15; // Mock progress

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/courses" className="hover:text-primary transition-smooth">Courses</Link>
          <span className="mx-2">/</span>
          <Link href={`/courses?category=${encodeURIComponent(course.category)}`} className="hover:text-primary transition-smooth">
            {course.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{course.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Preview */}
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="gradient-sunset text-primary-foreground">
                  <Play className="mr-2 h-6 w-6" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Course Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                  <Badge variant="outline">{course.language}</Badge>
                  {course.isPopular && <Badge className="gradient-sunset text-primary-foreground">Popular</Badge>}
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-display font-bold leading-tight">
                  {course.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration} total</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Updated {course.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={course.instructorAvatar} />
                    <AvatarFallback>{course.instructor[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{course.instructor}</div>
                    <div className="text-sm text-muted-foreground">Course Instructor</div>
                  </div>
                </div>
              </div>

              {/* Course Content Tabs */}
              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    {courseModules.map((module, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{module.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{module.duration}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                                <div className="flex items-center gap-3">
                                  {lesson.completed ? (
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                  ) : lesson.type === 'video' ? (
                                    <Play className="h-5 w-5 text-muted-foreground" />
                                  ) : lesson.type === 'reading' ? (
                                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                                  ) : lesson.type === 'quiz' ? (
                                    <Award className="h-5 w-5 text-muted-foreground" />
                                  ) : (
                                    <Download className="h-5 w-5 text-muted-foreground" />
                                  )}
                                  <div>
                                    <div className="font-medium text-sm">{lesson.title}</div>
                                  </div>
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {reviews.map(review => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} />
                              <AvatarFallback>{review.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="font-semibold">{review.name}</div>
                                <div className="text-sm text-muted-foreground">{review.date}</div>
                              </div>
                              <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                  <Star key={i} className={`h-4 w-4 ${i <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{review.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={course.instructorAvatar} />
                          <AvatarFallback className="text-xl">{course.instructor[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold">{course.instructor}</h3>
                            <p className="text-muted-foreground">Senior Software Engineer & Educator</p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            With over 8 years of experience in software development across Silicon Valley and Lagos, 
                            {course.instructor} specializes in modern web technologies and has helped train hundreds of 
                            African developers through various bootcamps and online courses.
                          </p>
                          <div className="flex gap-4 text-sm">
                            <div>
                              <span className="font-semibold">4.8</span>
                              <span className="text-muted-foreground ml-1">Instructor Rating</span>
                            </div>
                            <div>
                              <span className="font-semibold">12</span>
                              <span className="text-muted-foreground ml-1">Courses</span>
                            </div>
                            <div>
                              <span className="font-semibold">15,420</span>
                              <span className="text-muted-foreground ml-1">Students</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card className="sticky top-6">
              <CardContent className="p-6 space-y-6">
                {progress > 0 ? (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{progress}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                ) : null}

                <div className="space-y-4">
                  <div className="text-center">
                    {course.isFree ? (
                      <div className="text-3xl font-bold text-secondary mb-2">Free</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold mb-2">${course.price}</div>
                        {course.originalPrice && (
                          <div className="text-lg text-muted-foreground line-through">
                            ${course.originalPrice}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full gradient-sunset text-primary-foreground"
                  >
                    {progress > 0 ? 'Continue Learning' : course.isFree ? 'Enroll for Free' : 'Enroll Now'}
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">This course includes:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}