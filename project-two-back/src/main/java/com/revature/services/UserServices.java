package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.revature.models.User;
import com.revature.repos.UserRepo;
import com.revature.repos.UserRepoImpl;

@Service
@Component
public class UserServices {
	
	private UserRepo userRepoImpl;
	
	@Autowired
	private UserServices( UserRepo userRepoImpl)
	{
		super();
		this.userRepoImpl = userRepoImpl;
	}
	
	public User findUserById(int id)
	{
		return this.userRepoImpl.findById(id);
	}
	
	public User findUserByName(String username)
	{
		return this.userRepoImpl.findByName(username);
	}
	public void addUser(User user) {
		userRepoImpl.insert(user);
	}
	
	public void updateUser(User user) {
		userRepoImpl.update(user);
	}

	public void setUserRepoImpl(UserRepoImpl userRepoImpl) {
		this.userRepoImpl = userRepoImpl;
	}
}
