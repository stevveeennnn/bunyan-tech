// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="h-screen w-full">
//       <h1 
//       className='custom-text text-5xl text-teal-500 font-bold text-center relative z-10'
//       style={{
//         paddingTop: '50px',
//         paddingBottom: '100px',
//       }}
//       >
//         Contact Us
//       </h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
//         {/* Left Half - Colored Form Background */}
//         <motion.div
//           className="bg-[#bffef7] h-full flex justify-center items-center rounded-tr-3xl"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="max-w-md w-full px-8"
//           >
//             {/* First + Last Name */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-6">
//               <div className="flex-1">
//                 <input
//                   placeholder='First Name'
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-2"
//                   required
//                 />
//               </div>
//               <div className="flex-1">
//                 <input
//                   placeholder='Last Name'
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-2"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <input
//                 placeholder='Email'
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Phone */}
//             <div className="mb-6">
//               <input
//                 placeholder='Phone Number'
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-10">
//               <textarea
//                 name="message"
//                 placeholder="About your business ........"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className="w-full bg-white rounded-3xl text-[#007f73] p-4 resize-none focus:outline-none"
//                 required
//               />
//             </div>

//             {/* Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//               >
//                 Accept
//               </button>
//             </div>
//           </form>
//         </motion.div>

//         {/* Right Half - White Background + Image */}
//         <motion.div
//           className="bg-white h-full flex items-center justify-center"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="contact_us.png"
//             alt="Contact Illustration"
//             className="max-h-[75%] max-w-[80%] object-contain drop-shadow-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="w-full min-h-[85vh]">
//       <h1
//         className='custom-text text-5xl text-teal-500 font-bold text-center relative z-10'
//         style={{ paddingTop: '40px', paddingBottom: '80px' }}
//       >
//         Contact Us
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
//         {/* Left Half - Form */}
//         <motion.div
//           className="bg-[#bffef7] h-full flex justify-center items-center rounded-tr-3xl"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <form
//             onSubmit={handleSubmit}
//             className="max-w-md w-full px-8"
//           >
//             {/* First + Last Name */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-8">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="First Name"
//                 className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//                 className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-6">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             {/* Phone */}
//             <div className="mb-6">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-10">
//               <textarea
//                 name="message"
//                 placeholder="About your business ........"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5}
//                 className="w-full bg-white rounded-3xl text-[#007f73] p-4 text-lg resize-none focus:outline-none placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             {/* Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//               >
//                 Accept
//               </button>
//             </div>
//           </form>
//         </motion.div>

//         {/* Right Half - Image */}
//         <motion.div
//           className="bg-white h-full flex items-center justify-center"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="contact_us.png"
//             alt="Contact Illustration"
//             className="max-h-[75%] max-w-[80%] object-contain drop-shadow-xl"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="w-full bg-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1
//           className="custom-text text-5xl text-teal-500 font-bold text-center mb-12"
//         >
//           Contact Us
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Half - Form */}
//           <motion.div
//             className="bg-[#bffef7] rounded-tr-3xl flex justify-center items-center py-10 px-4"
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="max-w-md w-full">
//               <div className="flex flex-col sm:flex-row gap-6 mb-8">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-10">
//                 <textarea
//                   name="message"
//                   placeholder="About your business ........"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full bg-white rounded-3xl text-[#007f73] p-4 text-lg resize-none focus:outline-none placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//                 >
//                   Accept
//                 </button>
//               </div>
//             </form>
//           </motion.div>

//           {/* Right Half - Image */}
//           <motion.div
//             className="bg-white flex items-center justify-center py-10 px-4"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="contact_us.png"
//               alt="Contact Illustration"
//               className="max-h-[80%] max-w-[80%] object-contain drop-shadow-xl"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="w-full bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1 className="custom-text text-5xl text-teal-500 font-bold text-center mb-16">
//           Contact Us
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Left Half - Form */}
//           <motion.div
//             className="bg-[#bffef7] rounded-tr-3xl pl-8 pr-6 py-12 flex items-start"
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="w-full max-w-xl">
//               {/* First and Last Name */}
//               <div className="flex flex-col sm:flex-row gap-6 mb-8">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-10">
//                 <textarea
//                   name="message"
//                   placeholder="About your business ........"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full bg-white rounded-3xl text-[#007f73] p-4 text-lg resize-none focus:outline-none placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="text-left">
//                 <button
//                   type="submit"
//                   className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//                 >
//                   Accept
//                 </button>
//               </div>
//             </form>
//           </motion.div>

//           {/* Right Half - Image */}
//           <motion.div
//             className="bg-white flex items-center justify-center py-12 px-4"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="contact_us.png"
//               alt="Contact Illustration"
//               className="w-full max-w-[90%] max-h-[90%] object-contain drop-shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;

// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1 className="mt-8 custom-text text-5xl text-teal-500 font-bold text-center">
//           Contact Us
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8" >
//           {/* Left Half - Form */}
//           <motion.div
//             className="bg-[#bffef7] rounded-tr-3xl pl-8 pr-6 py-12 flex items-start"
//             initial={{ opacity: 0, x: -80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="w-full max-w-xl"
//               style={{ marginTop: 'auto', marginBottom: 'auto'}}>
//               {/* First and Last Name */}
//               <div className="flex flex-col sm:flex-row gap-6 mb-8">
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="First Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Last Name"
//                   className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="mb-10">
//                 <textarea
//                   name="message"
//                   placeholder="About your business ........"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full bg-white rounded-3xl text-[#007f73] p-4 text-lg resize-none focus:outline-none placeholder-[#009f8b]"
//                   required
//                 />
//               </div>

//               <div className="text-left">
//                 <button
//                   type="submit"
//                   className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//                 >
//                   Accept
//                 </button>
//               </div>
//             </form>
//           </motion.div>

//           {/* Right Half - Image */}
//           <motion.div
//             className="bg-white flex items-center justify-center py-12 px-4"
//             initial={{ opacity: 0, x: 80 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//             viewport={{ once: true }}
//           >
//             <img
//               src="contact_us.png"
//               alt="Contact Illustration"
//               className="object-contain drop-shadow-2xl"
//               style={
//                 {
//                   width: '900px',
//                 }
//               }
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


// import React, { useState } from 'react';
// import '../../textStyle.css';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const ContactUsSection = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     navigate('/approved');
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <section className="w-full bg-white">
//       {/* Title */}
//       {/* <h1 className="custom-text text-5xl text-teal-500 font-bold text-center mb-12">
//         Contact Us
//       </h1> */}

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//         {/* Left Half - Form (Stuck to Left Edge) */}
//         <motion.div
//           className="bg-[#bffef7] rounded-tr-3xl w-full flex items-start justify-start py-12 px-8"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <form onSubmit={handleSubmit} className="w-full max-w-xl"
//           style={{
//             marginTop: 'auto',
//             marginBottom: 'auto',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}>
//             {/* First and Last Name */}
//             <div className="flex flex-col sm:flex-row gap-6 mb-8">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="First Name"
//                 className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//                 className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-3 text-lg placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             <div className="mb-10">
//               <textarea
//                 name="message"
//                 placeholder="About your business..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={5}
//                 className="w-full bg-white rounded-3xl text-[#007f73] p-4 text-lg resize-none focus:outline-none placeholder-[#009f8b]"
//                 required
//               />
//             </div>

//             <div className="text-left">
//               <button
//                 type="submit"
//                 className="group bg-teal-500 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
//               >
//                 Accept
//               </button>
//             </div>
//           </form>
//         </motion.div>

//         {/* Right Half - Image */}
//         <motion.div
//           className="bg-white flex items-center justify-center py-12 px-4"
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="contact_us.png"
//             alt="Contact Illustration"
//             className="w-full max-w-[95%] object-contain"
//             style={{
//               width: '800px',
//               height: '800px',
//             }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;


import React, { useState } from 'react';
import '../../textStyle.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactUsSection = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/approved');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Half - Form */}
        <motion.div
          className="bg-[#bffef7] rounded-tr-3xl w-full flex items-start justify-start py-16 px-10"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto"
            style={{
              marginTop: 'auto',
              marginLeft: 'auto',
              marginBottom: 'auto',
              marginRight: 'auto',
            }}
          >
            {/* First and Last Name */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-4 px-4 text-xl placeholder-[#009f8b]"
                required
                style={{ width: '50%' }}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="flex-1 bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-4 px-4 text-xl placeholder-[#009f8b]"
                required
                style={{ width: '50%' }}

              />
            </div>

            {/* Email */}
            <div className="mb-8">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-4 px-4 text-xl placeholder-[#009f8b]"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-8">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent border-b-2 border-[#009f8b] text-[#007f73] outline-none py-4 px-4 text-xl placeholder-[#009f8b]"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <textarea
                name="message"
                placeholder="About your business..."
                value={formData.message}
                onChange={handleChange}
                rows={10}
                className="w-full bg-white rounded-3xl text-[#007f73] p-6 text-xl resize-none focus:outline-none placeholder-[#009f8b]"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="group bg-teal-500 text-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 ease-in-out transform hover:bg-white hover:text-teal-500 hover:scale-105 border-2 border-teal-500"
              >
                Accept
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Half - Image */}
        <motion.div
          className="bg-white flex items-center justify-center py-12 px-4"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
          viewport={{ once: true }}
        >
          <img
            src="contact_us.png"
            alt="Contact Illustration"
            className="w-full object-contain drop-shadow-xl"
            style={{
              width: '800px',
              height: '800px'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
