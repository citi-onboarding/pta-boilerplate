import Message from "./Message";
import Terminal from "./Terminal";
import {
  InsertableDatabase,
  GetableDatabase,
  RemoveableDatabase,
  UpdatableDatabaseValue,
  FindableDatabaseValue,
} from "./types";
import { PrismaClient, type Prisma } from "@prisma/client";
import prisma from "@database";

type ModelNames = Prisma.ModelName;

type Models = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findFirst"]>>,
    null
  >;
};

type ModelsWithoutId = {
  [M in ModelNames]: Omit<Models[M], "id">;
};

export default class Citi<Entity extends ModelNames> {
  constructor(readonly entity: Entity) {}

  areValuesUndefined(...elements: string[]): boolean {
    const isAnyUndefined = elements.some((element) => {
      return element === undefined;
    });
    return isAnyUndefined;
  }

  async insertIntoDatabase<T extends ModelsWithoutId[Entity]>(
    object: T
  ): Promise<InsertableDatabase> {
    try {
      console.log(object, this.entity.toLowerCase());
      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].create({
        data: object,
      });
      Terminal.show(Message.INSERTED_IN_DATABASE);
      return {
        httpStatus: 201,
        message: Message.INSERTED_IN_DATABASE,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_INSERTING_DATABASE);
      return {
        httpStatus: 400,
        message: Message.ERROR_INSERTING_DATABASE,
      };
    }
  }

  async getAll(): Promise<GetableDatabase<Models[Entity]>> {
    try {
      const values = await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].findMany();
      Terminal.show(Message.GET_ALL_VALUES_FROM_DATABASE);
      return {
        httpStatus: 200,
        values,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_GETTING_VALUES_FROM_DATABASE);
      return {
        httpStatus: 400,
        values: [],
      };
    }
  }

  async findById(id: string): Promise<FindableDatabaseValue<Models[Entity]>> {
    try {
      const value = await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].findFirst({
        where: {
          id: Number(id),
        },
      });
      Terminal.show(Message.VALUE_WAS_FOUND);
      return {
        httpStatus: 200,
        value,
      };
    } catch (error) {
      Terminal.show(Message.VALUE_WAS_NOT_FOUND);
      return {
        httpStatus: 400,
        value: undefined,
      };
    }
  }

  async updateValue<T extends Partial<ModelsWithoutId[Entity]>>(
    id: string,
    object: T
  ): Promise<UpdatableDatabaseValue> {
    try {
      const valueExists = await this.findById(id);
      if (!valueExists.value)
        return {
          httpStatus: 400,
          messageFromUpdate: Message.VALUE_WAS_NOT_FOUND,
        };

      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].update({
        where: {
          id: Number(id),
        },
        data: object,
      });

      Terminal.show(Message.VALUE_WAS_UPDATED);
      return {
        httpStatus: 200,
        messageFromUpdate: Message.VALUE_WAS_UPDATED,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_AT_UPDATE_FROM_DATABASE);
      return {
        httpStatus: 400,
        messageFromUpdate: Message.ERROR_AT_UPDATE_FROM_DATABASE,
      };
    }
  }

  async deleteValue(id: string): Promise<RemoveableDatabase> {
    try {
      await prisma[
        this.entity.toLowerCase() as Uncapitalize<Prisma.ModelName>
        //@ts-expect-error
      ].delete({
        where: {
          id: Number(id),
        },
      });
      Terminal.show(Message.VALUE_DELETED_FROM_DATABASE);
      return {
        httpStatus: 200,
        messageFromDelete: Message.VALUE_DELETED_FROM_DATABASE,
      };
    } catch (error) {
      Terminal.show(Message.ERROR_AT_DELETE_FROM_DATABASE);
      return {
        httpStatus: 400,
        messageFromDelete: Message.ERROR_AT_DELETE_FROM_DATABASE,
      };
    }
  }
}
