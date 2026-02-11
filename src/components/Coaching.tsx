
import { FC } from "react";

export const Coaching: FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Coaching</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          We offer personalized coaching services to help you achieve your goals.
        </p>
        <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
            </button>
        </div>
      </div>
    </section>
  );
};
