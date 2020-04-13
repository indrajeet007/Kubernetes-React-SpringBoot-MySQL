package com.indrajit.springboot.restful.product;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Map;

@RestController
@RequestMapping("/listenvs")
public class EnvDetails {

    @CrossOrigin(origins = "http://192.168.64.10:30978, http://localhost:3000")
    @GetMapping
    public ResponseEntity<?> getAllEnvs() {

        Map<String, String> envs = System.getenv();

        return new ResponseEntity(Arrays.asList(envs), HttpStatus.OK);
    }
}
