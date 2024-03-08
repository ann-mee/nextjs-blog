import { addUser } from "@/helpers/api-users";
import { hashPassword } from "@/helpers/auth";
import { checkIfUserExists } from "@/helpers/api-users";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const isExisting = await checkIfUserExists(email);

    if (isExisting) {
      res.status(422).json({ message: "User exits already" });
      return;
    }

    const hashedPassword = await hashPassword(password);

    await addUser({ email: email, password: hashedPassword });

    res.status(201).json({ message: "Success" });
  }
}
export default handler;
