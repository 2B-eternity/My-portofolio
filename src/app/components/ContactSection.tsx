import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "2311513013_muhammad@student.ac.id",
      link: "mailto:2311513013_muhammad@student.unand.ac.id",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 896-2148-2535",
      link: "tel:+6289621482535",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Padang, Indonesia",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4 text-gray-900">Hubungi Saya</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Jangan ragu untuk menghubungi saya untuk kolaborasi proyek, pertanyaan, atau sekadar ngobrol!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{contact.label}</h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-sm">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}