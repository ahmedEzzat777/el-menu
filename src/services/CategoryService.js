import getFirebaseDatabase from "../helpers/getFirebaseDatabase";
import getFromDb from "../helpers/getFromDb";
import spreadObject from "../helpers/spreadObject";

const db = getFirebaseDatabase();

export default class CategoryService {
  static getCategories(userId) {
    return getFromDb(db, userId + "/user/categories").then((d) =>
      spreadObject(d)
    );
  }

  static getCategoryItems(userId, categoryId) {
    return getFromDb(db, `${userId}/user/productItems`).then((d) =>
      spreadObject(d).filter((x) => x.categoryGuid === categoryId)
    );
  }
}
