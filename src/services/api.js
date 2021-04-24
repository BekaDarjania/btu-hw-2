const baseURL = 'http://jsonplaceholder.typicode.com';

export class API_SERVICES {
  static async getNotesListAsync() {
    const url = `${baseURL}/todos`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (err) {}
  }
}

export default API_SERVICES;
