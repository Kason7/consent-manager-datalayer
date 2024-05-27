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
  disclaimerInfo.innerHTML = `
                    <p>
                        Ved at bruge dette websted accepterer du vores brug af cookies og <a href="/policies/privacy-policy/"><u>privatlivspolitik</u></a>. Vi bruger cookies for at give dig en fantastisk oplevelse og for at hjælpe vores hjemmeside med at køre effektivt.
                    </p>
                `;
  disclaimerInfo.className = "disclaimer-info";
  disclaimerContainer.appendChild(disclaimerInfo);

  // Create wrapper for buttons
  const disclaimerWrapper = document.createElement("div");
  disclaimerWrapper.className = "disclaimer-wrapper";
  disclaimerContainer.appendChild(disclaimerWrapper);

  // Create the settings button
  const disclaimerToggle = document.createElement("button");
  disclaimerToggle.textContent = "Indstillinger";
  disclaimerToggle.className = "disclaimer-toggle";
  disclaimerToggle.addEventListener("click", handleCookieToggle);
  disclaimerWrapper.appendChild(disclaimerToggle);

  // Create the OK button
  const disclaimerAction = document.createElement("button");
  disclaimerAction.textContent = "OK";
  disclaimerAction.className = "disclaimer-action";
  disclaimerAction.addEventListener("click", handleCookieDisclaimer);
  disclaimerWrapper.appendChild(disclaimerAction);

  return disclaimerFooter;
}
