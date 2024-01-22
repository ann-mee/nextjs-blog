import { sendForm } from "@/helpers/api-contact";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !email.includes("@") || !name || !message) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = { email, name, message };

    sendForm(newMessage);

    res.status(201).json({ message: "Successfully sent", message: newMessage });
  }
}
