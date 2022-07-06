import { userService } from "../services/userService.js"

export async function SignUpUser(req, res){
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.sendStatus(422);
      }

      const user = await userService.signUpUser(name, email, password);

      if (user === null) {
        return res.sendStatus(422);
      }

      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  
  export async function SignInUser(req, res){
    try {
      const { email, password } = req.body;
        
      if (!email || !password) {
        return res.sendStatus(422);
      }

      const token = await userService.signInUser(email, password);

      if (token === null) {
        return res.sendStatus(422);
      }
  
      res.send({
        token,
      });
      
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };