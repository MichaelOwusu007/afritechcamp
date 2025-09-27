"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  Phone,
  Facebook,
  Chrome,
  Eye,
  EyeOff,
  BookOpen,
  Users,
} from "lucide-react";

interface AuthModalsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAuthSuccess: (userType: "student" | "instructor") => void;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  userType: "student" | "instructor";
  acceptTerms: boolean;
};

export function AuthModals({ open, onOpenChange, onAuthSuccess }: AuthModalsProps) {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    acceptTerms: false,
  });

  const handleInputChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = (userType: "student" | "instructor") => {
    onAuthSuccess(userType);
    onOpenChange(false);
  };

  const handleSignIn = () => {
    onAuthSuccess(formData.userType);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            <div className="gradient-sunset p-2 rounded-xl">
              <GraduationCap aria-hidden="true" className="h-5 w-5 text-primary-foreground" />
            </div>
            Join AfroLearn
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Sign In Tab */}
          <TabsContent value="signin" className="space-y-4">
            <Card>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Welcome Back! 👋</CardTitle>
                <CardDescription>Sign in to continue your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <div className="relative">
                    <Mail
                      aria-hidden="true"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    />
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <div className="relative">
                    <Lock
                      aria-hidden="true"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    />
                    <Input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm">
                    Remember me
                  </Label>
                </div>

                <Button
                  onClick={handleSignIn}
                  className="w-full gradient-sunset text-primary-foreground"
                  size="lg"
                >
                  Sign In
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="lg">
                    <Chrome className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" size="lg">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="text-center">
                <p className="text-sm text-muted-foreground">
                  Forgot password?{" "}
                  <button className="text-primary hover:underline">Reset here</button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup" className="space-y-4">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">Choose Your Learning Path</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className={`cursor-pointer border-2 transition-all ${
                    formData.userType === "student"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleInputChange("userType", "student")}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="gradient-forest p-3 rounded-xl w-fit mx-auto">
                      <BookOpen aria-hidden="true" className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Student</h4>
                      <p className="text-sm text-muted-foreground">Learn and grow</p>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className={`cursor-pointer border-2 transition-all ${
                    formData.userType === "instructor"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleInputChange("userType", "instructor")}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="gradient-sunset p-3 rounded-xl w-fit mx-auto">
                      <Users aria-hidden="true" className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Instructor</h4>
                      <p className="text-sm text-muted-foreground">Teach and inspire</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                      />
                      <Input
                        id="signup-name"
                        placeholder="John Doe"
                        className="pl-10"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-phone">Phone Number</Label>
                    <div className="relative">
                      <Phone
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                      />
                      <Input
                        id="signup-phone"
                        placeholder="+234 800 000 0000"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email Address</Label>
                  <div className="relative">
                    <Mail
                      aria-hidden="true"
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                    />
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                      />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        className="pl-10 pr-10"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm Password</Label>
                    <div className="relative">
                      <Lock
                        aria-hidden="true"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                      />
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="Confirm password"
                        className="pl-10"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptTerms", Boolean(checked))
                    }
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <button className="text-primary hover:underline">Terms of Service</button>
                    &nbsp;and&nbsp;
                    <button className="text-primary hover:underline">Privacy Policy</button>
                  </Label>
                </div>

                <Button
                  onClick={() => handleSignUp(formData.userType)}
                  className="w-full gradient-sunset text-primary-foreground"
                  size="lg"
                  disabled={!formData.acceptTerms}
                >
                  Create Account as {formData.userType === "student" ? "Student" : "Instructor"}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="lg">
                    <Chrome className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" size="lg">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
