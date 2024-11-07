import { api } from "./api";

interface emailBody {
  name: string;
  email: string;
  message: string;
}

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

const sendEmail = async (body: emailBody) => {
  try {
    const response = await api.post("contact", body, {
      responseType: "json",
    });
    return response.status;
  } catch (error) {
    throw error; // Optionally re-throw or handle the error as needed
  }
};

export { getProjects, getDevProjects, getComProjects, getArticles, sendEmail };
