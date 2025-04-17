"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login submitted:", formData);
        // Add your login logic here
    };

    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
            <div className="bg-black text-accent p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-xs text-accent hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                            placeholder="Enter your password"
                            required
                            minLength={6}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-[#e05a00] transition duration-300"
                    >
                        Sign In
                    </button>

                    <p className="text-center text-sm text-gray-400">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-accent hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;