
import { client } from "../client";
import { Planeta } from "../models/planetas";

class PlanetaServices {
  public static async getAllPlanets(): Promise<any> {
    let listaPlanetas: Planeta[] = [];

    try {
      let response = await client.get("/planets/")
      listaPlanetas.push(...response.data);
      
      while (response.data.next) {
        response = await client.get(response.data.next);
        console.log(response);
        
        listaPlanetas.push(...response.data);
      }

      if (listaPlanetas.length > 0) {
        return listaPlanetas;
      } else {
        return "Error fetching data";
      }

    } catch (error) {
      return `Error fetching data: ${error}`;
    }
  }
  
}

export default PlanetaServices;
