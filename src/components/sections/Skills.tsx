export default function Skills() {
  const skills = [
    {
      category: "Business",
      skills: "Marketing strategy, go-to-market, sales growth, digital marketing, lead generation, SEM, SEO, Leadership, Content marketing",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      textColor: "text-blue-900",
      animation: (
        <div className="absolute -left-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Static bottom part of briefcase */}
            <rect x="30" y="100" width="140" height="70" rx="4" 
                  className="fill-white stroke-black stroke-[4]" />
      
            {/* Top lid that opens and disappears */}
            <g className="origin-bottom opacity-100 group-hover:animate-briefcase-sequence">
              {/* Closed briefcase top */}
              <path d="M30 40 h140 v60 h-140 z" 
                    className="fill-white stroke-black stroke-[4]" />
              {/* Handle */}
              <rect x="85" y="50" width="30" height="10" rx="2" 
                    className="fill-white stroke-black stroke-[3]" />
              {/* Locks */}
              <rect x="45" y="95" width="20" height="10" rx="2" className="fill-black" />
              <rect x="135" y="95" width="20" height="10" rx="2" className="fill-black" />
            </g>
      
            {/* Money stacks - initially hidden, shows after lid animation */}
            <g className="opacity-0 group-hover:animate-reveal-money">
              {/* First row of stacks */}
              <g>
                <rect x="35" y="110" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="35" y="110" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="45" y="127" className="text-[10px] fill-green-700">$100</text>
                <line x1="35" y1="120" x2="75" y2="120" className="stroke-green-600" strokeDasharray="2,2"/>
                
                <rect x="80" y="110" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="80" y="110" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="90" y="127" className="text-[10px] fill-green-700">$100</text>
                <line x1="80" y1="120" x2="120" y2="120" className="stroke-green-600" strokeDasharray="2,2"/>
                
                <rect x="125" y="110" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="125" y="110" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="135" y="127" className="text-[10px] fill-green-700">$100</text>
                <line x1="125" y1="120" x2="165" y2="120" className="stroke-green-600" strokeDasharray="2,2"/>
              </g>
      
              {/* Second row of stacks */}
              <g>
                <rect x="35" y="140" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="35" y="140" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="45" y="157" className="text-[10px] fill-green-700">$100</text>
                <line x1="35" y1="150" x2="75" y2="150" className="stroke-green-600" strokeDasharray="2,2"/>
                
                <rect x="80" y="140" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="80" y="140" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="90" y="157" className="text-[10px] fill-green-700">$100</text>
                <line x1="80" y1="150" x2="120" y2="150" className="stroke-green-600" strokeDasharray="2,2"/>
                
                <rect x="125" y="140" width="40" height="25" className="fill-green-100 stroke-green-600" />
                <rect x="125" y="140" width="40" height="5" className="fill-green-200 stroke-green-600" />
                <text x="135" y="157" className="text-[10px] fill-green-700">$100</text>
                <line x1="125" y1="150" x2="165" y2="150" className="stroke-green-600" strokeDasharray="2,2"/>
              </g>
            </g>
      
            {/* Flying money - appears last */}
            <g className="opacity-0 group-hover:animate-reveal-flying-money">
              <text x="50" y="30" className="text-2xl fill-blue-500 animate-money-rain opacity-80">$</text>
              <text x="80" y="20" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "0.3s"}}>$</text>
              <text x="110" y="25" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "0.6s"}}>$</text>
              <text x="140" y="15" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "0.9s"}}>$</text>
            </g>
          </svg>
        </div>
      )      
},
    {
      category: "Product",
      skills: "Product Analytics, Problem-Solving, UI UX, Storytelling, Product Roadmaps, Agile",
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      textColor: "text-green-900",
      animation: (
        <div className="absolute -right-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Laptop Screen */}
            <rect x="45" y="40" width="110" height="80" rx="4" 
                  className="fill-white stroke-black stroke-[4]" />
            <rect x="50" y="45" width="100" height="70" rx="2" 
                  className="fill-green-50 stroke-black stroke-[2]" />
            
            {/* Laptop Base */}
            <path d="M35 120 L165 120 L175 140 L25 140 Z" 
                  className="fill-white stroke-black stroke-[4]" />
            
            {/* Laptop Keyboard Details */}
            <rect x="45" y="125" width="15" height="3" rx="1" className="fill-black" />
            <rect x="65" y="125" width="15" height="3" rx="1" className="fill-black" />
            <rect x="85" y="125" width="15" height="3" rx="1" className="fill-black" />
            <rect x="105" y="125" width="15" height="3" rx="1" className="fill-black" />
            <rect x="125" y="125" width="15" height="3" rx="1" className="fill-black" />
            
            {/* Code on Screen */}
            <foreignObject x="55" y="50" width="90" height="60">
              <div style={{ fontSize: '8px', fontFamily: 'monospace', color: '#059669' }} className="overflow-hidden">
                <div className="animate-typing whitespace-nowrap overflow-hidden">
                  {`const product = {
  vision: true,
  success: "✨",
  roadmap: [
    "design",
    "build",
    "ship"
  ]
}`}
                </div>
                <span className="animate-blink">|</span>
              </div>
            </foreignObject>
          </svg>
        </div>
      )
    },

    {
      category: "Technology",
      skills: "HTML, CSS, JS, React.js, Next.js, GraphQL, AWS, and many others",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      textColor: "text-purple-900",
      animation: (
        <div className="absolute -left-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Monitor Frame */}
            <rect x="25" y="15" width="150" height="120" rx="6" 
                  className="fill-white stroke-black stroke-[4]" />
            
            {/* Screen bezel */}
            <rect x="35" y="25" width="130" height="90" rx="4" 
                  className="fill-white stroke-black stroke-[3]" />
            
            {/* Screen */}
            <rect x="40" y="30" width="120" height="80" 
                  className="fill-purple-50 stroke-black stroke-[2]" />
            
            {/* Monitor stand */}
            <path d="M70 135 h60 l15 20 h-90 l15 -20" 
                  className="fill-white stroke-black stroke-[4]" />
            <rect x="85" y="155" width="30" height="10" rx="2" 
                  className="fill-white stroke-black stroke-[3]" />

            {/* Code content */}
            <foreignObject x="45" y="35" width="110" height="70">
              <div style={{ fontSize: '8px', fontFamily: 'monospace', color: '#7e22ce' }} className="overflow-hidden">
                <div className="whitespace-pre animate-code-scroll">
                  {`import React from 'react';
function App() {
  const [count, setCount] = 
    useState(0);
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={() => 
        setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}`}
                </div>
              </div>
            </foreignObject>

            {/* Decorative details */}
            <circle cx="100" cy="125" r="3" className="fill-black" />
            <rect x="35" y="125" width="20" height="4" rx="1" className="fill-black" />
            <rect x="60" y="125" width="20" height="4" rx="1" className="fill-black" />
            <rect x="120" y="125" width="20" height="4" rx="1" className="fill-black" />
            <rect x="145" y="125" width="20" height="4" rx="1" className="fill-black" />
          </svg>
        </div>
      )
    },
    {
      category: "Design",
      skills: "Design Thinking, User Experience Design, UI-UX, Mobile Design, Prototyping, Mockups, Website design",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-400",
      textColor: "text-rose-900",
      animation: (
        <div className="absolute -right-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Whiteboard Frame */}
            <rect x="25" y="15" width="150" height="120" rx="6" 
                  className="fill-white stroke-black stroke-[4]" />
            
            {/* Drawing Area */}
            <rect x="35" y="25" width="130" height="90" rx="4" 
                  className="fill-white stroke-black stroke-[2]" />
            
            {/* Stand */}
            <path d="M70 135 h60 l25 40 h-110 l25 -40" 
                  className="fill-white stroke-black stroke-[4]" />
            
            {/* Drawing Animation */}
            <path className="animate-draw stroke-rose-500 stroke-[3] fill-none"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  d="M45 45 Q100 35 120 45 T150 65
                     M45 85 Q70 75 95 85 T150 95
                     M60 65 Q80 55 100 65 T140 75"
            />
            
            {/* Tray */}
            <rect x="35" y="120" width="130" height="8" rx="2" 
                  className="fill-white stroke-black stroke-[3]" />
            
            {/* Markers */}
            <rect x="40" y="122" width="15" height="4" rx="1" className="fill-rose-500" />
            <rect x="60" y="122" width="15" height="4" rx="1" className="fill-blue-500" />
            <rect x="80" y="122" width="15" height="4" rx="1" className="fill-green-500" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b-4 border-black pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`group relative p-6 ${skill.bgColor} border-2 ${skill.borderColor} rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:-translate-y-1 transition-transform`}
          >
            <h3 className={`font-bold mb-2 text-lg ${skill.textColor}`}>{skill.category}</h3>
            <p className="text-gray-700">{skill.skills}</p>
            {skill.animation}
          </div>
        ))}
      </div>
    </section>
  );
}