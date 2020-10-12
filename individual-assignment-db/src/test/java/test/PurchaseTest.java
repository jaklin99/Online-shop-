package test;
import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import com.example.accessingdatamysql.Controllers.PurchaseController;
import com.example.accessingdatamysql.Repository.PurchaseRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
//@SpringBootTest
@WebMvcTest(PurchaseController.class)
class PurchaseTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PurchaseRepository purchaseRepository;

    @Test
    public void getAllPurchases() throws Exception {
        doReturn(purchaseRepository.findAll()).when(purchaseRepository.findAll());
        this.mockMvc.perform(get("/purchase/all")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("Hello, Mock")));
    }
}