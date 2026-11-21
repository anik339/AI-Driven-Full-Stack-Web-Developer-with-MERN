const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class Slug {
  static fromTitle(title) {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  static isValid(value) {
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
  }
}

const slug = Slug.fromTitle("Git & GitHub Workflow");

    show("Generated slug", slug);
show("Slug valid", Slug.isValid(slug));
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
