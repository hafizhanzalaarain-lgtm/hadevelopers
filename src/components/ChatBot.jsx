import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { company, owner, services } from "../data/seed";

function answerQuestion(input) {
  const question = input.toLowerCase();
  if (question.includes("owner") || question.includes("founder") || question.includes("pic") || question.includes("hanzala")) {
    return `${owner.name} is the ${owner.role} of HA Developers. He focuses on websites, SEO, digital marketing, branding and client growth. You can contact him on WhatsApp at ${company.phone}.`;
  }
  if (question.includes("price") || question.includes("pricing") || question.includes("cost") || question.includes("rate")) {
    return "Pricing depends on scope. Websites can start from basic business packages, while SEO, marketing and design packages are customized. Share your service, pages/features and deadline for an accurate quote.";
  }
  if (question.includes("service") || question.includes("website") || question.includes("seo") || question.includes("marketing") || question.includes("design") || question.includes("app")) {
    return `HA Developers provides ${services.map((service) => service.title).join(", ")}. Tell me which one you need and I will guide you.`;
  }
  if (question.includes("urdu") || question.includes("arabic") || question.includes("language") || question.includes("زبان") || question.includes("عربي")) {
    return "Yes, HA Developers can make websites in English, Urdu, Arabic, or bilingual layouts like Urdu + English and Arabic + English. Tell us your preferred website language in the quote form.";
  }
  if (question.includes("contact") || question.includes("whatsapp") || question.includes("phone") || question.includes("call")) {
    return `You can contact HA Developers on WhatsApp/call: ${company.phone}, or email: ${company.email}.`;
  }
  if (question.includes("privacy") || question.includes("policy")) {
    return "You can read the Privacy Policy page from the website footer. We use form data only to respond to project requests and business communication.";
  }
  if (question.includes("time") || question.includes("hours")) {
    return `Business hours are ${company.hours}. You can still send a WhatsApp message anytime.`;
  }
  return "I can help with websites, mobile apps, SEO, digital marketing, graphic design, branding, pricing, owner details, and contact information. Ask me anything about HA Developers.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { by: "bot", text: "Hi, I am HA Assistant. Ask me anything about HA Developers." }
  ]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const quickPrompts = ["Owner details", "Website quote", "Urdu/Arabic site", "Contact WhatsApp"];

  function send() {
    if (!text.trim() || typing) return;
    const userText = text.trim();
    setMessages((items) => [...items, { by: "user", text: userText }]);
    setText("");
    setTyping(true);
    setTimeout(() => {
      setMessages((items) => [...items, { by: "bot", text: answerQuestion(userText) }]);
      setTyping(false);
    }, 700);
  }

  return (
    <>
      <a className="whatsapp-float" href={`https://wa.me/${company.whatsapp}`} aria-label="WhatsApp" title="WhatsApp">
        <MessageCircle size={24} />
      </a>
      <button className="chat-float" type="button" aria-label="Open AI assistant" title="AI assistant" onClick={() => setOpen(true)}>
        <Bot size={24} />
      </button>
      {open && (
        <aside className="chat-panel glass-card">
          <div className="chat-head">
            <span className="chat-title"><Sparkles size={18} /><strong>HA AI Assistant</strong></span>
            <button className="icon-button" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="chat-chips">
            {quickPrompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => setText(prompt)}>{prompt}</button>
            ))}
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p className={message.by} key={`${message.by}-${index}`}>{message.text}</p>
            ))}
            {typing && <p className="bot typing-dots"><span /> <span /> <span /></p>}
          </div>
          <div className="chat-input">
            <input value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => event.key === "Enter" && send()} placeholder="Ask anything..." />
            <button className="icon-button" type="button" aria-label="Send message" onClick={send}>
              <Send size={18} />
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
