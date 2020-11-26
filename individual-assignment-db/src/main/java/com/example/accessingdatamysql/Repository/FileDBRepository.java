package com.example.accessingdatamysql.Repository;


import com.example.accessingdatamysql.modelsTemp.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}