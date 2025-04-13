"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.webp";
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
        <div className="bg-[rgb(230,216,187)] flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="flex flex-col items-center justify-start flex-grow px-4 py-4 gap-y-2">
                <div className="mt-0 md:mt-2 lg:mt-4">
                    <Image src={logo} alt="DateWithNovels Logo" width={400} height={100} />
                </div>

                <Card className="w-full max-w-xl p-4 md:p-8 backdrop-blur-md bg-white bg-opacity-10 text-blue-900">
                    <div className="max-w-xl text-center mb-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-orange-600 text-center flex flex-col items-center justify-center gap-y-1 md:gap-y-2">
                            DateWithNovels
                            <span className="text-blue-800 text-2xl md:text-3xl">Coming Soon!</span>
                        </h1>
                        <p className="text-base md:text-lg leading-relaxed font-semibold text-blue-900 flex flex-col justify-center items-center space-y-2">
                            <span>We’re almost ready to unveil our handcrafted "Blind Date With a Book" experience — personalized just for you.</span>
                            <span>Choose from thoughtfully curated packages that include cozy extras like themed tumblers and surprise goodies.</span>
                            <span>Be the first to know when we launch by signing up below!</span>
                        </p>
                    </div>

                    <div className="w-full max-w-md mx-auto">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-6">
                            <div className="flex flex-col w-full gap-y-4">
                                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-4 md:gap-y-4">
                                    <div className="w-full">
                                        <Label htmlFor="name" className="font-bold text-base text-blue-900">Name</Label>
                                        <Input id="name" placeholder="Your Name" className="text-slate-800 bg-orange-50" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="w-full">
                                        <Label htmlFor="email" className="font-bold text-base text-blue-900">Email</Label>
                                        <Input id="email" type="email" placeholder="Your Email" className="text-slate-800 bg-orange-50" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <Label htmlFor="message" className="font-bold text-base text-blue-900">Leave us a message!</Label>
                                    <textarea id="message" placeholder="Your Message" className="w-full h-32 p-3 text-slate-800 bg-orange-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" value={textMessage} onChange={(e) => setTextMessage(e.target.value)}></textarea>
                                </div>
                            </div>

                            <Button type="submit" className="w-full font-bold text-base md:text-lg p-3 md:p-4" disabled={loading}>
                                {loading ? "Sending..." : "Join Our List"}
                            </Button>
                        </form>

                        {message && (
                            <p className="mt-4 p-2 text-center text-sm md:text-base font-bold rounded-lg bg-green-200 text-green-800">
                                {message}
                            </p>
                        )}
                    </div>

                    <div className="mt-8 text-center">
                        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold text-lg">
                            <a href="https://www.etsy.com/shop/DateWithNovels" target="_blank" rel="noopener noreferrer">
                                Visit Our Etsy Store
                            </a>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}