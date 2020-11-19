package com.example.accessingdatamysql.modelsTemp;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserTest {
    User sampleUser;
    @BeforeEach
    void setUp() {
        long id=0;
        sampleUser= new User().setId(id).setEmail("lo6oJaki@gmail.com").setUsername("Lo6o Jaki").setPassword("13456789");

    }

    @AfterEach
    void tearDown() {}

    @Test
    void getId() {
        assertEquals(0, sampleUser.getId());
    }

    @Test
    void setId() {
        sampleUser.setId((long) 6);
        assertEquals(6, sampleUser.getId());
    }

    @Test
    void getUsername() {
        assertEquals("Lo6o Jaki", sampleUser.getUsername());
    }

    @Test
    void setUsername() {
        sampleUser.setUsername("changed");
        assertEquals("changed", sampleUser.getUsername());
    }

    @Test
    void getEmail() {
        assertEquals("lo6oJaki@gmail.com", sampleUser.getEmail());
    }

    @Test
    void setEmail() {
        sampleUser.setEmail("newEmail@gmail.com");
        assertEquals("newEmail@gmail.com", sampleUser.getEmail());
    }

    @Test
    void getPassword() {
        assertEquals("13456789", sampleUser.getPassword());
    }

    @Test
    void setPassword() {
        sampleUser.setPassword("987654321");
        assertEquals("987654321", sampleUser.getPassword());
    }

}