package service.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductTest {
    private Product product;
    @BeforeEach
    public void TestInitialize()
    {
        this.product = new Product(0, "shoes", 101.50);
    }

    @Test
    void testConstructor() {
        assertEquals(0, this.product.getProductNumber());
        assertEquals("shoes", this.product.getProductName());
        assertEquals(101.50, this.product.getPrice());
    }

}