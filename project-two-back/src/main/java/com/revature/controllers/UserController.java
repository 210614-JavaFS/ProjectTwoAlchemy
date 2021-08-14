package com.revature.controllers;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserServices;

@RestController
@CrossOrigin
public class UserController {
	private UserServices userService;
	
	@Autowired
	public UserController(UserServices userService)
	{
		super();
		this.userService = userService;
	}
	
	@RequestMapping(value="/", consumes = { MediaType.APPLICATION_JSON_VALUE})
	@GetMapping
	public ResponseEntity<Object> index()
	{
		HashMap<String,Object> returnedData = new HashMap<String,Object>();
		returnedData.put("success", "it works~");
		
		return new ResponseEntity<Object>(returnedData,HttpStatus.OK);
	}
	
	
	
	@RequestMapping(value="/updateWins", consumes = {MediaType.APPLICATION_JSON_VALUE})
	@PostMapping
	public ResponseEntity<Object> updateWins(@RequestBody User updatedInfo)
	{
		int userId =  updatedInfo.getId();
		int gamesWon =   updatedInfo.getGamesWon();
		
		User user =  userService.findUserById(userId);
		HashMap<String,Object> returnedData = new HashMap<String,Object>();
		
		if (user != null)
		{
			user.setGamesWon(gamesWon);
			userService.update(user);
			returnedData.put("success", "true");
		} else {
			returnedData.put("error", "User not found");
		}
		return new ResponseEntity<Object>(returnedData,HttpStatus.OK);
	}
	
	@RequestMapping(value="/doLogin", consumes = {MediaType.APPLICATION_JSON_VALUE})
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
				returnedData.put("games_won",  user.getGamesWon());
				returnedData.put("games_played", user.getGamesPlayed());
				returnedData.put("friends", user.GetFriends());
			} 
		} 
		
		if (success == false)
		{
			returnedData.put("error", "Login is incorrect");
		}
		
		return  new ResponseEntity<Object>(returnedData,HttpStatus.OK);
	}
	
	
	
}
