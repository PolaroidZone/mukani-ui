import { api } from "./api";

const getProjects = async () => {
  const response = await api.get("projects", {
    responseType: "json",
  });
  return response;
};

const getDevProjects = async () => {
  const response = await api.get("projects/development", {
    responseType: "json",
  });
  return response;
};

const getComProjects = async () => {
  const response = await api.get("projects/complete", {
    responseType: "json",
  });
  return response;
};

const getArticles = async () => {
  const response = await api.get("articles", {
    responseType: "json",
  });
  return response;
};

export { getProjects };
