export default class CurrencyConverter {
  static async convert(dollars, code) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/b73c2e0fbc8e541dbb915c82/pair/USD/${code}/${dollars}`);
      const jsonifiedResponse = await response.json();
      console.log(response);
      console.log(jsonifiedResponse);
      if (!response.ok) {
        // console.log(`ERROR response:`);
        // console.log(response);
        const errorMessage = `${response.status} ${response.statusText} ${jsonifiedResponse['error-type']}`;
        // console.log(`ERROR: ${errorMessage}`);
        throw new Error(errorMessage);
      }
      // console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.log(error);
      return error;
    }
  }
}