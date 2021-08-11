package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.User;
import com.revature.repos.UserDAO;

@Service
public class UserServices {

	private UserDAO userDAO;

	@Autowired
	public UserServices(UserDAO userDAO) {
		super();
		this.userDAO = userDAO;
	}

	public List<User> getAllUser() {
		return userDAO.getAllUser();
	}

	public User getUserById(int id) {
		return userDAO.getUserById(id);
	}

	public void AddUser(User user) {
		userDAO.addUser(user);
	}

	public void updateUser(User user) {
		userDAO.update(user);
	}
}
