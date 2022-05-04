package com.example.quote;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String president;
    private String quote;
    private int date;

    public Quote() { this.date = 010100; }

    public Quote(int id, String president, String quote, int date) {
        this.id = id;
        this.president = president;
        this.quote = quote;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public String getPresident() {
        return president;
    }

    public String getQuote() {
        return quote;
    }

    public int getDate() {
        return date;
    }

}
