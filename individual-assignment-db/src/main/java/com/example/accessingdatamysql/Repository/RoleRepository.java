package com.example.accessingdatamysql.Repository;
import java.util.Optional;

import com.example.accessingdatamysql.modelsTemp.ERole;
import com.example.accessingdatamysql.modelsTemp.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}