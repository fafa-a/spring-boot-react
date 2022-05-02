package fr.fafa.demo.student;

import java.util.UUID;

import lombok.Data;

@Data
public class Student {
  private final UUID studentID;
  private final String firstName;
  private final String lastName;
  private final String email;
  private final Gender gender;

  public enum Gender {
    MALE, FEMALE
  }
}
