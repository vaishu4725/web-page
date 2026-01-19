
import React from 'react';
import Navbar from './components/Navbar';
import ChatDemo from './components/ChatDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Join 50k+ students learning with AI
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Unlock Your Potential with <span className="gradient-text">Personalized</span> AI Tutoring.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Lumina provides 1-on-1 expert guidance across every subject. From solving complex equations to mastering new languages, our AI adapts to your unique learning style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transition-all transform hover:-translate-y-1">
                Start Learning Free
              </button>
              <button className="px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group">
                Watch how it works
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="Student" 
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">4.9/5 stars</span> from over 10k reviews
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-200/50 rounded-full blur-3xl" />
            <img 
              src="https://picsum.photos/seed/learn/800/600" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white object-cover aspect-[4/3]" 
              alt="Student learning" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-100 animate-bounce-slow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Topic Mastered</p>
                <p className="font-bold text-gray-900">Quantum Physics 101</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-60">
          <span className="text-2xl font-black italic tracking-tighter">STANFORD</span>
          <span className="text-2xl font-black italic tracking-tighter">MIT</span>
          <span className="text-2xl font-black italic tracking-tighter">HARVARD</span>
          <span className="text-2xl font-black italic tracking-tighter">OXFORD</span>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Experience the <span className="gradient-text">Future</span> of Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Try a mini-session with Lumina right now. Ask any question and watch her explain it in seconds.</p>
        </div>
        <ChatDemo />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Instant Explanations",
              desc: "Get deep-dive explanations for any topic in real-time. No more waiting for office hours.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              color: "bg-amber-100 text-amber-600"
            },
            {
              title: "Step-by-Step Solving",
              desc: "Upload a photo of your homework and Lumina will guide you through the logic, not just give the answer.",
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              color: "bg-blue-100 text-blue-600"
            },
            {
              title: "Adaptive Learning",
              desc: "Lumina remembers your progress and adjusts her teaching style to match your pace and proficiency.",
              icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              color: "bg-purple-100 text-purple-600"
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group">
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10">Ready to Ace Your Next Exam?</h2>
          <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Join thousands of students who have already improved their grades by an average of 40% using Lumina.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold shadow-2xl hover:bg-gray-50 transition-all text-lg">
              Get Started for Free
            </button>
            <button className="px-10 py-5 bg-indigo-500 text-white border border-indigo-400 rounded-2xl font-bold hover:bg-indigo-400 transition-all text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Lumina AI</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering learners through next-generation artificial intelligence. Personalized education for everyone, everywhere.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-800 hover:bg-indigo-500 transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-20 pt-8 text-center text-sm">
          © 2025 Lumina AI Tutoring Inc. All rights reserved. Built with Gemini AI.
        </div>
      </footer>
    </div>
  );
};

export default App;
