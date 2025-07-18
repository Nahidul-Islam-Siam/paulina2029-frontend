"use client"

import LogInImage from "@/assets/4.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAdminLoginMutation } from "@/redux/api/auth"
import { LockIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import Cookies from "js-cookie";
import { useDispatch } from "react-redux"
import { setUser } from "@/redux/features/user/userSlice"

export default function AdminLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const [signIn] = useAdminLoginMutation()
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }

        const response = await signIn(data);
        console.log(response);
        if (response && response.data) {
            Cookies.set("token", response.data.token);
            dispatch(
                setUser({
                    user: {
                        id: response.data.data._id,
                        name: response.data.data.name,
                        email: response.data.data.email,
                    },
                    token: response.data.token,
                }))
            router.push("/admin/dashboard");
            toast.success('WellCome Admin')
        } else {
            toast.error("Wrong Credential")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* Background Image */}
            {/* <Image
                src={LogInImage}
                alt="Medical professional using a laptop"
                layout="fill"
                objectFit="cover"
                className="z-0"
            /> */}

            {/* Overlay */}
            <div className="absolute inset-0  z-10"></div>

            {/* Login Form */}
            <Card className="w-full m-4 max-w-md z-20 bg-transparent backdrop-blur-xl">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access the admin dashboard
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@medsense.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 border-gray-200 focus:ring-pink-500 focus:border-pink-500 bg-white"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 border-gray-200 focus:ring-pink-500 focus:border-pink-500 bg-white"
                                    required
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                            Sign in
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                            ← Back to main site
                        </Link>
                    </div>
                </CardContent>
            </Card>

            {/* Welcome Text */}
            <div className="absolute bottom-8 left-8 text-white z-20">
                <h2 className="md:text-4xl text-xl font-bold mb-4">Welcome to Explain My Meds Admin</h2>
                <p className="md:text-xl">
                    Manage and monitor your AI-powered medication information system
                </p>
            </div>
        </div>
    )
}