package com.revature.controllers;

import java.util.HashMap;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserServices;

@RestController
@RequestMapping(value="/login")
@CrossOrigin
public class UserController {
	private UserServices userService;
	

	
	@Autowired
	public UserController(UserServices userService)
	{
		super();
		this.userService = userService;
	}
	
	@RequestMapping(consumes = {MediaType.APPLICATION_JSON_VALUE})
	@PostMapping
	public  ResponseEntity<Object> userLogin(@RequestBody User loginUserInfo)
	{
		// NOTES(): I don't know if this a good idea security wise, but it's much easier.
		boolean success = false;
		HashMap<String,Object> returnedData = new HashMap<String,Object>();
		User user = userService.findUserByName(loginUserInfo.getUsername());
		
		if (user != null)
		{
			if (user.getPassword().equals(loginUserInfo.getPassword()))
			{
				// TODO(): This should also return list of friends!
				success = true;
				returnedData.put("id",  user.getId());
				returnedData.put("username", user.getUsername());
				returnedData.put("friends", user.GetFriends());
				returnedData.put("wins", user.getWins());
				returnedData.put("losses", user.getLosses());
			} 
		} 
		
		if (success == false)
		{
			returnedData.put("error", "Login is incorrect");
		}
		
		return  new ResponseEntity<Object>(returnedData,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<User> addUser(@RequestBody User user){
		//@RequestBody is parsing the request's body into an object with Jackson. 
		user.setWins(0);
		user.setLosses(0);
		userService.addUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).build();
		//ResponseEntity wraps the object we are returning and allows to set metadata like a response code.
	}
	@PutMapping("/add")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		//@RequestBody is parsing the request's body into an object with Jackson. 
		userService.updateUser(user);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
		//ResponseEntity wraps the object we are returning and allows to set metadata like a response code.
	}
	
}
