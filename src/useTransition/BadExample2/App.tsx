import { Suspense, useState } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import ContactTab from "./ContactTab";

export default function TabContainer() {
  const [tab, setTab] = useState("about");
  return (
    <Suspense fallback={<h1>ローディング中・・・</h1>}>
      <h1>Bad Example2</h1>
      <TabButton
        isActive={tab === "about"}
        onClick={() => setTab("about")}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === "posts"}
        onClick={() => setTab("posts")}
      >
        Posts(slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => setTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </Suspense>
  )
}