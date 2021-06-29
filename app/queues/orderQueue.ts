import Bull from "bull";
const orderQueue = new Bull("email", {
  redis: process.env.REDIS_PORT,
});

const createNewOrder = (data: any) => {
  orderQueue.add(data, {});
};

export { createNewOrder };
