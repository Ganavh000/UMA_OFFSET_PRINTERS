import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      {/* Printer's Color Control Bar */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-cmyk-cyan"></div>
        <div className="flex-1 bg-cmyk-magenta"></div>
        <div className="flex-1 bg-cmyk-yellow"></div>
        <div className="flex-1 bg-cmyk-key"></div>
        <div className="flex-1 bg-pantone"></div>
        <div className="flex-1 bg-white border-l border-gray-100 flex items-center justify-center text-[6px] font-mono text-gray-400">REGISTRATION_MARK_V1</div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-2 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-cmyk-cyan opacity-80 shadow-sm"></div>
                <div className="w-5 h-5 rounded-full bg-cmyk-magenta opacity-80 shadow-sm"></div>
                <div className="w-5 h-5 rounded-full bg-cmyk-yellow opacity-80 shadow-sm"></div>
              </div>
              <span className="text-primary text-2xl font-black tracking-tighter uppercase">Uma Offset <span className="text-cmyk-cyan">Printers</span></span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-primary font-medium hover:text-secondary transition">Home</Link>
              <Link href="#services" className="text-gray-600 font-medium hover:text-secondary transition">Services</Link>
              <Link href="#industries" className="text-gray-600 font-medium hover:text-secondary transition">Industries</Link>
              <Link href="/quote" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition">Get Quote</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary-dark">
        {/* Macro Orange Slice Background with Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=2070" 
            alt="Macro orange slice - Color Precision"
            className="w-full h-full object-cover opacity-50 scale-110 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-pantone/10 border border-pantone/20 text-pantone text-sm font-bold tracking-widest uppercase">
              Precision 4-Color CMYK & Pantone
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white uppercase italic tracking-tighter">
              Industrial Offset <span className="text-pantone drop-shadow-sm">Color Perfected.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              Cost-effective high-volume solutions for corporate clients and publishers. 
              Precision CMYK & Pantone (PMS) spot color matching with industrial quick turnarounds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="inline-block bg-pantone hover:bg-pantone-dark text-white text-center font-black uppercase tracking-widest py-4 px-10 rounded-none transition-all transform hover:scale-105 shadow-lg shadow-pantone/20">
                Get CMYK Quote
              </Link>
              <Link href="#portfolio" className="inline-block border-2 border-white/30 hover:bg-white/10 text-white text-center font-bold py-4 px-10 rounded-lg transition">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Industrial-Grade Finishing</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Beyond standard ink, we provide high-end specialized finishing that defines quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Cyan */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-xl transition-all border-t-8 border-cmyk-cyan group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 text-cmyk-cyan font-black text-6xl select-none">C</div>
              <div className="w-12 h-12 bg-cmyk-cyan/10 rounded-none flex items-center justify-center mb-6 text-cmyk-cyan group-hover:bg-cmyk-cyan group-hover:text-white transition">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4 italic">Embossing & Debossing</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Add tactile depth to your luxury packaging and corporate stationary with precision mechanical die-pressing.
              </p>
            </div>

            {/* Service 2 - Magenta */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-xl transition-all border-t-8 border-cmyk-magenta group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 text-cmyk-magenta font-black text-6xl select-none">M</div>
              <div className="w-12 h-12 bg-cmyk-magenta/10 rounded-none flex items-center justify-center mb-6 text-cmyk-magenta group-hover:bg-cmyk-magenta group-hover:text-white transition">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4 italic">Precision Die-Cutting</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Custom-shaped products and packaging designed for high-speed assembly and structural integrity.
              </p>
            </div>

            {/* Service 3 - Yellow */}
            <div className="bg-white p-8 rounded-none shadow-sm hover:shadow-xl transition-all border-t-8 border-cmyk-yellow group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10 text-cmyk-yellow font-black text-6xl select-none">Y</div>
              <div className="w-12 h-12 bg-cmyk-yellow/10 rounded-none flex items-center justify-center mb-6 text-cmyk-yellow group-hover:bg-cmyk-yellow group-hover:text-black transition">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>  
              </div>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tighter mb-4 italic">Spot UV & Foil</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                High-gloss selective coating and metallic foil stamping for premium brochures and product labels.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-extrabold text-secondary mb-2">5M+</div>
            <div className="text-blue-200 uppercase tracking-widest text-sm font-bold">Monthly Impressions</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-secondary mb-2">0.01%</div>
            <div className="text-blue-200 uppercase tracking-widest text-sm font-bold">Error Tolerance</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-secondary mb-2">24h</div>
            <div className="text-blue-200 uppercase tracking-widest text-sm font-bold">Response Time</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold text-secondary mb-2">99%</div>
            <div className="text-blue-200 uppercase tracking-widest text-sm font-bold">Repeat Clients</div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Industries We Serve</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Precision printing tailored to the unique demands of diverse industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Publishing", desc: "High-volume book & magazine production.", color: "border-cmyk-cyan", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "Corporate", desc: "Premium annual reports & marketing kits.", color: "border-cmyk-magenta", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { name: "FMCG", desc: "Durable packaging & high-impact labels.", color: "border-cmyk-yellow", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { name: "Pharmaceutical", desc: "Compliant leaflets & precision boxes.", color: "border-cmyk-key", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }
            ].map((industry, i) => (
              <div key={i} className={`group p-8 border-2 border-gray-100 rounded-none hover:${industry.color} hover:bg-gray-50 transition-all duration-300`}>
                <div className="w-12 h-12 bg-gray-100 rounded-none flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary transition">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={industry.icon}></path></svg>
                </div>
                <h3 className="text-xl font-black text-primary mb-3 uppercase tracking-tighter italic">{industry.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Print Portfolio</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              A showcase of our high-volume precision work for global brands and publishers.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="relative overflow-hidden rounded-xl group bg-gray-100 break-inside-avoid">
                <img 
                  src={`/images/${num}.webp`} 
                  alt={`Print Sample ${num}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Corporate Project</p>
                    <h4 className="text-lg font-bold">High-Volume Print Run</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-left">Client Trust</h2>
              <div className="w-20 h-1.5 bg-secondary"></div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 text-primary font-bold">
              <span className="text-2xl">4.9/5</span>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-gray-400 font-normal">Based on 150+ Google Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-8 right-8 text-gray-100">
                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017V14C7.017 11.7909 5.2261 10 3.017 10H2.017V7H3.017C6.883 7 10.017 10.134 10.017 14V21H2.017Z" /></svg>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">RK</div>
                <div>
                  <h4 className="font-bold text-primary">Rajesh Kumar</h4>
                  <p className="text-xs text-gray-400">Marketing Director, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The color matching at Uma Offset Printers is phenomenal. We've done several high-volume runs for our annual catalogs, and the precision is consistent every single time."</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-8 right-8 text-gray-100">
                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017V14C7.017 11.7909 5.2261 10 3.017 10H2.017V7H3.017C6.883 7 10.017 10.134 10.017 14V21H2.017Z" /></svg>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">AS</div>
                <div>
                  <h4 className="font-bold text-primary">Anita Sharma</h4>
                  <p className="text-xs text-gray-400">Founder, Bloom Publishing</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Fastest turnaround we've experienced in the industry. They handled a 50,000 unit book print with specialized embossing in record time. Highly recommended for bulk runs."</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-8 right-8 text-gray-100">
                <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017V14C7.017 11.7909 5.2261 10 3.017 10H2.017V7H3.017C6.883 7 10.017 10.134 10.017 14V21H2.017Z" /></svg>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold">VP</div>
                <div>
                  <h4 className="font-bold text-primary">Vikram Patel</h4>
                  <p className="text-xs text-gray-400">CEO, Patel Beverages</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The die-cutting and packaging quality is world-class. Uma Offset Printers helped us redesign our product boxes, and the final result boosted our shelf presence significantly."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Visit Our Facility</h2>
              <div className="w-20 h-1.5 bg-secondary mb-8"></div>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We welcome corporate partners to visit our high-capacity printing facility. 
                Our experts are available for technical consultations on finishing and color matching.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Our Facility</h4>
                    <p className="text-gray-600">No 3, Green Court, 173,<br />Perumbakkam Main Rd, Medavakkam,<br />Chennai, Tamil Nadu 600100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Contact Details</h4>
                    <p className="text-gray-600">Phone: 098405 92237<br />Email: hello@umaoffset.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Operating Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 08:00 AM - 09:00 PM<br />Digital Quotes: 24/7 Online Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Iframe */}
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.636841253457!2d80.1912442750756!3d12.931086387380295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d88f6c32d4b%3A0xc6c7320f7194f4c!2sPerumbakkam%20Main%20Rd%2C%20Medavakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711040000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="flex -space-x-1">
              <div className="w-3 h-3 rounded-full bg-cmyk-cyan"></div>
              <div className="w-3 h-3 rounded-full bg-cmyk-magenta"></div>
              <div className="w-3 h-3 rounded-full bg-cmyk-yellow"></div>
            </div>
            <div className="text-primary text-xl font-black uppercase tracking-tighter">Uma Offset <span className="text-cmyk-cyan">Printers</span></div> 
          </div>
          <p className="text-gray-500 text-sm font-mono tracking-tighter">© 2026 Uma Offset Printers // 4-COLOR_PROCESS_VERIFIED</p>
        </div>
        <div className="h-4 w-full flex">
          <div className="flex-1 bg-cmyk-cyan opacity-50"></div>
          <div className="flex-1 bg-cmyk-magenta opacity-50"></div>
          <div className="flex-1 bg-cmyk-yellow opacity-50"></div>
          <div className="flex-1 bg-cmyk-key opacity-50"></div>
          <div className="flex-1 bg-pantone opacity-50"></div>
        </div>
      </footer>

    </div>
  );
}
