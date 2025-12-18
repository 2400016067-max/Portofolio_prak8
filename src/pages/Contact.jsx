import React from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

function Contact() {
  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* KOLOM KIRI: Informasi Utama */}
        <div className="bg-blue-600 p-10 text-white md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Let's Connect!</h1>
            <p className="text-blue-100 leading-relaxed mb-8">
              Saya selalu terbuka untuk diskusi tentang Sistem Informasi, coding, atau peluang kolaborasi proyek.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">Email</p>
                  <a href="mailto:emailmu@student.university.ac.id" className="font-medium hover:underline">
                    2400016067@webmail.uad.ac.id
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold tracking-wider">Lokasi</p>
                  <p className="font-medium">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
             <p className="text-sm text-blue-200 mb-4">Temukan saya di sosial media:</p>
             <div className="flex gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                  <Github size={20} />
                </a>
             </div>
          </div>
        </div>

        {/* KOLOM KANAN: Call to Action (CTA) */}
        <div className="p-10 md:w-1/2 bg-gray-50 flex flex-col justify-center items-center text-center">
          <div className="bg-white p-6 rounded-full shadow-sm mb-6">
            <Mail size={48} className="text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Punya Pertanyaan?</h2>
          <p className="text-gray-500 mb-8 max-w-xs mx-auto">
            Apakah Anda tertarik dengan proyek saya atau ingin menawarkan kesempatan magang?
          </p>
          
          <a 
            href="mailto:emailmu@student.university.ac.id" 
            className="group flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Kirim Email Sekarang
            <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;