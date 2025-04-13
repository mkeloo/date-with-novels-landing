import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    textMessage: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    name,
    email,
    textMessage,
}) => (
    <div
        style={{
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f0f8ff",
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
            borderRadius: "12px",
            border: "1px solid #dbeafe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6 rounded-xl shadow-lg border border-blue-200  text-center"
    >
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-900 mb-4  text-center">
                🎉🎉🎉 New Message For <strong>DateWithNovels</strong>  🎉🎉🎉
            </h1>

            {/* User Details */}
            <div className="mb-4 text-lg flex items-center justify-center gap-4 text-left">
                <p className="font-semibold block mb-1 text-lg">
                    <strong>Name:</strong>   <span className="text-gray-700">{name}</span>
                </p>

            </div>

            <div className="mb-4 text-lg flex items-center justify-center gap-4 text-left">
                <p className="font-semibold block mb-1 text-lg">
                    <strong>Email:</strong>   <span className="text-gray-700">{email}</span>
                </p>
            </div>

            <div className="mb-4 text-lg flex items-center justify-center gap-4 text-left">
                <p className="font-semibold block mb-1 text-lg">
                    <strong>Message:</strong>   <span className="text-gray-700">{textMessage}</span>
                </p>
            </div>

            {/* Footer */}
            <p className="text-sm text-gray-600">
                This email was sent to notify you of a new signup on your website.
            </p>
        </div>
    </div >
);
