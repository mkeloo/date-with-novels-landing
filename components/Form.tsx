"use client";

import { useState, FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FormComponent() {
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
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center">


            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                    <div className="flex-1">
                        <Label htmlFor="name" className="text-slate-600">Name</Label>
                        <Input
                            id="name"
                            placeholder="Your Name"
                            className="text-chart-3 bg-ui-surface placeholder:text-sm placeholder:lg:text-base placeholder:text-slate-500"
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
                            className="text-chart-3 bg-ui-surface placeholder:text-sm placeholder:lg:text-base  placeholder:text-slate-500"
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
                        className="w-full h-32 p-3 text-chart-3 bg-ui-surface placeholder:text-sm placeholder:lg:text-base placeholder:text-slate-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ui-secondary focus:border-ui-secondary"
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                    />
                </div>
            </div>

            <Button
                type="submit"
                className="w-full font-semibold text-base py-4 mt-4 bg-ui-primary hover:bg-ui-secondary text-white rounded-full"
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
    )
}
