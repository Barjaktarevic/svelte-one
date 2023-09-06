import axios from "axios";

import { type IUser } from "../assets/models/IUser";
import { ServiceBase } from "./ServiceBase";

class UserService extends ServiceBase {
  async getUsers() {
    const res = await axios.get<IUser[]>(this.baseUrl + "/users");
    return res.data;
  }
}

const userService = new UserService();
export default userService;
