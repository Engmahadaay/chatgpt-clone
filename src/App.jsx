import React, { useEffect, useState } from "react";
import {
  SearchIcon,
  SidebarToggleIcon,
  NewChatIcon,
  ImagesIcon,
  LibraryIcon,
  ScheduledIcon,
  PluginsIcon,
  ProjectsIcon,
  CodexIcon,
  MoreIcon,
  PlusIcon,
  ThinkIcon,
  MicIcon,
  WaveformIcon,
  GiftIcon,
  RefreshIcon,
} from "./components/Icons";
import "./App.css";

const navItems = [
  { icon: ImagesIcon, label: "Images" },
  { icon: LibraryIcon, label: "Library" },
  { icon: ScheduledIcon, label: "Scheduled" },
  { icon: PluginsIcon, label: "Plugins" },
  { icon: ProjectsIcon, label: "Projects" },
  { icon: CodexIcon, label: "Codex" },
  { icon: MoreIcon, label: "More" },
];

const recentChats = [
  "Change Git Username Email",
  "Samee Chatbot MERN Waxbarasho",
  "Soo Jeedin Project Student Supervisor",
  "iPhone Biyo Cilad Touch",
  "Sharaxaad File Student Supervisor",
  "Qoraal Kooban Horumar Riyo",
  "Nadiifinta RAMka Hal Mar",
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className={`app-shell ${sidebarOpen ? "sidebar-open" : ""}`}>
      <button
        type="button"
        className="sidebar-overlay"
        aria-label="Close sidebar"
        onClick={closeSidebar}
      />

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-brand">ChatGPT</span>
          <div className="sidebar-header-actions">
            <button className="icon-btn" aria-label="Search">
              <SearchIcon />
            </button>
            <button
              className="icon-btn sidebar-close-btn"
              aria-label="Close sidebar"
              onClick={closeSidebar}
            >
              <SidebarToggleIcon />
            </button>
          </div>
        </div>

        <div className="sidebar-scroll">
          <button className="new-chat-btn active" onClick={closeSidebar}>
            <NewChatIcon />
            New chat
          </button>

          <nav className="nav-list">
            {navItems.map(({ icon: Icon, label }) => (
              <button key={label} className="nav-item" onClick={closeSidebar}>
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="recents-section">
            <div className="recents-label">Recents</div>
            {recentChats.map((chat) => (
              <button key={chat} className="recent-item" onClick={closeSidebar}>
                {chat}
              </button>
            ))}
          </div>
        </div>

        <div className="sidebar-bottom">
          <button className="user-profile">
            <div className="user-avatar">MO</div>
            <div className="user-info">
              <span className="user-name">mahadaay online</span>
              <span className="user-plan">Free</span>
            </div>
          </button>
          <button className="claim-offer-btn">
            <GiftIcon />
            Claim offer
          </button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="main-header">
          <div className="header-left">
            <button
              className="icon-btn mobile-menu-btn"
              aria-label="Open sidebar"
              onClick={toggleSidebar}
            >
              <SidebarToggleIcon />
            </button>
          </div>

          <div className="mode-toggle">
            <button className="mode-btn active">Chat</button>
            <button className="mode-btn">+ Work</button>
          </div>

          <div className="header-actions">
            <button className="free-offer-link">
              <GiftIcon />
              <span>Free offer</span>
            </button>
            <button className="icon-btn" aria-label="Refresh">
              <RefreshIcon />
            </button>
          </div>
        </header>

        <div className="welcome-area">
          <h1 className="greeting">Hey, Eng.Mahadaay. Ready to dive in?</h1>

          <div className="input-bar">
            <button className="input-plus-btn" aria-label="Add">
              <PlusIcon />
            </button>
            <input
              type="text"
              className="input-field"
              placeholder="Ask anything"
              aria-label="Message input"
            />
            <div className="input-actions">
              <button className="think-btn">
                <ThinkIcon />
                <span>Think</span>
              </button>
              <button className="icon-btn mic-btn" aria-label="Voice input">
                <MicIcon />
              </button>
              <button className="voice-mode-btn" aria-label="Voice mode">
                <WaveformIcon />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
