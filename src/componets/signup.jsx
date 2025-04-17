import React, { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="bg-black text-accent p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none"
                        required
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="otp">
                            OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-20 bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-accent text-black font-bold py-2 rounded-lg hover:bg-[#e05a00] transition duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;