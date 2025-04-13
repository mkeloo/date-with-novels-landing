import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.webp";

export default function Logo() {
    return (
        <div className="flex items-center justify-center w-44 h-auto rounded-3xl bg-gradient-to-br from-ui-accent/20 via-ui-accent to-ui-accent/20 p-3">
            <Image src={logo} alt="DateWithNovels Logo" width={500} height={500} className="w-full h-full object-contain" />
        </div>
    )
}
