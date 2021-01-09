import http from "../http-common";
import authHeader from "../auth-service/auth-header"

class PurchaseService {
  addToCart(data) {
    console.log(data);
    return http.post("/purchase/add", data, { headers: authHeader() });
  }
  getOrders(){
    return http.get("/purchase/all",  { headers: authHeader() });
  
  }
  getOrderById(id){
    return http.get(`/purchase/${id}`,  { headers: authHeader() });
  
  }
  
}

export default new PurchaseService();
