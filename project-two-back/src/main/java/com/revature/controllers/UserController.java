package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserServices;

@RestController
@RequestMapping(value = "/login")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	private UserServices services;

	@Autowired
	public UserController(UserServices services) {
		super();
		this.services = services;
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getAllUser() {
		return services.getAllUser();
	}

	@PostMapping("/{id}")
	public ResponseEntity<User> getUserById(@PathVariable int id) {
		User user = services.getUserById(id);
		if (user == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@PostMapping
	public ResponseEntity<User> addUser(@RequestBody User user) {
		services.AddUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	public ResponseEntity<User> updateUser(@RequestBody User user) {
		services.updateUser(user);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}

}
