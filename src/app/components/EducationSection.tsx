import { GraduationCap, Award, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function EducationSection() {
  const education = [
    {
      level: "Perguruan Tinggi",
      institution: "Universitas Andalas",
      degree: "Sarjana Teknik Komputer",
      period: "2023 - Sekarang",
      description: "Fokus pada Computer engginering",
      icon: GraduationCap,
    },
    {
      level: "SMA",
      institution: "Man 1 Padang",
      degree: "IPA",
      period: "2020 - 2023",
      description: "Pernah sekolah di MAN 1 kota padang dan pernah memenangkan juara harapan 1 robot sumo",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-900">Pendidikan</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <edu.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-1">{edu.institution}</h3>
                        <p className="text-lg text-blue-600 mb-1">{edu.degree}</p>
                      </div>
                      <span className="text-gray-600 bg-gray-100 px-4 py-1 rounded-full text-sm inline-block">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl text-gray-900">Organisasi & Kepanitiaan</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-gray-900 mb-2">Anggota FSI Alfatih</h4>
                  <p className="text-gray-700 text-sm">2023 - Sekarang</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-gray-900 mb-2">Anggota Newgame</h4>
                  <p className="text-gray-700 text-sm">2024 - Sekarang</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}