"use client";

import React, { useEffect } from "react";

export default function JivoChatWidget() {
  useEffect(() => {
    // Безопасно создаем скрипт только в браузере
    const script = document.createElement("script");
    script.src = "https://jivo.ru"; 
    script.async = true;
    script.id = "jivo-widget-script";
    
    if (!document.getElementById("jivo-widget-script")) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById("jivo-widget-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // Ничего не рендерит в DOM
}