import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

       {/* left panel */}
      <div
        className="hidden md:flex md:w-5/12 min-h-screen flex-col items-center justify-center p-10 gap-6"
        style={{ background: 'linear-gradient(145deg, #FFC107 0%, #FFB300 100%)' }}
      >
       
        <div className="w-full max-w-[300px]">
          <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-lg">

          
            <circle cx="200" cy="190" r="130" fill="white" opacity="0.15"/>

            {/* Doctor  */}
          
            <rect x="155" y="210" width="90" height="100" rx="18" fill="white"/>
          
            <path d="M200 210 l-20 30 h20" fill="#e2e8f0"/>
            <path d="M200 210 l20 30 h-20" fill="#e2e8f0"/>
            
            <rect x="172" y="215" width="56" height="90" rx="10" fill="#bfdbfe"/>
           
            <rect x="155" y="210" width="22" height="100" rx="10" fill="white"/>
            <rect x="223" y="210" width="22" height="100" rx="10" fill="white"/>
           
            <rect x="163" y="245" width="22" height="16" rx="4" fill="#e2e8f0"/>
           
            <rect x="170" y="242" width="3" height="14" rx="1.5" fill="#e53935"/>
            <rect x="175" y="242" width="3" height="14" rx="1.5" fill="#1e40af"/>

           
            <path d="M155 225 Q115 240 108 270" stroke="white" strokeWidth="24" strokeLinecap="round" fill="none"/>
          
            <rect x="72" y="265" width="52" height="64" rx="6" fill="#f1f5f9"/>
            <rect x="88" y="260" width="20" height="10" rx="4" fill="#94a3b8"/>
           
            <rect x="80" y="278" width="36" height="3" rx="1.5" fill="#cbd5e1"/>
            <rect x="80" y="287" width="36" height="3" rx="1.5" fill="#cbd5e1"/>
            <rect x="80" y="296" width="28" height="3" rx="1.5" fill="#cbd5e1"/>
            <rect x="80" y="305" width="32" height="3" rx="1.5" fill="#cbd5e1"/>
         
            <path d="M80 316 l5 5 9-9" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

          
            <path d="M245 225 Q278 215 285 240" stroke="white" strokeWidth="24" strokeLinecap="round" fill="none"/>
           
            <circle cx="287" cy="248" r="12" fill="#fde68a"/>

          
            <path d="M200 215 Q215 215 220 225 Q228 240 220 252 Q212 262 205 258 Q196 254 198 244" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <circle cx="198" cy="240" r="8" fill="#475569"/>
            <circle cx="198" cy="240" r="4" fill="#94a3b8"/>
      
            <circle cx="200" cy="215" r="4" fill="#475569"/>

          
            <rect x="188" y="196" width="24" height="18" rx="10" fill="#fde68a"/>

            
            <circle cx="200" cy="172" r="34" fill="#fde68a"/>

           
            <ellipse cx="200" cy="141" rx="34" ry="13" fill="#1e1b4b"/>
            <ellipse cx="170" cy="158" rx="9" ry="16" fill="#1e1b4b"/>
            <ellipse cx="230" cy="158" rx="9" ry="16" fill="#1e1b4b"/>

         
            <ellipse cx="190" cy="172" rx="4" ry="4.5" fill="#1e1b4b"/>
            <ellipse cx="210" cy="172" rx="4" ry="4.5" fill="#1e1b4b"/>
         
            <circle cx="191.5" cy="170" r="1.2" fill="white"/>
            <circle cx="211.5" cy="170" r="1.2" fill="white"/>

          
            <path d="M183 185 Q200 196 217 185" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.9"/>

        
            <path d="M190 179 Q200 187 210 179" stroke="#e53935" strokeWidth="2" fill="none" strokeLinecap="round"/>

            {/*  health badges  */}
         
            <circle cx="82" cy="130" r="24" fill="white" opacity="0.92"/>
            <path d="M82 140 Q68 128 74 118 Q80 110 82 116 Q84 110 90 118 Q96 128 82 140z" fill="#e53935"/>

         
            <circle cx="318" cy="118" r="24" fill="white" opacity="0.92"/>
            <rect x="313" y="108" width="10" height="20" rx="3" fill="#e53935"/>
            <rect x="308" y="113" width="20" height="10" rx="3" fill="#e53935"/>

           
            <circle cx="330" cy="245" r="22" fill="white" opacity="0.88"/>
            <polyline points="318,245 323,245 326,236 330,254 334,240 337,245 342,245"
              stroke="#e53935" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

           
            <circle cx="70" cy="245" r="20" fill="white" opacity="0.88"/>
            <path d="M70 232 l11 4 v9 c0 7-11 11-11 11s-11-4-11-11v-9z" fill="#22c55e" opacity="0.85"/>
            <path d="M64 245 l4 4 7-7" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

          </svg>
        </div>

        {/* Info Card */}
        <div className="w-full max-w-[280px]">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h1 className="text-xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Please sign in to access your account and continue your journey with us.
            </p>
          
          
            <div className="flex justify-center gap-2 mt-5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-200 inline-block"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Banner  */}
      <div
        className="md:hidden w-full p-6 text-center"
        style={{ background: 'linear-gradient(145deg, #FFC107 0%, #FFB300 100%)' }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back!</h1>
        <p className="text-gray-700 text-sm">Login to continue</p>
      </div>

      {/*  right side  */}
      <div
        className="md:w-7/12 flex items-center justify-center min-h-screen p-6"
        style={{ background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 60%, #f0f4ff 100%)' }}
      >
        <div className="w-full max-w-[420px]">
          {children}
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;
