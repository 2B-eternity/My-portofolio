import { Code, Palette, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: ["JavaScript", "TypeScript", "PHP", "C++"],
    },
  ];

  const getColorClasses = (color: string) => {
    return "bg-blue-100 text-blue-600";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4 text-gray-900">Keahlian & Kompetensi</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Berbagai teknologi dan tools yang saya kuasai untuk mengembangkan solusi digital yang inovatif
        </p>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl text-gray-900">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}