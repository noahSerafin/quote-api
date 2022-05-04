package com.example.quote;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;

import java.util.List;
@RestController
//g@CrossOrigin(origins = "http://localhost:3000")
public class QuoteController {
    @Autowired
    QuoteRepository repository;

    ArrayList<Quote> quotes = new ArrayList<Quote>();

    @GetMapping("/quotes")
        public ResponseEntity<List<Quote>> getQuotes(){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());
    }

    @GetMapping("/quote/{id}")
    public ResponseEntity<Quote> getQuoteById(@PathVariable String id){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findQuoteByid(Integer.parseInt(id)));
    }

    @PostMapping("/quote")
    public ResponseEntity<String> createQuote(@RequestBody Quote quote) {
        repository.save(quote);
        return ResponseEntity.status(HttpStatus.OK).body("quote added" + quote);
    }

    @GetMapping("/random")
    public ResponseEntity<Quote> getRandomGreeting(){
        List<Quote> quotes = repository.findAll();
        int randomNum = (int) Math.floor(Math.random() * quotes.size());
        return ResponseEntity.status(HttpStatus.OK).body(quotes.get(randomNum));
    }

    @DeleteMapping("/quote/{id}")
    @Transactional
    public ResponseEntity<String> deleteQuoteById(@PathVariable String id) {
        repository.deleteQuoteByid(Integer.parseInt(id));
        return ResponseEntity.status(HttpStatus.OK).body("Quote with ID " + id + "has been deleted");
    }
}
