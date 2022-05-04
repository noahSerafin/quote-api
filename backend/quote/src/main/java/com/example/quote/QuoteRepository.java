package com.example.quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteRepository extends JpaRepository<Quote, String> {
    Quote findQuoteByid(int id);
    String deleteQuoteByid(int id);
}
