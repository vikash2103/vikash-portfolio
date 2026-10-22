import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

type ProjectLink = { label: string; url: string };

const projects: {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  note?: string;
  links?: ProjectLink[];
}[] = [
  {
    title: "Yapho",
    category:
      "Random video chat platform with real-time matching, AI moderation, end-to-end encrypted DMs and Stripe subscriptions. Built, deployed and run solo on AWS.",
    tools:
      "React, Node.js, Express, Socket.io, WebRTC, Firebase, Stripe, AWS EC2 and S3",
    image: "/images/yapho.svg",
    link: "https://yapho.live",
  },
  {
    title: "Vulnerability Prioritizer",
    category:
      "Free, open-source CVE risk-ranking app (final-year capstone, team of two). Combines CVSS, CISA KEV and asset criticality, with AI-generated remediation scripts.",
    tools:
      "FastAPI, Tailwind CSS, Chart.js, SQLite, Groq and Ollama (RAG), AWS EC2, nginx",
    image: "/images/vulnerability-prioritizer.svg",
    link: "http://3.102.81.248",
    note: "Create an account with email to try it.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/vikash2103/vulnerability-prioritizer",
      },
    ],
  },
  {
    title: "RepoDocs",
    category:
      "AI tool that generates a professional README for any public GitHub repository. Bring-your-own API key, so keys are never stored server-side.",
    tools: "Python, FastAPI, Groq API, AWS EC2, nginx, systemd",
    image: "/images/repodocs.svg",
    link: "http://3.102.81.248/repodocs/",
    links: [
      { label: "GitHub", url: "https://github.com/vikash2103/doclify-web" },
    ],
  },
  {
    title: "Cardio Monitor",
    category:
      "Predicts heart disease risk from patient health parameters with a KNN classifier. Based on an open-source app that I rebuilt, modernised and deployed.",
    tools:
      "Flask, scikit-learn (KNN), MongoDB Atlas, Gunicorn, Nginx, AWS EC2",
    image: "/images/cardio-monitor.svg",
    link: "http://3.102.81.248/cardio-monitor/",
    links: [
      { label: "GitHub", url: "https://github.com/vikash2103/Cardio-Monitor" },
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.note && (
                          <p className="carousel-note">{project.note}</p>
                        )}
                        {project.links && (
                          <div className="carousel-links">
                            {project.links.map((l) => (
                              <a
                                key={l.url}
                                href={l.url}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor="disable"
                              >
                                {l.label} <MdArrowOutward />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
