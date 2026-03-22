"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function QuotePage() {
  const [gsm, setGsm] = useState(100);
  const [quantity, setQuantity] = useState(1000);
  const [finish, setFinish] = useState("gloss");
  const [estimate, setEstimate] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          gsm,
          quantity,
          finish,
          estimatedCost: estimate
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ fullName: "", company: "", email: "", requirements: "" });
      } else {
        setSubmitStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send inquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Logic for Quote Calculator
  useEffect(() => {
    const basePrice = 0.05; // Base price per sheet
    const gsmMultiplier = gsm / 100;
    const finishMultiplier = finish === "matte" ? 1.15 : 1.0;
    
    // Bulk discount logic
    let bulkDiscount = 1.0;
    if (quantity >= 10000) bulkDiscount = 0.7;
    else if (quantity >= 5000) bulkDiscount = 0.85;

    const total = (quantity * basePrice * gsmMultiplier * finishMultiplier * bulkDiscount);
    setEstimate(total);
  }, [gsm, quantity, finish]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="text-primary text-2xl font-bold uppercase">Uma Offset <span className="text-secondary">Printers</span></Link>
          <Link href="/" className="text-gray-600 hover:text-primary transition font-medium">← Back to Home</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Calculator Section */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h1 className="text-3xl font-bold text-primary mb-8">Instant Print Estimate</h1>
            
            <div className="space-y-8">
              {/* GSM Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Paper Weight (GSM): <span className="text-secondary">{gsm}g</span>
                </label>
                <input 
                  type="range" min="80" max="400" step="10" 
                  value={gsm} onChange={(e) => setGsm(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>80g (Standard)</span>
                  <span>400g (Heavy Card)</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Quantity: <span className="text-secondary">{quantity.toLocaleString()} units</span>
                </label>
                <select 
                  value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary outline-none text-lg font-medium"
                >
                  <option value={500}>500 (Minimum)</option>
                  <option value={1000}>1,000</option>
                  <option value={5000}>5,000 (Bulk Rate)</option>
                  <option value={10000}>10,000 (Industrial Rate)</option>
                  <option value={50000}>50,000+</option>
                </select>
              </div>

              {/* Finish Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Select Finish</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setFinish("gloss")}
                    className={`p-4 rounded-lg border-2 transition-all font-bold ${finish === 'gloss' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-gray-100 text-gray-400'}`}
                  >
                    High Gloss
                  </button>
                  <button 
                    onClick={() => setFinish("matte")}
                    className={`p-4 rounded-lg border-2 transition-all font-bold ${finish === 'matte' ? 'border-secondary bg-secondary/5 text-secondary' : 'border-gray-100 text-gray-400'}`}
                  >
                    Premium Matte
                  </button>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-primary text-white p-8 rounded-xl mt-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-blue-200 text-sm uppercase font-bold tracking-widest mb-1">Estimated Project Cost</div>
                  <div className="text-5xl font-extrabold">${estimate.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="text-xs text-blue-300 mt-4">*Prices are estimates based on standard CMYK offset. Specialized die-cutting or embossing requires manual review.</div>
                </div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-primary mb-6">Submit Formal Inquiry</h2>
            
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" required name="fullName" value={formData.fullName} onChange={handleInputChange}
                    className="w-full p-3 border border-gray-100 rounded-lg focus:border-secondary outline-none bg-gray-50" placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Company</label>
                  <input 
                    type="text" required name="company" value={formData.company} onChange={handleInputChange}
                    className="w-full p-3 border border-gray-100 rounded-lg focus:border-secondary outline-none bg-gray-50" placeholder="Acme Corp" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Corporate Email</label>
                <input 
                  type="email" required name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full p-3 border border-gray-100 rounded-lg focus:border-secondary outline-none bg-gray-50" placeholder="john@acme.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Special Finishing Requirements</label>
                <textarea 
                  rows={4} name="requirements" value={formData.requirements} onChange={handleInputChange}
                  className="w-full p-3 border border-gray-100 rounded-lg focus:border-secondary outline-none bg-gray-50" placeholder="E.g. Spot UV on logo, custom die-cut for handles..."
                ></textarea>
              </div>
              <button 
                type="submit" disabled={isSubmitting}
                className={`w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg mt-4 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processing...
                  </>
                ) : 'Send Project Brief'}
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
