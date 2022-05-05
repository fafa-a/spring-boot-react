package fr.fafa.demo.student;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class StudentService {

  private final StudentDataAccessService studentDataAccessService;

  public StudentService(StudentDataAccessService studentDataAccessService) {
    this.studentDataAccessService = studentDataAccessService;
  }

  public List<Student> getAllStudents() {
    return studentDataAccessService.selectAllStudents();
  }

  public void addNewStudent(Student student) {
    addNewStudent(null, student);
  }



  public void addNewStudent(UUID studentId, Student student) {
    UUID newStudentId = Optional.ofNullable(studentId).orElse(UUID.randomUUID());
    studentDataAccessService.insertStudent(newStudentId, student);
  }
}
