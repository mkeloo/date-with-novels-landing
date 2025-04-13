"use client";

import bgImage from "@/public/bg.jpg";
import { Card } from "@/components/ui/card";
import FormComponent from "./Form";
import Logo from "./Logo";
import Content from "./Content";

export default function HomeClient() {

    return (
        <div className="w-full flex flex-col min-h-screen bg-cover bg-center  items-center justify-center px-4 md:px-20 lg:px-40 py-10" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="w-full h-full flex flex-col items-center lg:items-start justify-center max-w-screen-2xl mx-auto">

                <Card className=" bg-ui-accent/70 w-full max-w-lg rounded-3xl px-3 md:px-6 !gap-4 backdrop-blur-md shadow-lg border border-white/40 text-slate-700">

                    <div className="w-full flex items-center justify-center">
                        <Logo />
                    </div>

                    {/* Bottom Content - Form */}
                    <div className="w-full flex flex-col justify-center gap-4">

                        <Content />

                        <FormComponent />

                    </div>
                </Card>
            </div>
        </div>
    );
}