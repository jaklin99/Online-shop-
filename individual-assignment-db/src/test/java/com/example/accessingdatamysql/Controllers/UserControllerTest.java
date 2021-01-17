package com.example.accessingdatamysql.Controllers;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@WithMockUser(roles="ADMIN")
class UserControllerTest {

    @Autowired
    private UserController userController;

    @MockBean
    private UserRepository userRepository;

    List<User> sampleUsers;

//prepare before the test
    @BeforeEach
    void setUp() {
        sampleUsers = Arrays.asList(
                new User().setEmail("lo6oJaki@gmail.com").setUsername("Lo6o Jaki").setPassword("13456789"),
                new User().setEmail("Jaki@gmail.com").setUsername("Jaki").setPassword("156789"),
                new User().setEmail("lo6o@gmail.com").setUsername("Laki").setPassword("134569"),
                new User().setEmail("loki@gmail.com").setUsername("6oki").setPassword("16789")
        );
    }


//clean after the tests
    @AfterEach void tearDown() {}

    @Test
    void getAllUsersWhenThereAreNone() {
        List<User> actual = userController.getAllUsers();
        assertEquals(new ArrayList<User>(), actual);
    }

    @Test
    void getAllUsersWhenThereAreSome() {
        Mockito.when(userRepository.findAll()).thenReturn(sampleUsers);
        List<User> actual = userController.getAllUsers();
        assertEquals(sampleUsers, actual);
    }

    @Test
    void addNewValidUser(){
        //when sb calls this user, it returns the same user - this is because of the mock repository
        User sampleUser = sampleUsers.get(0);

        Mockito.when(userRepository.save(sampleUser)).thenReturn(sampleUser);

        ResponseEntity<User> response = userController.addNewUser(sampleUser);

        assertEquals(sampleUser, response.getBody());
        assertEquals(HttpStatus.CREATED, response.getStatusCode());

        Mockito.verify(userRepository).save(sampleUser);
    }

    @Test
    void findUserByEmail(){
        User user = sampleUsers.get(0).setEmail("Something@spesific.mail");
        Mockito.when(userRepository.findByEmail("Something@spesific.mail")).thenReturn(Optional.of(user));
        ResponseEntity<User> actualUser=userController.getUserByEmail("Something@spesific.mail");
        assertEquals(user,actualUser.getBody());
        assertEquals(HttpStatus.OK, actualUser.getStatusCode());
        Mockito.verify(userRepository).findByEmail(user.getEmail());
    }
    @Test
    void userNotFound(){

        // make the scenario happen
        // mock the behaviour of the parts that you trust
        // make sure that your result is right

        Mockito.when(userRepository.findByEmail(Mockito.anyString())).thenReturn(Optional.empty());

        ResponseEntity<User> response = userController.getUserByEmail("any@mail.com");

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }
//    @Test
//    void updateExistingUser(){
//        User sampleUser = sampleUsers.get(0);
//        sampleUser = new User().setName("Joro").setEmail("kurtechnitsata@gmail.com").setPassword("345678");
//        ResponseEntity<User> actualUser=userController.updateUser(sampleUser.getEmail(), sampleUser);
//        Mockito.when(userRepository.save(sampleUser)).thenReturn(sampleUser); //expect a fetch, return a "fetched" person;
//        assertEquals(sampleUser, actualUser);
//        //Mockito.verify(userRepository).save(sampleUser);
//    }
//@Test void updateUser(){
//    User sampleUser = sampleUsers.get(0);
//    Mockito.when(userRepository.findByEmail(sampleUser.getEmail())).thenReturn(Optional.empty()); //expect a fetch, return a "fetched" person;
//    User updatedUser=sampleUser.setEmail("Pisna mi").setPassword(sampleUser.getPassword()).setName(sampleUser.getName());
//    ResponseEntity<User> actualUser=userController.updateUser("Pisna mi", updatedUser);
//    Mockito.when(userRepository.save(updatedUser)).thenReturn(updatedUser);
//    assertEquals(updatedUser, actualUser.getBody());
//    Mockito.verify(userRepository).save(updatedUser);
//}
        @Test void deleteActualUser(){
        User sampleUser = sampleUsers.get(0);
        Mockito.when(userRepository.findByEmail(sampleUser.getEmail())).thenReturn(Optional.empty()); //expect a fetch, return a "fetched" person;

        userRepository.delete(sampleUser);

        Mockito.verify(userRepository).delete(sampleUser);
    }
}
