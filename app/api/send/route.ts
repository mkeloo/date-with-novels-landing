import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // Parse the request body
        const { name, email, textMessage } = await req.json();

        if (!name || !email) {
            return new Response(
                JSON.stringify({ error: 'Missing firstName or email in the request body' }),
                { status: 400 }
            );
        }

        // Send the email
        const { data, error } = await resend.emails.send({
            from: 'DateWithNovels <notifications@updates.datewithnovels.com>',
            to: ['datewithnovels@gmail.com'], // Recipient email
            subject: 'New Message from Landing Page 🎉',
            react: await EmailTemplate({ name, email, textMessage }), // Pass dynamic data to the template
        });

        if (error) {
            console.error('Resend Error:', error);
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error('Unexpected Error:', error);
        return new Response(JSON.stringify({ error: 'An unexpected error occurred' }), {
            status: 500,
        });
    }
}
