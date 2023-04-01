function sendMessage(event) {
    event.preventDefault();

    const webhookUrl = document.getElementById("webhook-url").value;
    const username = document.getElementById("username").value;
    const avatarUrl = document.getElementById("avatar-url").value;
    const message = document.getElementById("message").value;

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        avatar_url: avatarUrl,
        content: message
      })
    });
  }