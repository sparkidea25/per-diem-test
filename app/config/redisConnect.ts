import Redis from "ioredis";

const PORT = process.env.REDIS_PORT || "6379";

const subscription = new Redis(PORT);
const user = new Redis(PORT);

const opts = {
  createClient(type: any) {
    switch (type) {
      case "subscription":
        return subscription;
      case "user":
        return user;
      default:
        return new Redis(PORT);
    }
  },
};

export default opts;
