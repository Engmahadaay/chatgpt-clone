import React from "react";
import { assets } from "./assets/ChatGPT_Clone_assets/assetes";
import "./App.css";

const historyItems = [
  "Product strategy for a creator app",
  "Website copy for a luxury skincare launch",
  "Design system ideas for a SaaS dashboard",
  "Marketing plan for a fintech startup",
];

const quickPrompts = [
  "Create a landing page structure",
  "Draft brand voice guidelines",
  "Summarize this research brief",
];

const conversation = [
  {
    role: "user",
    name: "You",
    avatar: assets.userIcon,
    text:
      "I want a premium ChatGPT-style interface with a modern 2026 aesthetic, dark glass panels, subtle gradients, and a more polished product feel.",
  },
  {
    role: "assistant",
    name: "GPT",
    avatar: assets.chatgptlogo,
    text:
      "Absolutely — I created a front-end concept with a luxury dark theme, floating glass cards, soft neon accent lighting, thoughtful spacing, and a more refined conversation layout designed for a modern AI product experience.",
  },
  {
    role: "user",
    name: "You",
    avatar: assets.userIcon,
    text:
      "This should feel streamlined, high-end, and easy to scan while still feeling like a functional chat app.",
  },
  {
    role: "assistant",
    name: "GPT",
    avatar: assets.chatgptlogo,
    text:
      "The interface uses layered gradients, rounded panels, cleaner typography, and compact but clear messaging blocks so the experience feels premium without becoming overdecorated.",
  },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-mark">
            <img src={assets.chatgpt} alt="ChatGPT logo" className="brand-logo" />
            <span>ChatGPT</span>
          </div>
          <button className="new-chat-button">
            <img src={assets.add30} alt="Add chat" className="icon-14" />
            New chat
          </button>
        </div>

        <div className="sidebar-section">
          <div className="section-label">Recent</div>
          <div className="chat-list">
            {historyItems.map((item, index) => (
              <button key={item} className={`chat-item ${index === 0 ? "active" : ""}`}>
                <img src={assets.message} alt="Chat" className="icon-14" />
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-footer">
          <button className="utility-item">
            <img src={assets.addhome} alt="Home" className="icon-14" />
            <span>Home</span>
          </button>
          <button className="utility-item">
            <img src={assets.bookmark} alt="Saved" className="icon-14" />
            <span>Saved</span>
          </button>
          <button className="utility-item highlighted">
            <img src={assets.rocket} alt="Upgrade" className="icon-14" />
            <span>Upgrade to Pro</span>
          </button>
        </div>
      </aside>

      <main className="chat-panel">
        <header className="topbar">
          <div className="topbar-left">
            <div className="status-pill">
              <span className="status-dot" />
              Online
            </div>
            <div className="model-pill">GPT-4.1</div>
          </div>

          <div className="topbar-actions">
            <button className="toolbar-button">Share</button>
            <button className="toolbar-button">Export</button>
            <button className="toolbar-button ghost">Details</button>
          </div>
        </header>

        <div className="chat-surface">
          <div className="message-stack">
            {conversation.map((message) => (
              <div key={`${message.role}-${message.text}`} className={`message-row ${message.role}`}>
                <img src={message.avatar} alt={`${message.name} avatar`} className="message-avatar" />
                <div className="message-card">
                  <div className="message-meta">{message.name}</div>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="composer-wrap">
          <div className="prompt-row">
            {quickPrompts.map((prompt) => (
              <button key={prompt} className="prompt-chip">
                {prompt}
              </button>
            ))}
          </div>

          <div className="composer-box">
            <button className="composer-action" aria-label="Attach file">
              <img src={assets.add30} alt="Attach" className="icon-14" />
            </button>

            <textarea
              rows="1"
              defaultValue="Design a premium AI assistant dashboard for a growing SaaS brand."
              aria-label="Message input"
            />

            <button className="send-button" aria-label="Send message">
              <img src={assets.send} alt="Send" className="icon-18" />
            </button>
          </div>

          <p className="disclaimer">
            ChatGPT may produce inaccurate information about people, places, or facts. Use this as a creative front-end concept.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
