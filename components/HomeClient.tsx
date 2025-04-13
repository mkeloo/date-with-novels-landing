"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.jpg";
import logo from "@/public/logo.webp";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomeClient() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textMessage, setTextMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, textMessage }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Unknown error");
            }

            setMessage("Thanks for signing up! 🎉");
            setName("");
            setEmail("");
            setTextMessage("");
        } catch (error: any) {
            setMessage(`Something went wrong: ${error.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-[rgb(230,216,187)] w-full flex flex-col min-h-screen bg-cover bg-center  items-left justify-center pl-10 py-10" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="w-full h-full flex flex-col items-left justify-center  max-w-screen-2xl mx-auto">
                <Card className="w-full max-w-2xl rounded-3xl px-6 sm:px-10 py-8 bg-vanilla/70 backdrop-blur-md shadow-lg border border-white/40 text-slate-700">
                    <div className="w-full flex flex-col gap-4 items-center justify-center">

                        {/* Top Content */}
                        <div className="w-full flex flex-row items-center justify-between text-left gap-4 md:gap-6">
                            <div className="flex items-center justify-center lg:w-100 lg:h-auto  ">
                                <Image src={logo} alt="DateWithNovels Logo" width={500} height={500} className="w-full h-full object-contain" />
                            </div>

                            <div className="flex flex-col items-center justify-center space-y-4 w-full">
                                <span className="text-slate-600 text-2xl sm:text-3xl md:text-4xl font-semibold text-center">Coming Soon!</span>

                                <p className="text-sm sm:text-base md:text-lg font-normal text-slate-700 leading-relaxed text-center">
                                    We’re almost ready to unveil our handcrafted <strong>"Blind Date With a Book"</strong> experience — personalized just for you.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-normal text-slate-700 leading-relaxed text-center">
                                    Choose from thoughtfully curated packages that include cozy extras like themed tumblers and surprise goodies.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Content - Form */}
                        <div className="w-full flex flex-col justify-center">
                            <form onSubmit={handleSubmit} className=" w-full">

                                <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700 text-center my-4">
                                    Be the first to know when we launch by signing up below!
                                </p>

                                <div className="flex flex-col gap-4 md:gap-6">
                                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                                        <div className="flex-1">
                                            <Label htmlFor="name" className="text-slate-600">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your Name"
                                                className="text-slate-800 bg-uranian placeholder:text-slate-500"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Label htmlFor="email" className="text-slate-600">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Your Email"
                                                className="text-slate-800 bg-uranian placeholder:text-slate-500"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="message" className="text-slate-600">Leave us a message!</Label>
                                        <textarea
                                            id="message"
                                            placeholder="Your Message"
                                            className="w-full h-32 p-3 text-slate-800 bg-uranian placeholder:text-slate-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mauve focus:border-mauve"
                                            value={textMessage}
                                            onChange={(e) => setTextMessage(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full font-semibold text-base py-4 mt-4 bg-amaranth hover:bg-mauve text-white rounded-full"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Join Our List"}
                                </Button>

                                {message && (
                                    <p className="text-center text-sm font-bold rounded-lg bg-green-200 text-green-800 px-4 py-2">
                                        {message}
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>
                </Card>
            </div>
        </div>
    );
}