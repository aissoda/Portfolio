package com.arhnstech.administrate;

import org.springframework.boot.SpringApplication;

public class TestAdministrateApplication {

    public static void main(String[] args) {
        SpringApplication.from(AdministrateApplication::main).with(TestcontainersConfiguration.class).run(args);
    }

}
