package com.sam.fullstack.repository;

import com.sam.fullstack.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}