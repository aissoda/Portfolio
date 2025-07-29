package PaymentApp.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {
    @GetMapping("/api/greeting")
    public Map<String, String> getGreeting() {
        return Map.of("message", "Hello from the API!");
    }
    
    @GetMapping("/main")
    public String showMainView() {
        return "Mainview"; 
    }
}
