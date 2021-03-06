package fr.fafa.demo.student;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDataAccessService {

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public List<Student> selectAllStudents() {
    String sql = "SELECT student_id, first_name, last_name, email, gender FROM student";
    return jdbcTemplate.query(sql, mapStudentFromDb());
  }

  private RowMapper<Student> mapStudentFromDb() {
    return (resultSet, i) -> {
      String studentIdstr = resultSet.getString("student_id");
      UUID studentId = UUID.fromString(studentIdstr);
      String firstName = resultSet.getString("first_name");
      String lastName = resultSet.getString("last_name");
      String email = resultSet.getString("email");
      String genderStr = resultSet.getString("gender");
      Student.Gender gender = Student.Gender.valueOf(genderStr.toUpperCase());
      return new Student(studentId, firstName, lastName, email, gender);
    };
  }

  public int insertStudent(UUID newStudentId, Student student) {
    String sql = "INSERT INTO student (student_id, first_name, last_name, email, gender) " +
        "VALUES (?, ?, ?, ?, ? )";
    return jdbcTemplate.update(sql, newStudentId, student.getFirstName(), student.getLastName(), student.getEmail(),
        student.getGender().name().toUpperCase());
  }
}
