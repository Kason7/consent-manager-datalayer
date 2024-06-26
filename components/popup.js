function createConsentPopup() {
  // Create the disclaimer background fade
  const disclaimerFade = document.createElement("div");
  disclaimerFade.className = "disclaimer-fade";
  disclaimerFade.style.display = "none";
  disclaimerFade.addEventListener("click", handleCookieToggle);

  // Create the main disclaimer popup container
  const disclaimerPopup = document.createElement("div");
  disclaimerPopup.className = "disclaimer-popup";
  disclaimerFade.appendChild(disclaimerPopup);

  // Create the disclaimer title
  const disclaimerTitle = document.createElement("h2");
  disclaimerTitle.className = "disclaimer-title";
  if (window.location.href.includes(".dk")) {
    disclaimerTitle.textContent = "Vores cookies";
  } else {
    disclaimerTitle.textContent = "Our cookies";
  }

  disclaimerPopup.appendChild(disclaimerTitle);

  // Create the disclaimer text
  const disclaimerText = document.createElement("p");
  disclaimerText.className = "disclaimer-text";
  if (window.location.href.includes(".dk")) {
    disclaimerText.textContent = `
      Vores hjemmeside bruger cookies og lignende teknologier til at personalisere de annoncer, der vises for dig, og til at hjælpe med at give dig den bedste oplevelse på vores hjemmeside.
    `;
  } else {
    disclaimerText.textContent = `
      Our website uses cookies and similar technologies to personalize the advertisements shown to you and to help provide you with the best experience on our website.
    `;
  }
  disclaimerPopup.appendChild(disclaimerText);

  // Create the disclaimer link
  const disclaimerLink = document.createElement("div");
  disclaimerLink.className = "disclaimer-link";
  if (window.location.href.includes(".dk")) {
    disclaimerLink.innerHTML = `
      <a href="/privatlivspolitik/">
        Læs om vores brug af cookies og privatlivspolitik.
      </a>
    `;
  } else {
    disclaimerLink.innerHTML = `
      <a href="/privacy-policy/">
      Read about our use of cookies and privacy policy.
      </a>
    `;
  }

  disclaimerPopup.appendChild(disclaimerLink);

  // Create the disclaimer options section
  const disclaimerOptions = document.createElement("div");
  disclaimerOptions.className = "disclaimer-options";
  const consentOptions = [
    { label: "Ad storage", name: "ad_storage" },
    { label: "Ad user data", name: "ad_user_data" },
    { label: "Ad personalization", name: "ad_personalization" },
    { label: "Analytics storage", name: "analytics_storage" },
    { label: "Functionality storage", name: "functionality_storage" },
    { label: "Personalization storage", name: "personalization_storage" },
    { label: "Security storage", name: "security_storage" },
  ];
  consentOptions.forEach((option) => {
    const label = document.createElement("label");
    label.textContent = option.label;
    label.className = "option-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = option.name;
    checkbox.checked = getCheckboxState(option.name);
    checkbox.className = "option-checkbox";

    checkbox.addEventListener("change", () =>
      handleConsentOptions(option.name, checkbox.checked)
    );

    label.appendChild(checkbox);
    disclaimerOptions.appendChild(label);
  });
  // Function to get checkbox state from localStorage
  function getCheckboxState(optionName) {
    const consentOptions =
      JSON.parse(localStorage.getItem("consentOptions")) || {};
    return consentOptions[optionName] === "granted";
  }
  disclaimerPopup.appendChild(disclaimerOptions);

  // Create button wrapper
  const disclaimerButtons = document.createElement("div");
  disclaimerButtons.className = "disclaimer-buttons";
  disclaimerPopup.appendChild(disclaimerButtons);

  // Create the cancel button
  const disclaimerCancel = document.createElement("button");
  disclaimerCancel.className = "disclaimer-cancel";
  if (window.location.href.includes(".dk")) {
    disclaimerCancel.textContent = "Annuller";
  } else {
    disclaimerCancel.textContent = "Cancel";
  }

  disclaimerCancel.addEventListener("click", handleCookieToggle);
  disclaimerButtons.appendChild(disclaimerCancel);

  // Create the OK button
  const disclaimerConfirm = document.createElement("button");
  disclaimerConfirm.className = "disclaimer-confirm";
  if (window.location.href.includes(".dk")) {
    disclaimerConfirm.textContent = "Bekræft";
  } else {
    disclaimerConfirm.textContent = "Confirm";
  }

  disclaimerConfirm.addEventListener("click", handleCookieDisclaimer);
  disclaimerButtons.appendChild(disclaimerConfirm);

  return disclaimerFade;
}
