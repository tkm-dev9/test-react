import { useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";


type TabKind = "about" | "posts" | "contact";

export default function TabContainer() {
  const [tab, setTab] = useState("about");
  function selectTab(nextTab: TabKind) {
    setTab(nextTab);
  }
  return (
    <>
      <h1>Bad Example1</h1>
      <TabButton
        isActive={tab === "about"}
        onClick={() => selectTab("about")}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === "posts"}
        onClick={() => selectTab("posts")}
      >
        Posts(slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </>
  )
}