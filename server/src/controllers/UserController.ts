import { Request, Response } from "express";
import { Citi, Crud } from "../global";

const citi = new Citi("User");

class UserController implements Crud {
  async create(request: Request, response: Response) {
    const { firstName, lastName, age } = request.body;

    const isAnyUndefined = citi.areValuesUndefined(firstName, lastName, age);
    if (isAnyUndefined) return response.status(400).send();

    const newUser = { firstName, lastName, age };
    const { httpStatus, message } = await citi.insertIntoDatabase(newUser);

    return response.status(httpStatus).send({ message });
  }

  async get(request: Request, response: Response) {
    const { httpStatus, values } = await citi.getAll();

    return response.status(httpStatus).send(values);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { firstName, lastName, age } = request.body;

    const updatedValues = { firstName, lastName, age };

    const { httpStatus, messageFromUpdate } = await citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  }
}

export default new UserController();
