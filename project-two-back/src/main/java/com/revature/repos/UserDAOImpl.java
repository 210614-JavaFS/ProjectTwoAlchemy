package com.revature.repos;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;

import com.revature.models.User;

@Repository
@Transactional
public class UserDAOImpl implements UserDAO {
	private SessionFactory sessionFactory;

	@Autowired
	public UserDAOImpl(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List<User> getAllUser() {
		Session session = sessionFactory.getCurrentSession();
		return session.createQuery("FROM USER").list();
	}

	@Override
	public User getUserById(@PathVariable int id) {
		Session session = sessionFactory.getCurrentSession();
		return session.get(User.class, id);
	}

	@Override
	public void addUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);

	}

	@Override
	public void update(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.update(user);

	}

	@Override
	public User getUserbyUsername(@PathVariable String username) {
		Session session = sessionFactory.getCurrentSession();
		return session.get(User.class, username);
	}

}
