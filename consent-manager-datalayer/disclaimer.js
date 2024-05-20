function createDisclaimerFooter() {
  // Create the main disclaimer footer container
  const disclaimerFooter = document.createElement("div");
  disclaimerFooter.className = "disclaimer-footer";

  // Create the disclaimer info section
  const disclaimerInfo = document.createElement("div");
  disclaimerInfo.innerHTML = `
                    <p>
                        Ved at bruge dette websted accepterer du vores brug af cookies og <a href="/policies/privacy-policy/"><u>privatlivspolitik</u></a>. Vi bruger cookies for at give dig en fantastisk oplevelse og for at hjælpe vores hjemmeside med at køre effektivt.
                    </p>
                `;
  disclaimerInfo.className = "disclaimer-info";

  // Create the settings button
  const disclaimerToggle = document.createElement("button");
  disclaimerToggle.textContent = "Settings";
  disclaimerToggle.className = "disclaimer-toggle";
  disclaimerToggle.addEventListener("click", handleCookieToggle);

  // Create the OK button
  const disclaimerAction = document.createElement("button");
  disclaimerAction.textContent = "OK";
  disclaimerAction.className = "disclaimer-action";
  disclaimerAction.addEventListener("click", handleCookieDisclaimer);

  // Append elements to disclaimer footer container
  disclaimerFooter.appendChild(disclaimerInfo);
  disclaimerFooter.appendChild(disclaimerToggle);
  disclaimerFooter.appendChild(disclaimerAction);

  return disclaimerFooter;
}
