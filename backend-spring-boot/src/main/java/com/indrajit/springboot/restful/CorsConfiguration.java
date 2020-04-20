package com.indrajit.springboot.restful;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/v1//**")
                        .allowedMethods("GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE")
//                        .allowedOrigins(
//                                "http://172.17.0.2:30535",
//                                "http://192.168.64.10:30978",
//                                "http://localhost:30535"
//                        );
                        .allowedOrigins("*");
                

                registry.addMapping("/listenvs")
                        .allowedMethods("GET", "OPTIONS")
//                        .allowedOrigins(
//                                "http://172.17.0.2:30535",
//                                "http://192.168.64.10:30978",
//                                "http://localhost:30535"
//                        );
                        .allowedOrigins("*");
            }
        };
    }
}
