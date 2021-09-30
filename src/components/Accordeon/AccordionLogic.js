import { useEffect, useState, useRef } from "react";

const AccordionLogic = () => {
  const [bodyState, setBodyState] = useState(() => true);

  let curr = useRef(null);

  useEffect(() => {
    let fstEl = document.querySelector(".accordeon_").children[0].children[0];
    curr.current = fstEl;
    let body = fstEl.nextElementSibling;
    let icon = fstEl.children[1];
    open(body, icon);
  }, []);

  function toggle(body, icon) {
    setBodyState((prev) => !prev);
    if (bodyState) {
      body.style.cssText = `height: ${body.children[0].clientHeight}px; padding-bottom: 15px; visibility: visible`;
      icon.style.transform = "rotate(180deg)";
    } else {
      body.style.cssText = `height: 0px; padding-bottom: 0; visibility: hidden`;
      icon.style.transform = "rotate(0deg)";
    }
  }

  function open(body, icon) {
    setBodyState(false);
    body.style.cssText = `height: ${body.children[0].clientHeight}px; padding-bottom: 15px; visibility: visible`;
    icon.style.transform = "rotate(180deg)";
  }

  function closeAll(ev) {
    setBodyState(false);
    let items = ev.target.parentElement.parentElement.children;
    items = Array.from(items);
    items.forEach((item) => {
      item.children[1].style.cssText = `height: 0px; padding-bottom: 0px; visibility: hidden`;
      item.children[0].children[1].style.transform = "rotate(0deg)";
    });
  }

  function clickHandle(ev) {
    let body = ev.target.nextElementSibling;
    let icon = ev.target.children[1];
    if (ev.target !== curr.current) {
      curr.current = ev.target;
      closeAll(ev);
      open(body, icon);
    } else if (ev.target === curr.current) {
      toggle(body, icon);
    }
  }
  return clickHandle;
};

export default AccordionLogic;
