import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="px-15 pb-15 pt-20 text-center bg-gradient-to-b from-white to-[#112d60]">
      <div className="container mx-auto">
        <div className="inline-block">
          <h2 className="text-4xl font-bold mb-2 text-[#112d60]">Contact Us!</h2>
          <div className="h-1.5 -mx-6 bg-gradient-to-r from-blue-500 to-[#112d60] rounded-full" />
        </div>
        <div className="mx-auto mt-7 text-center text-black">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yamzcomputerz@gmail.com&su=Feedback&body=Hello%20Yamz%20Computer%20Solutions%20Team," 
              target="_blank"
              className="flex items-center justify-center gap-4 group"
            >
              <FaEnvelope className="text-blue-400 text-2xl" />
              <p className="group-hover:text-blue-400 transition-all duration-300">yamzcomputerz@gmail.com</p>
            </a>
            <a 
              href="tel:09753094719" 
              target="_blank"
              className="flex items-center justify-center gap-4 group"
            >
              <FaPhone className="text-blue-400 text-2xl" />
              <p className="group-hover:text-blue-400 transition-all duration-300">(+63) 975 309 4719</p>
            </a>
            <a 
              href="https://maps.app.goo.gl/U2K9WALbfKWe12MG9" 
              target="_blank"
              className="flex items-center justify-center gap-4 group"
            >
              <FaMapMarkerAlt className="text-blue-400 text-2xl" />
              <p className="group-hover:text-blue-400 transition-all duration-300">Gen Aguinaldo St, Poblacion, Iligan City, 9200 Lanao del Norte</p>
            </a>
          </div>
          <div className="mt-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1875110694236!2d124.24095049999998!3d8.2278722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325575e03455668f%3A0x6ffd0e3736cb1ea!2sPhilippine%20Charity%20Sweepstakes%20Office!5e0!3m2!1sen!2sph!4v1730846017528!5m2!1sen!2sph" 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="rounded-lg border-0 w-full max-w-9/10 h-70 lg:h-96 lg:max-w-2/3 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;