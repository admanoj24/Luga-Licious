// "use client";

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import axios from "axios";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string().required("Password is required"),
// });

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   const initialValues = {
//     email: "",
//     password: "",
//   };
//   const router = useRouter();
//   if (data?.isLoggedIn) router.push("/");

//   const handleSubmit = async (
//     values: typeof initialValues,
//     { setSubmitting }: any
//   ) => {
//     // Simulate API call

//     const { data } = await axios.post("http://localhost:8080/login", values);
//     toast(data?.message);
//     setTimeout(() => {
//       setSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md shadow-xl">
//         <CardHeader className="space-y-4 text-center">
//           <Image
//             src="/luga.webp"
//             height={200}
//             width={200}
//             alt="logo"
//             className="ml-25"
//           />
//           <div>
//             <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//               Welcome Back to Luga-licious
//             </CardTitle>
//             <CardDescription className="text-gray-600 mt-2">
//               Log in to explore the latest fashion drops.
//             </CardDescription>
//           </div>
//         </CardHeader>

//         <CardContent>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting, errors, touched }) => (
//               <Form className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Field
//                       as={Input}
//                       id="email"
//                       name="email"
//                       type="email"
//                       placeholder="you@example.com"
//                       className={`pl-10 ${
//                         errors.email && touched.email ? "border-red-500" : ""
//                       }`}
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-500 text-sm"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="password">Password</Label>
//                   <div className="relative">
//                     <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                     <Field
//                       as={Input}
//                       id="password"
//                       name="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="••••••••"
//                       className={`pl-10 pr-10 ${
//                         errors.password && touched.password
//                           ? "border-red-500"
//                           : ""
//                       }`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </button>
//                   </div>
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red-500 text-sm"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
//                 >
//                   {isSubmitting ? "Logging in..." : "Login"}
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </CardContent>

//         <CardFooter className="flex flex-col space-y-4">
//           <Separator />
//           <div className="text-center text-sm text-gray-600">
//             Don’t have an account?{" "}
//             <Link
//               href="/register"
//               className="text-pink-600 hover:underline font-medium"
//             >
//               Create one
//             </Link>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<any>(null);
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  // ✅ Redirect if login is successful
  useEffect(() => {
    if (loginData?.isLoggedIn) {
      localStorage.setItem("token", loginData.token); // Optional: store token
      router.push("/");
    }
  }, [loginData, router]);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: any
  ) => {
    try {
      const { data } = await axios.post("http://localhost:8080/login", values);
      setLoginData(data);
      toast(data.message);
    } catch (error: any) {
      toast("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-4 text-center">
          <Image
            src="/luga.webp"
            height={200}
            width={200}
            alt="logo"
            className="ml-25"
          />
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Welcome Back to Luga-licious
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Log in to explore the latest fashion drops.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`pl-10 ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 pr-10 ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Separator />
          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-pink-600 hover:underline font-medium"
            >
              Create one
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
