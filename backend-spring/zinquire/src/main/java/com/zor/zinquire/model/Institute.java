package com.zor.zinquire.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "_offeredby")
public class Institute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long oid;
    private String offerer_name;
    @OneToMany(mappedBy = "institute")
    private List<Course> course;


}
