package com.example.accessingdatamysql.Repository;

import java.util.Optional;

import com.example.accessingdatamysql.modelsTemp.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserAuthRepository extends JpaRepository<UserAuth, Long> {
    Optional<UserAuth> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}