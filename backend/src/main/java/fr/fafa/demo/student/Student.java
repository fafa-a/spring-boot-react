package fr.fafa.demo.student;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Student {

  @JsonProperty("studentID")
  private final UUID studentID;
  @JsonProperty("firstName")
  private final String firstName;
  @JsonProperty("lastName")
  private final String lastName;
  @JsonProperty("email")
  private final String email;
  @JsonProperty("gender")
  private final Gender gender;

  public enum Gender {
    MALE, FEMALE
  }

}
