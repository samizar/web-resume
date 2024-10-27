export default function Skills() {
  const skills = [
    {
      category: "Business",
      skills: "Marketing strategy, go-to-market, sales growth, digital marketing, lead generation, SEM, SEO, Leadership, Content marketing",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
      textColor: "text-blue-900"
    },
    {
      category: "Product",
      skills: "Product Analytics, Problem-Solving, UI UX, Storytelling, Product Roadmaps, Agile",
      bgColor: "bg-green-50",
      borderColor: "border-green-400",
      textColor: "text-green-900"
    },
    {
      category: "Technology",
      skills: "HTML, CSS, JS, React.js, Next.js, GraphQL, AWS, and many others",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-400",
      textColor: "text-purple-900"
    },
    {
      category: "Design",
      skills: "Design Thinking, User Experience Design, UI-UX, Mobile Design, Prototyping, Mockups, Website design",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-400",
      textColor: "text-rose-900"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 border-b-4 border-black pb-2">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`p-6 ${skill.bgColor} border-2 ${skill.borderColor} rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:-translate-y-1 transition-transform`}
          >
            <h3 className={`font-bold mb-2 text-lg ${skill.textColor}`}>{skill.category}</h3>
            <p className="text-gray-700">{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
