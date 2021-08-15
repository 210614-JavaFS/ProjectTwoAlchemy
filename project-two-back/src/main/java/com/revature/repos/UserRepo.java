package com.revature.repos;

import java.util.List;


import com.revature.models.User;

public interface UserRepo{
	public User findById(int id);
	public List<User> findAll();
	public void insert(User user);
	public void delete(User user);
	public void update(User user);
	
	public User findByName(String string);
	public User ByName(String string);
}
