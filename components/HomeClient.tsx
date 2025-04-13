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
        <div className="bg-[rgb(230,216,187)] flex flex-col min-h-screen bg-cover bg-center items-center justify-center px-4 py-10" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <Card className="w-full max-w-5xl rounded-3xl p-6 md:p-10 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 text-blue-900">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center space-y-4">
                        <Image src={logo} alt="DateWithNovels Logo" width={250} height={60} className="object-contain" />
                        <span className="text-blue-800 text-xl md:text-2xl font-semibold">Coming Soon!</span>

                        <p className="text-base md:text-lg font-medium text-blue-900 text-left lg:text-center">
                            We’re almost ready to unveil our handcrafted "Blind Date With a Book" experience — personalized just for you.
                            <br />
                            Choose from thoughtfully curated packages that include cozy extras like themed tumblers and surprise goodies.
                        </p>

                        <div className="pt-6 text-center">
                            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold text-lg">
                                <a href="https://www.etsy.com/shop/DateWithNovels" target="_blank" rel="noopener noreferrer">
                                    Visit Our Etsy Store
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 text-center">DateWithNovels</h1>

                            <p className="text-base md:text-lg font-medium text-blue-900 text-left lg:text-center">
                                Be the first to know when we launch by signing up below!
                            </p>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                                <div className="flex-1">
                                    <Label htmlFor="name" className="font-bold text-blue-900">Name</Label>
                                    <Input id="name" placeholder="Your Name" className="text-slate-800 bg-orange-50" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="flex-1">
                                    <Label htmlFor="email" className="font-bold text-blue-900">Email</Label>
                                    <Input id="email" type="email" placeholder="Your Email" className="text-slate-800 bg-orange-50" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="message" className="font-bold text-blue-900">Leave us a message!</Label>
                                <textarea id="message" placeholder="Your Message" className="w-full h-32 p-3 text-slate-800 bg-orange-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" value={textMessage} onChange={(e) => setTextMessage(e.target.value)} />
                            </div>

                            <Button type="submit" className="w-full font-bold text-lg py-3" disabled={loading}>
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
    );
}