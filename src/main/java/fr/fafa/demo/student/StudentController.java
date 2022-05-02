package fr.fafa.demo.student;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/students")
public class StudentController {

  @GetMapping
  public List<Student> getAllStudents() {
    return List.of(
        new Student(UUID.randomUUID(), "Cyvian", "Him", "cycy@mail.com", Student.Gender.FEMALE),
        new Student(UUID.randomUUID(), "Chris", "Burckard", "chris@mail.com", Student.Gender.MALE));
  }
}
