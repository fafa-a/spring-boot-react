package fr.fafa.demo.student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @RequestMapping("/api")
public class StudentController {

  private final StudentService studentService;

  @Autowired
  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @GetMapping("/students")
  public List<Student> getAllStudents() {
    return studentService.getAllStudents();
  }

  @PostMapping("/students")
  public void addNewStudent(@RequestBody Student student) {
    System.out.println(student);
  }
}
