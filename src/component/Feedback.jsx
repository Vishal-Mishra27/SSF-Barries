
import React from "react";

const testimonials = [
  {
    name: "Gopal Krishna Gupta",
    role: "Fruit Vendor",
    image:
      "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6837.jpg",
    rating: 4,
    feedback:
      "I love how convenient and fresh these frozen berries are! I don't have to worry about them going bad.",
  },
  {
    name: "Hari Lal Omkar",
    role: "Baker",
    image:
      "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6837.jpg",
    rating: 5,
    feedback:
      "I love how convenient and fresh these frozen berries are! I don't have to worry about them going bad.",
  },
  {
    name: "Roma Vora",
    role: "Dietician",
    image:
      "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6837.jpg",
    rating: 3,
    feedback:
      "I love how convenient and fresh these frozen berries are! I don't have to worry about them going bad.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-green-800" : "text-gray-400"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 shadow-inner py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl font-bold text-green-900 mb-8"
          style={{ fontFamily: "'Cooper Black', serif" }}
        >
          Our Track Record
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-green-300 rounded-lg p-6 shadow-lg text-green-900"
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-3 italic text-justify">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-justify">({testimonial.role})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
