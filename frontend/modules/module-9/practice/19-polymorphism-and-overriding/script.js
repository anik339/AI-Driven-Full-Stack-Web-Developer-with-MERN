const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class Notifier {
  send(message) {
    return `Notification: ${message}`;
  }
}

class EmailNotifier extends Notifier {
  send(message) {
    return `Email sent: ${message}`;
  }
}

class ConsoleNotifier extends Notifier {
  send(message) {
    return `Console alert: ${message}`;
  }
}

const notifiers = [new EmailNotifier(), new ConsoleNotifier()];
const results = notifiers.map((notifier) => notifier.send("Build completed"));

    results.forEach((result, index) => show(`Notifier ${index + 1}`, result));
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
