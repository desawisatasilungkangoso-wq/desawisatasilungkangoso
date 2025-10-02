'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

interface ContactFormSimpleProps {
  showForm?: boolean;
  className?: string;
}

export default function ContactFormSimple({ showForm = true, className = "" }: ContactFormSimpleProps) {
  const { lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitors: '',
    visitDate: '',
    subject: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to success page
        window.location.href = '/kontak/sukses';
      } else {
        let errorMessage = 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.';
        try {
          const errorData = await response.json();
          console.error('API Error:', errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error('Error parsing response:', parseError);
          errorMessage = `Server error (${response.status}): ${response.statusText}`;
        }
        alert(`Terjadi kesalahan: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`px-4 sm:px-6 lg:px-8 mb-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 font-poppins">
          {String(lang) === 'id' ? 'Hubungi Kami' : 'Contact Us'}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6 font-poppins max-w-4xl mx-auto leading-relaxed">
          {String(lang) === 'id' 
            ? 'Siap untuk pengalaman tak terlupakan di Desa Wisata Silungkang Oso? Hubungi kami untuk informasi lebih lanjut atau reservasi.'
            : 'Ready for an unforgettable experience at Silungkang Oso Tourism Village? Contact us for more information or reservations.'
          }
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#ffd704] to-[#ffed4e] rounded-full mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="space-y-6 flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
              {String(lang) === 'id' ? 'Informasi Kontak' : 'Contact Information'}
            </h3>
            
            {/* Alamat */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                  {String(lang) === 'id' ? 'Alamat' : 'Address'}
                </h4>
                <p className="text-gray-600 font-poppins leading-relaxed">
                  Desa Silungkang Oso Kec. Silungkang,<br />
                  Kota Sawahlunto Sumatera Barat 27416
                </p>
              </div>
            </div>

            {/* Telepon */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                  {String(lang) === 'id' ? 'Telepon' : 'Phone'}
                </h4>
                <p className="text-gray-600 font-poppins">
                  081277849089
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                  {String(lang) === 'id' ? 'Email' : 'Email'}
                </h4>
                <p className="text-gray-600 font-poppins">
                  fauzanazhima270102@gmail.com
                </p>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#ffd704]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#ffd704]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 font-poppins mb-2">
                  {String(lang) === 'id' ? 'Jam Operasional' : 'Operating Hours'}
                </h4>
                <div className="text-gray-600 font-poppins space-y-1">
                  <p>{String(lang) === 'id' ? 'Senin - Jumat: 08.00 - 17.00 WIB' : 'Monday - Friday: 08:00 - 17:00 WIB'}</p>
                  <p>{String(lang) === 'id' ? 'Sabtu - Minggu: 07.00 - 18.00 WIB' : 'Saturday - Sunday: 07:00 - 18:00 WIB'}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    *{String(lang) === 'id' ? 'Aktivitas wisata tersedia 24 jam' : 'Tourist activities available 24 hours'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Kontak - HTML Form Murni */}
          {showForm && (
            <div className="space-y-6 flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-6">
                {String(lang) === 'id' ? 'Kirim Pesan' : 'Send Message'}
              </h3>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <p className="text-gray-600 font-poppins mb-6">
                  {String(lang) === 'id' 
                    ? 'Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam.'
                    : 'Fill out the form below and we will contact you within 24 hours.'
                  }
                </p>
                
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Nama Lengkap dan No. Telepon dalam 1 baris */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                        {String(lang) === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={String(lang) === 'id' ? 'Masukkan nama lengkap' : 'Enter full name'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                        {String(lang) === 'id' ? 'No. Telepon' : 'Phone No.'} *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="08XXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Email full width */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Email' : 'Email'} *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                      required
                    />
                  </div>
                  
                  {/* Jumlah Pengunjung dan Tanggal Kunjungan dalam 1 baris */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                        {String(lang) === 'id' ? 'Jumlah Pengunjung' : 'Number of Visitors'}
                      </label>
                      <input 
                        type="number" 
                        name="visitors"
                        value={formData.visitors}
                        onChange={handleInputChange}
                        placeholder={String(lang) === 'id' ? 'Contoh: 5' : 'Example: 5'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                        {String(lang) === 'id' ? 'Tanggal Kunjungan' : 'Visit Date'}
                      </label>
                      <div className="relative">
                        <input 
                          type="date" 
                          name="visitDate"
                          value={formData.visitDate}
                          onChange={handleInputChange}
                          placeholder={String(lang) === 'id' ? 'hh/bb/tttt' : 'dd/mm/yyyy'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                        />
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subjek full width */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 font-poppins mb-2">
                      {String(lang) === 'id' ? 'Subjek' : 'Subject'} *
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={String(lang) === 'id' ? 'Reservasi / Informasi / Keluhan' : 'Reservation / Information / Complaint'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffd704] focus:border-transparent font-poppins"
                      required
                    />
                  </div>
                  
                  {/* Form menggunakan API email langsung */}
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ffd704] hover:bg-[#ffed4e] disabled:bg-gray-400 disabled:cursor-not-allowed text-[#102467] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 font-poppins shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#102467]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>{String(lang) === 'id' ? 'Mengirim...' : 'Sending...'}</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>{String(lang) === 'id' ? 'Kirim Pesan' : 'Send Message'}</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 font-poppins text-center leading-relaxed">
                    {String(lang) === 'id' 
                      ? 'Dengan mengirim pesan ini, Anda menyetujui bahwa data pribadi Anda akan digunakan untuk keperluan komunikasi terkait layanan wisata kami.'
                      : 'By sending this message, you agree that your personal data will be used for communication purposes related to our tourism services.'
                    }
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
