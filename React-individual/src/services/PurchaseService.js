import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class PurchaseService {
  addToCart(data) {
    console.log(data);
    return http.post("/purchase/add", data);
  }
  
}

export default new PurchaseService();
