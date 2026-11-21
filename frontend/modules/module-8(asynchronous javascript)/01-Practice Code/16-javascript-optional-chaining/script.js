const user = { name:"Morgan", contact:{email:"morgan@example.com"} };
document.querySelector("#run").addEventListener("click", () => {
  const email = user.contact?.email ?? "No email";
  const phone = user.contact?.phone ?? "No phone";
  const city = user.address?.city ?? "No city";
  const formatter = user.formatName?.() ?? "No custom formatter";
  document.querySelector("#out").textContent =
    `Email: ${email}. Phone: ${phone}. City: ${city}. Formatter: ${formatter}.`;
});
// Optional chaining returns undefined when the value before ?. is nullish.
