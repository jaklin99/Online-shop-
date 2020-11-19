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
class CategoryTest {

    Category sampleC;

    @BeforeEach
    void setUp() {
        long id=0;
        sampleC = new Category().setCategoryId(id).setName("Rackets");
    }


    @AfterEach
    void tearDown() {
    }

    @Test
    void getCategoryId() {
        assertEquals(0, sampleC.getCategoryId());
    }

    @Test
    void setCategoryId() {
        sampleC.setCategoryId((long) 6);
        assertEquals(6, sampleC.getCategoryId());
    }

    @Test
    void getName() {
        assertEquals("Rackets", sampleC.getName());
    }

    @Test
    void setName() {
        sampleC.setName("Tennis rackets");
        assertEquals("Tennis rackets", sampleC.getName());
    }
}