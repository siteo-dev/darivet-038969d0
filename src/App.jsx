import { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  Shield, 
  Award, 
  Users, 
  Calendar,
  MessageCircle,
  Instagram,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Pets' },
    { value: 5, suffix: '', label: 'Years Experience' },
    { value: 200, suffix: '+', label: 'Services' },
    { value: 100, suffix: '%', label: 'Satisfaction' }
  ];

  const services = [
    {
      name: "Deparazitare",
      description: "Complete parasite treatment for dogs and cats",
      price: "120 RON",
      icon: Shield
    },
    {
      name: "Vaccin",
      description: "Essential vaccinations for disease prevention",
      price: "200 RON",
      icon: Award
    },
    {
      name: "Mancare pisici",
      description: "Premium cat food with balanced nutrition",
      price: "99 RON",
      icon: Users
    },
    {
      name: "Mancare caini",
      description: "High-quality dog food for all breeds and ages",
      price: "33 RON",
      icon: CheckCircle
    }
  ];

  const reviews = [
    {
      name: "Maria S.",
      role: "F",
      text: "My cat has been coming here for vaccinations and food. The staff is kind and knowledgeable.",
      avatar: "/assets/people/girl_1.jpg"
    },
    {
      name: "Ion T.",
      role: "M",
      text: "Great service! They helped me find the perfect food for my puppy. Highly recommend!",
      avatar: "/assets/people/boy_1.jpg"
    },
    {
      name: "Ana D.",
      role: "F",
      text: "Best place in Domnesti for pet care. Professional, clean, and friendly atmosphere.",
      avatar: "/assets/people/girl_1.jpg"
    }
  ];

  const faqItems = [
    {
      question: "What services do you offer?",
      answer: "We provide parasite treatments, vaccinations, and premium pet food for dogs and cats."
    },
    {
      question: "How often should I vaccinate my pet?",
      answer: "Puppies need vaccinations every 3-4 weeks until 16 weeks. Adult pets require annual boosters."
    },
    {
      question: "What makes your pet food special?",
      answer: "Our food is sourced from trusted suppliers with balanced nutrition and high-quality ingredients."
    },
    {
      question: "Do you offer home visits?",
      answer: "Yes, we provide mobile services for vaccinations and check-ups in the Domnesti area."
    },
    {
      question: "How can I book an appointment?",
      answer: "Call us at +40757263553 or WhatsApp for instant booking. We also accept online reservations."
    },
    {
      question: "What are your opening hours?",
      answer: "We're open Monday to Saturday from 8am to 8pm. Sunday by appointment only."
    }
  ];

  const logos = [
    "Darivet",
    "Pet Care Pro",
    "Vet Services",
    "Animal Wellness",
    "Furry Friends",
    "Pet Health Plus"
  ];

  const galleryItems = [
    { name: "Healthy pets", image: "/assets/cars/car_audi.jpg" },
    { name: "Vaccination", image: "/assets/cars/car_bmw.jpg" },
    { name: "Premium food", image: "/assets/cars/car_tesla.jpg" },
    { name: "Expert care", image: "/assets/people/boy_1.jpg" },
    { name: "Happy owners", image: "/assets/people/girl_1.jpg" },
    { name: "Quality products", image: "/assets/cars/car_audi.jpg" }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto mt-4 px-4 sm:px-6 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center justify-between h-full">
            <div className="text-base font-semibold tracking-tight">Darivet</div>
            <nav className="hidden md:flex gap-1">
              <Button variant="ghost" className="h-8 px-4 rounded-full text-white hover:bg-white/5">Home</Button>
              <Button variant="ghost" className="h-8 px-4 rounded-full text-white hover:bg-white/5">Services</Button>
              <Button variant="ghost" className="h-8 px-4 rounded-full text-white hover:bg-white/5">About</Button>
              <Button variant="ghost" className="h-8 px-4 rounded-full text-white hover:bg-white/5">Contact</Button>
            </nav>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden h-8 w-8 rounded-full text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LightRays 
              raysOrigin="top-center" 
              raysColor="#b0f33f" 
              raysSpeed={1} 
              lightSpread={0.5} 
              rayLength={3} 
              followMouse={true} 
              mouseInfluence={0.1} 
              noiseAmount={0} 
              distortion={0} 
              pulsating={false} 
              fadeDistance={1} 
              saturation={1} 
            />
            <DotPattern opacity={0.05} className="absolute inset-0" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-lime-400/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-lime-400/[0.06] rounded-full blur-[100px] pointer-events-none"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
            <AnimatedShinyText className="text-sm font-medium mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              Trusted Pet Care Since 2019
            </AnimatedShinyText>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
              Your Pet's Health & Happiness Starts Here
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Darivet offers premium pet care services and quality food for dogs and cats since 2019. Your trusted partner in pet wellness.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <ShimmerButton 
                className="shadow-2xl btn-hover" 
                background="rgba(176,243,63, 1)"
              >
                <span className="text-sm font-medium text-white">Book Appointment</span>
              </ShimmerButton>
              <Button 
                variant="outline" 
                className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-lime-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(176,243,63,0.6)]" 
                  />
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                10+ years crafting pet wellness
              </h2>
              <p className="text-lg text-muted-foreground">
                We're passionate about your pets' health and happiness. Darivet has been serving the Domnesti community since 2019.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-lime-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Trusted by Pet Owners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We've been serving the Domnesti community for over 5 years with consistent quality
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-lime-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Expert Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our team includes certified veterinarians and pet care specialists
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-lime-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Premium Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Only high-quality food and treatments that meet international standards
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-3">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-lime-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Quality Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every service comes with our satisfaction guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Tailored Solutions for Your Furry Friends
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Comprehensive pet care services designed to keep your pets healthy and happy.
              </p>
            </div>
            
            <BentoGrid className="lg:grid-rows-3">
              {services.map((service, index) => (
                <BentoCard 
                  key={index}
                  Icon={service.icon}
                  name={service.name}
                  description={service.description}
                  cta="Learn more"
                  className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                  background={
                    index === 0 ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent" />
                    ) : null
                  }
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Why choose Darivet?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Trusted by Pet Owners",
                "Expert Care",
                "Premium Products"
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-1"
                >
                  <CardHeader>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-lime-500/10 flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-4 h-4 text-lime-400" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{item}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "We've been serving the Domnesti community for over 5 years with consistent quality"}
                      {index === 1 && "Our team includes certified veterinarians and pet care specialists"}
                      {index === 2 && "Only high-quality food and treatments that meet international standards"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                What Pet Owners Say About Us
              </h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s]">
                {reviews.map((review, index) => (
                  <Card 
                    key={index} 
                    className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover mx-4 animate-on-scroll delay-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Everything You Need to Know
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="animate-on-scroll delay-1 border-white/[0.05] mb-4"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:bg-white/[0.02] transition-colors duration-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Contact Us Anytime
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Reach out to schedule an appointment or ask questions about our services.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-lime-400 mr-3" />
                      <CardTitle className="text-lg font-semibold">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+40757263553</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-1">
                  <CardHeader>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-lime-400 mr-3" />
                      <CardTitle className="text-lg font-semibold">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">contact@darivet.com</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover animate-on-scroll delay-2">
                  <CardHeader>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-lime-400 mr-3" />
                      <CardTitle className="text-lg font-semibold">Address</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Soseaua Tudor Valdimirescu, Domnesti, Ilfov</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="animate-on-scroll">
                <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative">
                  <iframe
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("soseaua tudor valdimirescu, domnesti, ilfov") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover animate-on-scroll delay-3"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover animate-on-scroll delay-3"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Marquee */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Trusted by Pet Care Professionals
              </h2>
            </div>
            
            <div className="relative max-w-4xl mx-auto overflow-hidden">
              <Marquee pauseOnHover className="[--duration:30s]">
                {logos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="text-center text-lg font-medium px-8 py-4 animate-on-scroll delay-1"
                  >
                    {logo}
                  </div>
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
          <DotPattern opacity={0.05} className="absolute inset-0" />
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Our Pet Care Journey
              </h2>
            </div>
            
            <BentoGrid className="lg:grid-rows-3">
              {galleryItems.map((item, index) => (
                <BentoCard 
                  key={index}
                  name={item.name}
                  background={
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 img-hover"
                    />
                  }
                  className={`rounded-2xl ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                />
              ))}
            </BentoGrid>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.05] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} Darivet. All rights reserved.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/darivet" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1]">
                  <Instagram className="w-4 h-4 text-white" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}
