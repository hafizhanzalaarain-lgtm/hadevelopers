import { useMemo, useState } from 'react';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, pricingPlans, services } from '../data/seed.js';

const quickQuestions = [
  'What services do you offer?',
  'Website price?',
  'How can I order?',
  'Contact number',
  'IT courses'
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes('price') || text.includes('pricing') || text.includes('package') || text.includes('cost')) {
    return `Our packages start from ${pricingPlans[0].price}. Standard is ${pricingPlans[1].price}, Premium is ${pricingPlans[2].price}, and Enterprise is a custom quote. You can open the Pricing page or place an order for an exact quote.`;
  }

  if (text.includes('website') || text.includes('web')) {
    const service = services.find((item) => item.id === 'website-development');
    return `${service.title}: ${service.description} Pricing starts ${service.price}. It includes responsive UI, SEO foundations, contact forms, and optional admin/CMS features.`;
  }

  if (text.includes('android') || text.includes('app')) {
    const service = services.find((item) => item.id === 'android-app-development');
    return `${service.title}: ${service.description} Pricing starts ${service.price}. We can build mobile apps with API integration, notifications, and dashboards.`;
  }

  if (text.includes('marketing') || text.includes('ads') || text.includes('seo')) {
    const service = services.find((item) => item.id === 'digital-marketing');
    return `${service.title}: ${service.description} Pricing starts ${service.price}. We help with campaigns, content strategy, lead generation, and reporting.`;
  }

  if (text.includes('graphic') || text.includes('design') || text.includes('logo')) {
    const service = services.find((item) => item.id === 'graphic-designing');
    return `${service.title}: ${service.description} Pricing starts ${service.price}. We design logos, brand kits, social posts, and print-ready creatives.`;
  }

  if (text.includes('course') || text.includes('training') || text.includes('learn') || text.includes('class')) {
    const service = services.find((item) => item.id === 'it-courses');
    return `${service.title}: ${service.description} Pricing starts ${service.price}. Courses include live classes, practice projects, certificates, and career guidance.`;
  }

  if (text.includes('order') || text.includes('start') || text.includes('quote')) {
    return 'To start your project, click Order Now from any service card or open the Order page. Your request will be saved and shown in the admin dashboard.';
  }

  if (text.includes('contact') || text.includes('phone') || text.includes('whatsapp') || text.includes('email')) {
    return `You can contact HA Developers at ${company.phone}, email ${company.email}, or use the WhatsApp button on the Contact page.`;
  }

  if (text.includes('admin')) {
    return 'The admin panel is private. Open /admin directly or use the Powered by HA Developers link in the footer.';
  }

  return 'I can help with HA Developers services, pricing, orders, contact details, IT courses, websites, apps, marketing, and graphic design. You can also submit your project from the Order page.';
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi, I am HA Assistant. Ask me about services, pricing, orders, contact, or IT courses.' }
  ]);
  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function sendMessage(text = input) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { from: 'user', text: clean },
      { from: 'bot', text: getBotReply(clean) }
    ]);
    setInput('');
  }

  return (
    <div className="chatbot">
      {open && (
        <section className="chat-window glass-card" aria-label="HA Developers chatbot">
          <header className="chat-header">
            <div className="chat-title"><Bot size={20} /><div><strong>HA Assistant</strong><span>Online support</span></div></div>
            <button className="icon-btn" aria-label="Close chatbot" onClick={() => setOpen(false)}><X size={18} /></button>
          </header>
          <div className="chat-messages">
            {messages.map((message, index) => <p className={message.from === 'bot' ? 'bot-message' : 'user-message'} key={`${message.from}-${index}`}>{message.text}</p>)}
          </div>
          <div className="chat-quick">
            {quickQuestions.map((question) => <button key={question} onClick={() => sendMessage(question)}>{question}</button>)}
          </div>
          <form className="chat-form" onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about HA Developers..." />
            <button className="icon-btn" disabled={!canSend} aria-label="Send message" type="submit"><Send size={18} /></button>
          </form>
          <Link className="btn primary full" to="/order" onClick={() => setOpen(false)}>Order Now</Link>
        </section>
      )}
      <button className="chat-toggle" aria-label="Open chatbot" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
