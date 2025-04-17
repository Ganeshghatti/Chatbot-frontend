"use client";
import React, { useState } from "react";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        otp: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const phoneValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: phoneValue }));
            return;
        }

        if (name === "otp") {
            const otpValue = value.replace(/\D/g, '').slice(0, 4);
            setFormData(prev => ({ ...prev, [name]: otpValue }));
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <main className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
            <div className="bg-black text-accent p-8 rounded-xl shadow-2xl max-w-md w-full mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Sign Up</h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

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

                    <div className="flex items-start gap-4">
                        <div className="flex-1 space-y-2">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium"
                            >
                                Phone Number
                            </label>
                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                                    placeholder="0000000000"
                                    required
                                    minLength={10}
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                />
                            </div>
                        </div>

                        <div className="w-32 space-y-2">
                            <label
                                htmlFor="otp"
                                className="block text-sm font-medium"
                            >
                                OTP
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="otp"
                                    name="otp"
                                    value={formData.otp}
                                    onChange={handleChange}
                                    className="w-full bg-neutral-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
                                    placeholder="0000"
                                    required
                                    minLength={4}
                                    maxLength={4}
                                    pattern="[0-9]{4}"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-accent text-black font-bold py-3 rounded-lg hover:bg-[#e05a00] transition duration-300 mt-6"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-sm text-gray-400 mt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-accent hover:underline">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default SignupPage;