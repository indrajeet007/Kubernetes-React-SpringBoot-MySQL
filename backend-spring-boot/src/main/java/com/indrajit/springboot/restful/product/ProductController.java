package com.indrajit.springboot.restful.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Controller
public class ProductController {

    @GetMapping("/")
    public String list(){
        return "products";
    }
}
