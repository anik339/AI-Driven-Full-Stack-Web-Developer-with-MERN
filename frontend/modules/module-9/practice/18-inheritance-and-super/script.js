const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class User {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `${this.name} is a user.`;
  }
}

class Admin extends User {
  constructor(name, permissions) {
    super(name);
    this.permissions = permissions;
  }

  describe() {
    return `${super.describe()} Permissions: ${this.permissions.join(", ")}.`;
  }
}

const admin = new Admin("Anik", ["manage-users", "review-content"]);

    show("Admin", admin.describe());
show("Inheritance check", admin instanceof User);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
