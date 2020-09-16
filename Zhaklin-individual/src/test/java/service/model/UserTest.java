package service.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    private User user;
    @BeforeEach
    public void TestInitialize()
    {
        this.user = new User(0, "Jaki");
    }

    @Test
    void testConstructor() {
        assertEquals(0, this.user.getUserNumber());
        assertEquals("Jaki", this.user.getUserName());
    }

}