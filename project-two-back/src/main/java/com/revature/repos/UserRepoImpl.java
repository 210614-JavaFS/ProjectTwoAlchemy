package com.revature.repos;

import java.util.List;
import java.util.Optional;

import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository
@Transactional
public class UserRepoImpl implements UserRepo 
{
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public User findById(int id) {
		Session session = sessionFactory.getCurrentSession();
		
		return session.get(User.class,id);
	}
	
	@Override
	public List<User> findAll() {
		return null ;
	}


	@Override
	public void insert(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);
	}

	@Override
	public void delete(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.merge(user);
	}

	@Override
	public void update(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.update(user);
		
	}

	@Override
	public User findByName(String username) {
		Session session = sessionFactory.getCurrentSession();
		User returnUser = null;
		
		Query query = session.createQuery("from User where username = ?1");
		query.setParameter(1,username);
		
		List<User> foundUsers =  query.getResultList();
		
		if (foundUsers.size() > 0)
		{
			returnUser = foundUsers.get(0);
		}
	
		return returnUser;
	}

	@Override
	public User ByName(String string) {
	
		return null;
	}

}
