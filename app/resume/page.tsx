import { redirect } from 'next/navigation';

export default function Resume() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL;
  
  if (!resumeUrl) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Resume Not Available</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Resume URL not configured. Please set the NEXT_PUBLIC_RESUME_URL environment variable.
          </p>
        </div>
      </section>
    );
  }
  
  redirect(resumeUrl);
}