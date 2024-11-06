import {api} from "./api";

const getHomeData = async () => {
  const response = await api.get("/", {
    ResponseType: "json",
  });
  return response.data;
};

export { getHomeData };
