import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Quality Control",
    description:
      "By implementing strict quality checks during the freezing and packaging process, we ensure that customers receive the best fruit with no preservatives, additives, or artificial flavors.",
  },
  {
    title: "Farm Partnerships",
    description:
      "We showcase partnerships with local or sustainable farms to promote ethical sourcing and support farmers.",
  },
  {
    title: "Same-Day or Next-Day Delivery",
    description:
      "Expedited delivery options to meet the needs of time-sensitive orders, particularly for businesses.",
  },
];

const Services = () => {
  return (
    <section className="bg-cream py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl font-bold text-green-900"
          style={{ fontFamily: "'Cooper Black', serif" }}
        >
          What we provide
        </h2>
        <p className="text-green-700 mt-2 mb-8">
          Pure & Sweet Fresh and Frozen Berries
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFC643] rounded-lg p-6 shadow-lg text-green-900 flex flex-col items-center"
            >
              <CheckCircle className="w-10 h-10 text-green-800 mb-3" />
              <h4 className="font-bold text-lg mb-2">{service.title}</h4>
              <p className="text-sm text-green-900 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
