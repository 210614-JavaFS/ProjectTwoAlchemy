package com.revature.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.jasypt.util.password.StrongPasswordEncryptor;

import com.revature.models.Friend;
import com.revature.models.User;
import com.revature.services.UserServices;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	private UserServices userService;
	private static Logger log = LoggerFactory.getLogger(UserController.class);
	@Autowired
	public UserController(UserServices userService)
	{
		super();
		this.userService = userService;
	}
	
	
	@RequestMapping(value="/users", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin(origins = "*")
	public ResponseEntity<User> addUser(@RequestBody User user){
		//@RequestBody is parsing the request's body into an object with Jackson. 
		user.setGamesWon(0);
		user.setGamesPlayed(0);
		StrongPasswordEncryptor encryptor = new StrongPasswordEncryptor();
		String password = encryptor.encryptPassword(user.getPassword());
		user.setPassword(password);
		userService.addUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
		//ResponseEntity wraps the object we are returning and allows to set metadata like a response code.
	}
	
	@PutMapping("/users")
	@CrossOrigin(origins = "*")
	public ResponseEntity<User> updateUser(@RequestBody User userToUpdate){
		//@RequestBody is parsing the request's body into an object with Jackson. 
		User user = userService.findUserById(userToUpdate.getId());
		
		System.out.println(userToUpdate);
		log.debug(userToUpdate.toString());
		System.out.println(user);
		log.debug(user.toString());
		user.setGamesPlayed(userToUpdate.getGamesPlayed());
		user.setGamesWon(userToUpdate.getGamesWon());
		userService.update(user);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
		//ResponseEntity wraps the object we are returning and allows to set metadata like a response code.
	}	

	
	@RequestMapping(value="/", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
	@CrossOrigin(origins = "*")
	public  ResponseEntity<Object> userLogin(@RequestBody User loginUserInfo)
	{
		StrongPasswordEncryptor encryptor = new StrongPasswordEncryptor();
		// NOTES(): I don't know if this a good idea security wise, but it's much easier.
		boolean success = false;
		HashMap<String,Object> returnedData = new HashMap<String,Object>();
		User user = userService.findUserByName(loginUserInfo.getUsername());
		
		if (user != null)
		{
			if (encryptor.checkPassword(loginUserInfo.getPassword(), user.getPassword()))
			{
				success = true;
				returnedData.put("id",  user.getId());
				returnedData.put("username",  user.getUsername());
				returnedData.put("gamesWon",  user.getGamesWon());
				returnedData.put("gamesPlayed", user.getGamesPlayed());
				
				List<Friend> userFriends = user.GetFriends();
				List<HashMap<String, Object>> userFriendInfo = new ArrayList<HashMap<String, Object>>();
				/*
				 * TODO(): Make a SQL version of this for max optimization!!!
				 */
				for (int userFriendsIndex = 0; userFriendsIndex < userFriends.size(); userFriendsIndex++)
				{
					Friend myFriend = userFriends.get(userFriendsIndex);
					User friendUser = userService.findUserById(myFriend.getFuid());
					HashMap<String, Object> friendsInfo  = new HashMap<String, Object>();
					friendsInfo.put("id", friendUser.getId());
					friendsInfo.put("username", friendUser.getUsername());
					friendsInfo.put("gamesWons", friendUser.getGamesWon());
					friendsInfo.put("gamesPlayed", friendUser.getGamesPlayed());
					
					userFriendInfo.add(friendsInfo);
				}
				returnedData.put("friends", userFriendInfo);
			} 
		} 
		
		if (success == false)
		{
			returnedData.put("error", "Login is incorrect");
		}
		log.debug(returnedData.toString());
		System.out.println(returnedData);
		return  new ResponseEntity<Object>(returnedData,HttpStatus.OK);
	}
}
