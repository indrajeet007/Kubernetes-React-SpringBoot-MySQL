package com.indrajit.springboot.restful.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Controller
public class ProductController {

    @CrossOrigin(origins = "http://192.168.64.10:30978, http://localhost:3000")
    @GetMapping("/")
    public String list(){
        return "products";
    }
}
