import PocketBase from "pocketbase";

const pb = new PocketBase("https://gallio-task.pockethost.io/");
pb.autoCancellation(false);

class AppModel {
  constructor(collection_name) {
    this.collection = collection_name;
  }

  async findById(id, conditions = null) {
    const res = await pb.collection(this.collection).getOne(id, conditions);
    return res;
  }

  async findAll(conditions = null) {
    const res = await pb
      .collection(this.collection)
      .getFullList((conditions = null));
    return res;
  }

  async findPaginated(limit, conditions = null) {
    limit = limit ?? 10;
    const res = await pb
      .collection(this.collection)
      .getList(1, limit, conditions);
    return res;
  }

  async save(data) {
    try {
      const res = await pb.collection(this.collection).create(data);
      return res;
    } catch (error) {
      return error;
    }
  }

  async update(id, data) {
    const isExists = await pb.collection(this.collection).getOne(id);
    if (!isExists) {
      return { message: "Not Found", status: 404 };
    }
    try {
      const res = await pb.collection(this.collection).update(id, data);
      return res;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    const isExists = await pb.collection(this.collection).getOne(id);
    if (!isExists) {
      return { message: "Not Found", status: 404 };
    }
    try {
      const res = await pb.collection(this.collection).delete(id);
      return res;
    } catch (error) {
      return error;
    }
  }
}

export default AppModel;
