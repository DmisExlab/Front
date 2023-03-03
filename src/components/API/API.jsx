class ApiClass {
    constructor() {
      this.url = "https://api.dating.com/identity";
    }
    async invite(email, password, method) {
      const result = await fetch(this.url, {
        method,
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      return result;
    }
  }
  
 export const Api = new ApiClass();
  