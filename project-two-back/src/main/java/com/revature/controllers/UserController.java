package com.revature.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserServices;

@RestController
@RequestMapping(value="/user")
@CrossOrigin
public class UserController {
	private UserServices userService;
	
	@Autowired
	public UserController(UserServices userService)
	{
		super();
		this.userService = userService;
	}
	
	@PostMapping
	public  ResponseEntity<String> userLogin(@RequestParam("username")  String username, @RequestParam("password") String password)
	{
		User user = userService.findUserByName(username);
		
		if (user != null)
		{
			if (user.getPassword().equals(password))
			{
				HashMap<String,String> test = new HashMap<String,String>();
				test.put("username", username);
				return ResponseEntity.ok(test.toString());
			}
		} 
		
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

	}
	


}
