package com.khk.backjoonrecommender.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class TriedProblem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
	private User user;

	@ManyToOne(targetEntity = Problem.class, fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private Problem problem;

	@Enumerated(EnumType.STRING)
	private SolveType isSolved;
	private LocalDateTime solvedDate;
	private LocalDate recommendedDate;

	public boolean solved() {
		return this.isSolved.equals(SolveType.PASS);
	}

	public void updateSolvedStatus(SolveType solveType) {
		this.isSolved = solveType;
	}
}
