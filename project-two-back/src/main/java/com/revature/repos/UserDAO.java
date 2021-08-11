package com.revature.repos;

import java.util.List;

import com.revature.models.User;

public interface UserDAO {

	public List<User> getAllUser();

	public User getUserById(int id);

	public void addUser(User user);

	public void update(User user);

	public User getUserbyUsername(String username);

}
