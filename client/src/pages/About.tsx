import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import ceoImage from "/ceo.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  FaPlaneArrival,
  FaBullseye,
  FaUsers,
  FaStar,
  FaHome,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

type TimelineItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const timelineData: TimelineItem[] = [
  {
    title: "Inspiration",
    description:
      "Arriving in Dubai, we realized cleaning could be different: punctual, flawless, uncompromising.",
    icon: <FaPlaneArrival />,
  },
  {
    title: "Our Purpose",
    description:
      "We aim to free our clients from daily stress, transforming cleaning into a moment of pure calm—managing everything so it's not just cleaning, it's an easier life.",
    icon: <FaBullseye />,
  },
  {
    title: "What Sets Us Apart",
    description:
      "Our difference lies in a dedicated, loyal team treated like family—because when people are valued, excellence follows.",
    icon: <FaUsers />,
  },
  {
    title: "Operational Excellence",
    description:
      "Our staff are trained to five-star hotel standards, ensuring precision and meticulous attention to every detail.",
    icon: <FaStar />,
  },
  {
    title: "Today, For You",
    description:
      "We provide exclusive service to Dubai's most discerning homes, creating spotless spaces so you can relax and enjoy your time.",
    icon: <FaHome />,
  },
];

export default function About() {
  useSEO({
    title:
      "About Freshen Deluxe - Dubai's Most Trusted Luxury Cleaning Company",
    description:
      "For those who value quality. Born from luxury hospitality, we bring H10 cleaning standards to Dubai. The most trusted name in luxury property care with five-star service.",
    keywords:
      "about Freshen Deluxe, luxury cleaning company Dubai, hospitality cleaning standards, five-star cleaning service, boutique cleaning Dubai",
  });

  const values = [
    {
      title: "Exceptional Care",
      description:
        "We treat every space as if it were our own, with meticulous attention to detail and genuine care.",
    },
    {
      title: "Hospitality Excellence",
      description:
        "Born from luxury hospitality experience, we bring five-star standards to every service.",
    },
    {
      title: "Happy Team",
      description: "We invest in the wellbeing of our staff.",
    },
    {
      title: "Luxury Touches",
      description:
        "Premium fragrances, chocolates, and thoughtful details that make every space special.",
    },
  ];

  const ceo = {
    name: "Maria Angulo",
    role: "CEO & Founder",
    image: ceoImage,
    description:
      "<p>Freshen Deluxe was founded by Maria Angulo, a passionate entrepreneur with several years of experience in luxury hospitality and high-standard cleaning.</p><p> With a strong background in business consulting, Maria combines strategic insight with hands-on expertise to drive growth and operational excellence. Committed to exceptional service and meticulous care, Maria leads the team in delivering a personalised, top-tier cleaning experience to every client.</p>",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl  text-ring mb-6">
              For Those Who Value Quality
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Born from luxury hospitality, we bring H10 cleaning standards to
              Dubai. The most trusted name in luxury property care with
              five-star service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-ring hover:bg-ring/90 text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-testid="button-about-services"
                >
                  Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-testid="button-about-contact"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className=" bg-card py-12">
        <SectionHeading title="Our Story" subtitle="What Drives Us" />
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "transparent",
                color: "#d6b771",
                boxShadow: "none",
              }}
              contentArrowStyle={{ borderRight: "0px solid  #d6b771" }}
              iconStyle={{ background: "#d6b771", color: "#fff" }}
              icon={item.icon}
            >
              <h3 className=" text-2xl  ">{item.title}</h3>
              <p className=" text-primary">{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading subtitle="Our Values" title="What Drives Us" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values shape every interaction and service we deliver,
              ensuring exceptional experiences for both clients and team
              members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover-elevate"
                data-testid={`value-${index}`}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="  Our Mission"
            title="  Making a Difference"
          />
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We want to make a difference in Dubai's cleaning industry. We will
            treat our staff exceptionally so they are happy and deliver amazing
            results. We want to take the mental load off our clients and give
            them complete peace of mind through our organizational skills and
            customer service excellence.
          </p>
          <p className="text-lg text-muted-foreground">
            Our luxury touches - from premium fragrances to thoughtful
            chocolates - transform routine cleaning into memorable experiences
            that reflect the sophistication our clients deserve.
          </p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              subtitle="Our Leadership"
              title="Meet Our Founder"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Behind every exceptional service is exceptional leadership. Meet
              the visionary who founded Freshen Deluxe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 ">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-full h-[450px] object-cover object-top rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2 pt-8">
              <h3 className="text-3xl md:text-4xl  text-primary ">
                {ceo.name}
              </h3>
              <p className="text-xl text-ring mb-3">{ceo.role}</p>
              <div
                className="text-lg text-muted-foreground leading-relaxed flex flex-col gap-3"
                dangerouslySetInnerHTML={{ __html: ceo.description }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl  mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl opacity-90 ">
            Ready to see what luxury hospitality standards mean for your space?
          </p>
          <p className="text-xl opacity-90 mb-8">
            Let us show you the Freshen Deluxe difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="sm"
                variant="outline"
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 sm:size-default lg:size-lg"
                data-testid="button-about-contact"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="sm"
                className="bg-ring hover:bg-ring/90 text-primary-foreground sm:size-default lg:size-lg"
                data-testid="button-about-services"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
