import { useMemo, useState } from "react";
import './App.css';
import Portal from "./Portal";
import PortalExample from "./PortalExample";
import SearchForm from "./SearchForm";
import SelectUser from "./SelectUser";
import ApiSample from "./ApiSample";
import From from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
// import TabContainer from "./useTransition/BadExample/App";
// import TabContainer from "./useTransition/BadExample2/App";
import TabContainer from "./useTransition/GoodExample/App";
console.warn('App Outer');

export default function App() {
  console.warn('App');
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const divRef = useMemo(() => {
    let cleanup: (() => void) | undefined;
    return (div: HTMLDivElement | null) => {
      if (div === null) {
        cleanup?.();
        return;
      }
      const controller = new AbortController();
      document.addEventListener('click', (event) => {
        if (div.contains(event.target as Node)) return;
        setCount((count) => count + 1);
      }, {
        signal: controller.signal
      });
      cleanup = () => {
        controller.abort();
      }
    }
  }, []);

  // const divRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const div = divRef.current;
  //   if (div === null) return;
  //   const controller = new AbortController();
  //   document.addEventListener('click', (event) => {
  //     if (div.contains(event.target as Node)) return;
  //     setCount((count) => count + 1);
  //   }, {
  //     signal: controller.signal
  //   });
  //   return () => {
  //     controller.abort();
  //   }
  // }, []);

  return (
    <div>
      {/* <label>
        <input type="checkbox" checked={show} onChange={(e) => {
          setShow(e.currentTarget.checked);
        }} />
        Show
      </label>
      <p>count = {count}</p>
      {show && (
        <div className="square" ref={divRef}>
          div!
        </div>
      )}
      <Portal />
      <PortalExample /> */}

      {/* <SearchForm />
      <SelectUser />
      <ApiSample /> */}


      {/* <From /> */}
      {/* <Form2 /> */}
      {/* <Form3 /> */}
      {/* <Form4 /> */}

      <TabContainer />
    </div>
  )

}