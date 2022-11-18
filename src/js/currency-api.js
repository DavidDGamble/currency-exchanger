export default class CurrencyConverter {
  static async convertUS(dollars, code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${code}/${dollars}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        console.log(response);
      console.log(jsonifiedResponse);
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse['error-type']}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }

  static async convertAll(dollars, curr, code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${curr}/${code}/${dollars}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        console.log(response);
      console.log(jsonifiedResponse);
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse['error-type']}`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch(error) {
      return error;
    }
  }
}