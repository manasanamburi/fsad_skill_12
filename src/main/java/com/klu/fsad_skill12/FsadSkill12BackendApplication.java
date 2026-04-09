package com.klu.fsad_skill12;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.klu.fsad_skill12.entity.Student;
import com.klu.fsad_skill12.repository.StudentRepository;

@SpringBootApplication
public class FsadSkill12BackendApplication implements CommandLineRunner {

    @Autowired
    private StudentRepository repo;

    public static void main(String[] args) {
        SpringApplication.run(FsadSkill12BackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        // Insert only if table is empty (avoid duplicates)
        if (repo.count() == 0) {

            Student s1 = new Student();
            s1.setName("Manasa");
            s1.setEmail("manasa@gmail.com");
            s1.setCourse("FSAD");

            Student s2 = new Student();
            s2.setName("Ravi");
            s2.setEmail("ravi@gmail.com");
            s2.setCourse("Java");

            repo.save(s1);
            repo.save(s2);

            System.out.println("Data Inserted Successfully!");
        } else {
            System.out.println("Data already exists, skipping insert.");
        }
    }
}