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

const getArticleById = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Article ID is required to fetch the article.");
  }
  try {
    const response = await api.get(`articles/${id}`, {
      responseType: "json",
    });

    return response;
  } catch (error: any) {
    if (error.response.status === 404) {
      console.warn(`No next article found for ID: ${id}`);
      return 404; // Return null or an appropriate response if no article is found
    }
    throw error;
  }
};

const getNextArticle = async (id: string | undefined) => {
  if (!id) {
    throw new Error("Article ID is required to fetch the next article.");
  }

  try {
    const response = await api.get(`articles/${id}/next`, {
      responseType: "json",
    });
    return response; // Return only the data part
  } catch (error: any) {
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 404) {
        console.warn(`No next article found for ID: ${id}`);
        return 404; // Return null or an appropriate response if no article is found
      }
      // Other status codes can be handled here as needed
      console.error(
        `Error fetching article: ${error.response.status} - ${error.response.statusText}`
      );
    } else {
      // Handle errors that don't have a response (e.g., network errors)
      console.error("Network or unexpected error:", error.message);
    }
    throw error; // Re-throw the error if needed for further handling
  }
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

export {
  getProjects,
  getDevProjects,
  getComProjects,
  getArticles,
  sendEmail,
  getArticleById,
  getNextArticle,
};
