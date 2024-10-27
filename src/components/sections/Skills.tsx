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
            <g className="money-animation">
              <text x="80" y="0" className="text-2xl fill-blue-500 animate-money-rain opacity-80">$</text>
              <text x="100" y="-30" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "0.5s"}}>$</text>
              <text x="120" y="-60" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "1s"}}>$</text>
              <text x="140" y="-90" className="text-2xl fill-blue-500 animate-money-rain opacity-80" style={{animationDelay: "1.5s"}}>$</text>
              <path d="M40 160 Q80 120 120 100 T180 40" fill="none" stroke="#4285f4" strokeWidth="3" strokeDasharray="5,5"/>
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
}
export default App;`}
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
            <path 
              className="drawing animate-draw"
              d="M40 100 Q70 40 100 100 T160 100 M60 140 Q100 80 140 140"
              fill="none" 
              stroke="#ea4335" 
              strokeWidth="3"
              strokeDasharray="1000"
              strokeLinecap="round"
            />
            <circle cx="160" cy="100" r="5" fill="#ea4335"/>
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