package com.example.accessingdatamysql.Controllers;


import com.example.accessingdatamysql.modelsTemp.Greeting;
import com.example.accessingdatamysql.modelsTemp.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
        import org.springframework.messaging.handler.annotation.SendTo;
        import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.util.HtmlUtils;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class GreetingController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }

}