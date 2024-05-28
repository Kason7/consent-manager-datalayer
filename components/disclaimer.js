function createDisclaimerFooter() {
  // Create the main disclaimer footer
  const disclaimerFooter = document.createElement("div");
  disclaimerFooter.className = "disclaimer-footer";

  // Create the main disclaimer container
  const disclaimerContainer = document.createElement("div");
  disclaimerContainer.className = "disclaimer-container";
  disclaimerFooter.appendChild(disclaimerContainer);

  // Create the disclaimer info section
  const disclaimerInfo = document.createElement("div");
  if (window.location.href.includes(".dk")) {
    disclaimerInfo.innerHTML = `
      <p>
        Ved at bruge dette websted accepterer du vores brug af cookies og <a href="/privatlivspolitik/"><u>persondatapolitik</u></a>. Vi bruger cookies for at give dig en fantastisk oplevelse og for at hjælpe vores hjemmeside med at køre effektivt.
      </p>
    `;
  } else {
    disclaimerInfo.innerHTML = `
      <p>
        By using this website, you agree to our use of cookies and <a href="/privacy-policy/">privacy policy</a>. We use cookies to provide you with a great experience and to help our website run effectively.
      </p>
    `;
  }

  disclaimerInfo.className = "disclaimer-info";
  disclaimerContainer.appendChild(disclaimerInfo);

  // Create wrapper for buttons
  const disclaimerWrapper = document.createElement("div");
  disclaimerWrapper.className = "disclaimer-wrapper";
  disclaimerContainer.appendChild(disclaimerWrapper);

  // Create the settings button
  const disclaimerToggle = document.createElement("button");
  if (window.location.href.includes(".dk")) {
    disclaimerToggle.textContent = "Indstillinger";
  } else {
    disclaimerToggle.textContent = "Settings";
  }

  disclaimerToggle.className = "disclaimer-toggle";
  disclaimerToggle.addEventListener("click", handleCookieToggle);
  disclaimerWrapper.appendChild(disclaimerToggle);

  // Create the OK button
  const disclaimerAction = document.createElement("button");
  if (window.location.href.includes(".dk")) {
    disclaimerAction.textContent = "Bekræft";
  } else {
    disclaimerAction.textContent = "Confirm";
  }

  disclaimerAction.className = "disclaimer-action";
  disclaimerAction.addEventListener("click", handleCookieDisclaimer);
  disclaimerWrapper.appendChild(disclaimerAction);

  return disclaimerFooter;
}
