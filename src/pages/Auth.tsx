import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (field: string, value: string) => {
    setLoginData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegisterChange = (field: string, value: string) => {
    setRegisterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    // Handle login logic here
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt:", registerData);
    // Handle registration logic here
  };

  return (
    <>
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to MediCare</h1>
            <p className="text-muted-foreground">
              Access your account or create a new one
            </p>
          </div>

          <Card>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <CardHeader>
                  <CardTitle>Sign In to Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) =>
                            handleLoginChange("email", e.target.value)
                          }
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) =>
                            handleLoginChange("password", e.target.value)
                          }
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        <span>Remember me</span>
                      </label>
                      <button
                        type="button"
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </form>

                  <div className="relative">
                    <Separator />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-name"
                          type="text"
                          value={registerData.fullName}
                          onChange={(e) =>
                            handleRegisterChange("fullName", e.target.value)
                          }
                          placeholder="Enter your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-email"
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                            handleRegisterChange("email", e.target.value)
                          }
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-phone"
                          type="tel"
                          value={registerData.phone}
                          onChange={(e) =>
                            handleRegisterChange("phone", e.target.value)
                          }
                          placeholder="Enter your phone number"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          value={registerData.password}
                          onChange={(e) =>
                            handleRegisterChange("password", e.target.value)
                          }
                          placeholder="Create a password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
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
                      <Label htmlFor="register-confirm-password">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            handleRegisterChange(
                              "confirmPassword",
                              e.target.value
                            )
                          }
                          placeholder="Confirm your password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 rounded"
                      />
                      <label className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </button>
                      </label>
                    </div>

                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </form>

                  <div className="relative">
                    <Separator />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                      Or continue with
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Facebook
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Auth;
