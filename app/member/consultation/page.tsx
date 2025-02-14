'use client';

import { useState, FormEvent } from 'react';
import Card from '@/app/components/card';

export default function ConsultationPage() {
  const [responseMessage, setResponseMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Collect values from the form using FormData
    const formData = new FormData(event.currentTarget);
    const responses = Array.from(formData.entries())
      .map(([_, value]) => (typeof value === 'string' ? value.trim() : ''))
      .filter((val) => val !== '');

    if (responses.length === 0) {
      setResponseMessage(
        '<p class="text-red-500">Please fill out at least one field to proceed.</p>'
      );
      return;
    }

    setResponseMessage(`
      <h2 class="text-xl font-semibold text-center text-green-600">Thank You for Sharing!</h2>
      <p>Your responses have been recorded. Based on what you've shared, I will now analyze your situation and provide personalized guidance to help you overcome your limitations and achieve your desired outcomes.</p>
      <p>Please stay tuned for further instructions and exercises tailored specifically for your growth journey.</p>
    `);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[800px] mx-auto bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-600">
          Consultation Session for Mental & Spiritual Growth
        </h1>
        <Card
            href="/consultation"
            mainImage="/images/consult.png"
            title="Today you begin to manifest your greatest desires"
            description="Welcome to your personalized consultation session. Together, we will uncover your current state,
          limitations, and aspirations. This process is designed to activate the best version of yourself and help
          you manifest wealth, purpose, influence, peace, joy, leadership, dominion, and affluence."
        />
        <h2 className="text-xl md:text-2xl font-bold text-center text-indigo-600">Let's Begin</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
          <div>
            <p className="font-semibold">
              1. Describe your current mental and emotional state. How do you feel most days?
            </p>
            <textarea
              name="question1"
              rows={4}
              placeholder="Your response here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            ></textarea>
          </div>

          <div>
            <p className="font-semibold">
              2. What are the primary limitations or challenges you face in achieving your goals?
            </p>
            <textarea
              name="question2"
              rows={4}
              placeholder="Your response here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            ></textarea>
          </div>

          <div>
            <p className="font-semibold">
              3. What specific desires or dreams do you wish to manifest in your life?
            </p>
            <textarea
              name="question3"
              rows={4}
              placeholder="Your response here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            ></textarea>
          </div>

          <div>
            <p className="font-semibold">
              4. Are there any recurring thoughts or beliefs that hold you back? Please elaborate.
            </p>
            <textarea
              name="question4"
              rows={4}
              placeholder="Your response here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            ></textarea>
          </div>

          <div>
            <p className="font-semibold">
              5. On a scale of 1 to 10, how committed are you to transforming your life? (1 = Not at all, 10 =
              Fully committed)
            </p>
            <input
              type="number"
              name="question5"
              min={1}
              max={10}
              placeholder="Your rating here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            />
          </div>

          <div>
            <p className="font-semibold">
              6. Is there anything else you'd like to share about your journey so far?
            </p>
            <textarea
              name="question6"
              rows={4}
              placeholder="Your response here..."
              className="w-full p-2 border border-gray-300 rounded-md text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </form>

        {responseMessage && (
          <div
            className="mt-6"
            dangerouslySetInnerHTML={{ __html: responseMessage }}
          ></div>
        )}
      </div>
    </div>
  );
}
