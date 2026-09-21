import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import "./FAQ.css";

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        className="faq-item__trigger"
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div
        className="faq-item__body"
        style={{ maxHeight: isOpen ? "400px" : "0" }}
      >
        <p className="faq-item__answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Diviser les items en 2 colonnes
  const half = Math.ceil(faq.items.length / 2);
  const leftItems = faq.items.slice(0, half);
  const rightItems = faq.items.slice(half);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div
          ref={ref}
          className={`section-header reveal ${inView ? "reveal--visible" : ""}`}
        >
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-subtitle">{faq.subtitle}</p>
        </div>

        <div className="faq__grid">
          <div className="faq__column">
            {leftItems.map((item, i) => (
              <FAQItem
                key={i}
                {...item}
                index={i}
                isOpen={openIndex === i}
                onToggle={handleToggle}
              />
            ))}
          </div>
          <div className="faq__column">
            {rightItems.map((item, i) => {
              const globalIndex = i + half;
              return (
                <FAQItem
                  key={globalIndex}
                  {...item}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={handleToggle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
