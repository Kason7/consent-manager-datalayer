// Handle consent options change
function handleConsentOptions(optionName, checked) {
  // Update consent options in localStorage
  const consentOptions =
    JSON.parse(localStorage.getItem("consentOptions")) || {};
  consentOptions[optionName] = checked ? "granted" : "denied";
  localStorage.setItem("consentOptions", JSON.stringify(consentOptions));
}

function handleCookieToggle() {
  const consentPopup = document.querySelector(".disclaimer-popup");
  // Toggle the display property of the style element
  if (consentPopup.style.display === "none") {
    consentPopup.style.display = "block";
  } else {
    consentPopup.style.display = "none";
  }
}

// Handle click event for OK button
function handleCookieDisclaimer() {
  // Set localStorage to indicate cookie approval
  localStorage.setItem("cookieApproval", true);

  // Push to dataLayer
  const consentOptions =
    JSON.parse(localStorage.getItem("consentOptions")) || {};
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    ...Object.fromEntries(
      Object.entries(consentOptions).map(([key, value]) => [key, value])
    ),
  });

  // Remove disclaimer footer from the document
  const disclaimerFooter = document.querySelector(".disclaimer-footer");
  disclaimerFooter.remove();
}

// Handle consent options object in localStorage and dataLayer
document.addEventListener("DOMContentLoaded", () => {
  // Initialize consent options in localStorage if not already set
  const savedConsent = JSON.parse(localStorage.getItem("consentOptions"));
  const consentDataLayer = (data) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_default",
      ...Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, value])
      ),
    });
  };
  const defaultConsentOptions = {};
  const consentOptions = [
    "ad_storage",
    "ad_user_data",
    "ad_personalization",
    "analytics_storage",
    "functionality_storage",
    "personalization_storage",
    "security_storage",
  ];
  consentOptions.forEach((option) => {
    defaultConsentOptions[option] = "granted";
  });
  if (!savedConsent) {
    localStorage.setItem(
      "consentOptions",
      JSON.stringify(defaultConsentOptions)
    );
    consentDataLayer(defaultConsentOptions);
  } else {
    consentDataLayer(savedConsent);
  }

  // Check localStorage for cookie approval
  if (localStorage.getItem("cookieApproval") === null) {
    // If cookie approval is not set, render disclaimer footer and consent popup
    const disclaimerFooter = createDisclaimerFooter();
    const consentPopup = createConsentPopup();
    document.body.appendChild(disclaimerFooter);
    document.body.appendChild(consentPopup);
  }
});
