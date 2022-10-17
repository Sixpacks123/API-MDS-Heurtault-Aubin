import { hashSync,hash } from "bcrypt"
import { Request, Response } from "express"
import { userInfo } from "os"
import { BCRYPT_ROUND } from "../config/constants"
import { Users } from "../models/Users"
import { CrudController } from "./CrudControllers"


export class UserController extends CrudController{
    public async signin (req: Request, res: Response): Promise<void> {
        let userInfo = req.body
        userInfo.password = await hash(userInfo.password, BCRYPT_ROUND);
        Users.create(req.body)
        .then(users =>{
          let name = users.lastname;
          let msg = "l'utilisateur  "+name+" a été ajouté";
          res.json({"message ": msg})})
        .catch(err => {
          console.log(err);    
          res.json({'message':'insertion impossible'})
        })
      }
}