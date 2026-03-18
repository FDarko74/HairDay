import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedule/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento");
  }
}
