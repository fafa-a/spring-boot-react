package fr.fafa.demo.student;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

  public List<Student> getAllStudents() {
    return List.of(
        new Student(UUID.randomUUID(), "Cyvian", "Him", "cycy@mail.com", Student.Gender.FEMALE),
        new Student(UUID.randomUUID(), "Chris", "Burckard", "chris@mail.com", Student.Gender.MALE));
  }
}
