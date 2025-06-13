// pages/Auth.tsx

import LoginForm from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
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

            <TabsContent value="login">
              <CardHeader>
                <CardTitle>Sign In to Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </TabsContent>

            <TabsContent value="register">
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  );
}
