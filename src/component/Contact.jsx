// import { motion } from "framer-motion";
// import { Phone, Mail } from "lucide-react"; // Make sure you have these icons installed or replace them with your own
// import { useEffect, useState } from "react";
// import RaspberryEmoji from "../assets/RaspberryEmoji.png"

// const Contact = () => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     state: "",
//     city: "",
//     message: "",
//   });

//   useEffect(()=>{
//     window.scrollTo(0,0)
//   },[])

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSuccessMessage("Your message has been sent successfully!");
//     setTimeout(() => setSuccessMessage(""), 3000);
//   };

//   return (
//     <>
//       <motion.div
//         className="flex flex-col items-center justify-start min-h-screen px-6 py-10 md:py-16"
//         id="contact"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.h1
//           className="text-3xl md:text-4xl font-semibold text-[#f5821f] self-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//         >
//           Contact Us
//         </motion.h1>

//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-center w-full"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           {/* Contact Form */}
//           <motion.div
//             className="w-full md:w-2/5 p-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
//               Drop Us a Message
//             </h2>
//             {successMessage && (
//               <p className="text-green-600 text-center mb-2">
//                 {successMessage}
//               </p>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 required
//                 onChange={handleChange}
//                 value={formData.name}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile Number"
//                 required
//                 onChange={handleChange}
//                 value={formData.mobile}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 required
//                 onChange={handleChange}
//                 value={formData.email}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 name="state"
//                 placeholder="State"
//                 required
//                 onChange={handleChange}
//                 value={formData.state}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 required
//                 onChange={handleChange}
//                 value={formData.city}
//                 className="w-full p-2 border rounded"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 required
//                 onChange={handleChange}
//                 value={formData.message}
//                 className="w-full p-2 border rounded h-24"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="w-full bg-[#f5821f] text-white p-2 rounded hover:bg-[#f5831fca] cursor-pointer"
//               >
//                 Send
//               </button>
//             </form>
//           </motion.div>

//           {/* Information Section */}
//           <motion.div
//             className="w-full md:w-1/2 md:mt-0 md:ml-6 p-6"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
//           >
//             <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//               Something Related to Strawberry & Raspberry
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify md:text-left">
//               Strawberry & Raspberry are not just delicious fruits; they symbolize nature’s
//               sweetness and vitality. Packed with antioxidants, vitamins, and
//               natural goodness, Strawberry & Raspberry offer numerous health benefits,
//               including improved sleep, reduced inflammation, and enhanced heart
//               health. Their vibrant red color and juicy texture make them a
//               favorite ingredient in desserts, beverages, and healthy snacks.{" "}
//               <br />
//               <br />
//               Beyond their taste, Strawberry & Raspberry farming plays a crucial role in
//               sustainable agriculture, promoting eco-friendly practices and
//               supporting local economies. With advancements in technology and
//               organic farming methods, Strawberry & Raspberry are cultivated with care to
//               ensure high quality, freshness, and rich flavor. Whether enjoyed
//               fresh, dried, or in culinary creations, Strawberry & Raspberry continue to be a
//               cherished fruit loved by people worldwide. 🍓 <img src={RaspberryEmoji} alt="" className="inline h-5 w-5 mr-2" />

//             </p>

//             <div className="mt-6 flex flex-col gap-3 items-start">
//               <div className="flex items-center gap-2">
//                 <Phone className="w-5 h-5 text-[#f5821f] mr-2" />
//                 <p className="text-lg font-medium">Phone</p>
//               </div>
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center text-gray-700 pl-8 hover:text-[#f5831fe1] transition"
//               >
//                 <span>+91-7021786968 , 8329652260</span>
//               </a>

//               <div className="flex items-center gap-2">
//                 <Mail className="w-5 h-5 text-[#f5821f] mr-2" />
//                 <p className="text-lg font-medium">Email</p>
//               </div>
//               <a
//                 href="mailto:charry@example.com"
//                 className="flex items-center text-gray-700 pl-10 hover:text-[#f5831fe1] transition"
//               >
//                 <span>ssfberries@gmail.com</span>
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>

//     </>
//   );
// };

// export default Contact;


import React from "react";
import Image from "../assets/images/strr.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-green-900 text-white p-10" id="contact">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={Image}
          alt="Berry Ice Cream"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Right Side - Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 space-y-4">
        <h2
          className="text-3xl font-bold"
          style={{ fontFamily: "'Cooper Black', serif" }}
        >
          Get in touch
        </h2>
        <p >
          603 A Wing, Rupa Solitaire Building, Millennium Business Park,
          <br />
          Navi Mumbai, Ghansoli, Maharashtra, India – 400701
        </p>
        <p>7021786968 | 8329652260</p>
        <a href="mailto:ssfberries@gmail.com" className="text-blue-300">
          ssfberries@gmail.com
        </a>
        <div>
          <p className="font-semibold">Office Hours</p>
          <p>Monday-Saturday: 10am – 6pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
