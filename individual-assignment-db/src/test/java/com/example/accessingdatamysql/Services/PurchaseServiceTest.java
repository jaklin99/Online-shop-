package com.example.accessingdatamysql.Services;

import com.example.accessingdatamysql.Repository.PurchaseRepository;
import com.example.accessingdatamysql.modelsTemp.Purchase;
import com.example.accessingdatamysql.modelsTemp.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PurchaseServiceTest {

    @Mock
    PurchaseRepository purchaseRepository;
    @InjectMocks
    PurchaseService purchaseService;

    @BeforeEach
    void setUp() {
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findAll() {
        List<Purchase> purchasesCreate=new ArrayList<>();
        when(purchaseRepository.findAll()).thenReturn(purchasesCreate);
        List<Purchase> created = purchaseService.findAll();
        assertThat(purchasesCreate).isSameAs(created);
    }

    @Test
    void findById() {
    }

    @Test
    void save() {
        Purchase pCreate=new Purchase();
        pCreate.setId((long) 1);
        when(purchaseRepository.save(any(Purchase.class))).thenReturn(new Purchase());
        Purchase created = purchaseService.save(pCreate);
        assertThat(created.getId()).isSameAs(pCreate.getId());
    }
}