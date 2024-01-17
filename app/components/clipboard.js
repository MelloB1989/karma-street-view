// components/CopyToClipboardButton.js

import React, { useRef } from "react";
import "@/styles/view.css";

const CopyToClipboardButton = () => {
  const buttonRef = useRef(null);

  //   const handleCopy = async () => {
  //     try {
  //       const response = await fetch("/api/copyToClipboard");
  //       const { currentUrl } = await response.json();

  //       // Create a hidden input element and set its value to the current URL
  //       const hiddenInput = document.createElement("input");
  //       hiddenInput.value = currentUrl;

  //       // Append the input element to the document
  //       document.body.appendChild(hiddenInput);

  //       // Select the text in the input element
  //       hiddenInput.select();
  //       hiddenInput.setSelectionRange(0, 99999); // For mobile devices

  //       // Copy the selected text to the clipboard
  //       document.execCommand("copy");

  //       // Remove the input element from the document
  //       document.body.removeChild(hiddenInput);

  //       console.log("URL copied to clipboard:", currentUrl);
  //     } catch (error) {
  //       console.error("Error copying URL to clipboard:", error);
  //     }
  //   };

  const handleCopy = async () => {
    try {
      let apiUrl = "/api/copyToClipboard";

      // Check if running on the client side (browser)
      if (typeof window !== "undefined") {
        apiUrl = `${window.location.origin}${apiUrl}`;
      }

      const response = await fetch(apiUrl);
      const { currentUrl } = await response.json();

      const hiddenInput = document.createElement("input");
      hiddenInput.value = currentUrl;

      // Append the input element to the document
      document.body.appendChild(hiddenInput);

      // Select the text in the input element
      hiddenInput.select();
      hiddenInput.setSelectionRange(0, 99999); // For mobile devices

      // Copy the selected text to the clipboard
      document.execCommand("copy");

      // Remove the input element from the document
      document.body.removeChild(hiddenInput);

      console.log("URL copied to clipboard:", currentUrl);
    } catch (error) {
      console.error("Error copying URL to clipboard:", error);
    }
  };

  return (
    <button ref={buttonRef} onClick={handleCopy} className="copy-clipboard">
      <img src="/copy.svg"></img>
    </button>
  );
};

export default CopyToClipboardButton;
