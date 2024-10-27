export default function Skills() {
  const skills = [
    {
      category: "Business",
      skills: "Marketing strategy, go-to-market, sales growth, digital marketing, lead generation, SEM, SEO, Leadership, Content marketing",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      textColor: "text-blue-900",
      animation: <div className="absolute -left-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <svg className="w-24 h-24">
          <text x="20" y="40" className="text-3xl fill-blue-500 animate-money-rain">$</text>
          <text x="40" y="20" className="text-3xl fill-blue-500 animate-money-rain" style={{animationDelay: "0.5s"}}>$</text>
          <text x="60" y="60" className="text-3xl fill-blue-500 animate-money-rain" style={{animationDelay: "1s"}}>$</text>
        </svg>
      </div>
    },
    {
      category: "Product",
      skills: "Product Analytics, Problem-Solving, UI UX, Storytelling, Product Roadmaps, Agile",
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      textColor: "text-green-900",
      animation: <div className="absolute -right-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <svg className="w-24 h-24">
          <rect x="10" y="20" width="80" height="60" rx="4" className="fill-green-500"/>
          <rect x="10" y="15" width="80" height="50" rx="4" className="fill-green-600 animate-float"/>
          <text x="20" y="45" className="text-[10px] fill-white font-mono animate-typing">{"<code/>"}</text>
        </svg>
      </div>
    },
    {
      category: "Technology",
      skills: "HTML, CSS, JS, React.js, Next.js, GraphQL, AWS, and many others",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      textColor: "text-purple-900",
      animation: <div className="absolute -left-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div className="w-24 h-24 overflow-hidden">
          <div className="font-mono text-sm text-purple-600 animate-scroll-up whitespace-pre">
            {`const code = {
  run: true,
  debug: false
}`}
          </div>
        </div>
      </div>
    },
    {
      category: "Design",
      skills: "Design Thinking, User Experience Design, UI-UX, Mobile Design, Prototyping, Mockups, Website design",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-400",
      textColor: "text-rose-900",
      animation: <div className="absolute -right-40 top-0 w-32 h-full bg-[#f0f0f0] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <svg className="w-24 h-24">
          <path 
            d="M20 40 Q40 20 60 40 T100 40 M30 60 Q50 40 70 60 T110 60" 
            className="stroke-rose-500 stroke-2 fill-none animate-draw"
            strokeDasharray="200"
            strokeDashoffset="200"
          />
          <circle cx="20" cy="40" r="2" className="fill-rose-500 animate-float"/>
        </svg>
      </div>
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b-4 border-black pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
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