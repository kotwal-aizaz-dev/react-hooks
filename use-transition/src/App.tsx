import { useState, useTransition } from "react";
import "./App.css";

type Tab = "about" | "posts" | "contact";
function App() {
  const [tab, setTab] = useState<Tab>("about");
  /**
   * *useTransition:
   * It is used to switch between renders without having to wait for the current render to finish.
   */
  const [isPending, startTransition] = useTransition();
  const selectTab = (tab: Tab) => {
    // ? This works only with setState | this works with props as well.
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <div>
      <div>
        <TabButton onClick={selectTab} title="about" />
        <TabButton onClick={selectTab} title="posts" />
        <TabButton onClick={selectTab} title="contact" />
      </div>
      {/* //!You can access a boolean to show something while the transition / render is happening.  */}
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <>
          {tab === "about" && <AboutTab />}
          {tab === "posts" && <PostsTab />}
          {tab === "contact" && <ContactTab />}
        </>
      )}
    </div>
  );
}

export default App;

// Tab Button 
type TabButtonProps = {
  title: string;
  onClick: (tab: Tab) => void;
};

function TabButton({ title, onClick }: TabButtonProps) {
  return <button onClick={() => onClick(title as Tab)}>{title}</button>;
}

// About Tab 
function AboutTab() {
  return <p>Welcome to Profile!</p>;
}

// Posts Tab 
function PostsTab() {
  const items = [];
  for (let i = 0; i < 2500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return <ul>{items}</ul>;
}

function SlowPost({ index }: { index: number }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1ms per item to emulate extremely slow code.
  }

  return <li>Post ${index + 1}</li>;
}

// Contact Tab
function ContactTab() {
  return <p>Contact me at mail@mail.com</p>;
}
