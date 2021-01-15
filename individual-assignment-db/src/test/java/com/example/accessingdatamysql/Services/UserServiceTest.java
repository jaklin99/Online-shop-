package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.UserRepository;
import com.example.accessingdatamysql.modelsTemp.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

//@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findByEmail() {
        final String email= "jakitoo99@gmail.com";
        final  User user =new User("jak", "jak", "str", "01234567", "jakitoo99@gmail.com", "jakito");
        given(userRepository.findByEmail(email)).willReturn(Optional.of(user));
        final Optional<User> expected = userService.findByEmail(email);
        assertThat(expected).isNotNull();
    }

    @Test
    void existsByEmail() {
//
//        final String email= "jakitoo99@gmail.com";
//        final  User user =new User("jak", "jak", "str", "01234567", "jakitoo99@gmail.com", "jakito");
//        when(userRepository.existsByEmail(email)).thenReturn(true);
//        final Optional<User> expected = userService.findByEmail(email);
//        assertThat(expected).isNotNull();
    }

    @Test
    void existsById() {
    }

//    @Test
//    void deleteByEmail() {
//        final String email= "jakitoo99@gmail.com";
//        final  User user =new User("jak", "jak", "str", "01234567", "jakitoo99@gmail.com", "jakito");
//        when(userRepository.deleteByEmail(email)).willReturn(Optional.of(user));
//        final Optional<User> expected = userService.findByEmail(email);
//        assertThat(expected).isNotNull();
//    }

    @Test
    void findAll() {
        List<User> usersCreate=new ArrayList<>();
        when(userRepository.findAll()).thenReturn(usersCreate);
        List<User> created = userService.findAll();
        assertThat(usersCreate).isSameAs(created);

    }

//    @Test
//    void deleteAll() {
//        List<User> usersCreate=new ArrayList<>();
//        when(userRepository.findAll()).thenReturn(null);
//        List<User> created = userService.findAll();
//        userService.deleteAll();
//        Mockito.verify(userRepository).deleteAll(created);
//    }

    @Test
    void save() {
        User userCreate=new User();
        userCreate.setName("dfgyui");
        when(userRepository.save(any(User.class))).thenReturn(new User());
        User created = userService.save(userCreate);
        assertThat(created.getName()).isSameAs(userCreate.getName());
    }

    @Test
    void getOne() {
    }
}