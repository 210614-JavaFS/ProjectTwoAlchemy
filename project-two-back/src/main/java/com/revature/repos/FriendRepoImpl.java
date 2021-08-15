package com.revature.repos;

import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.models.Friend;

@Repository
@Transactional
public class FriendRepoImpl implements FriendRepo {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Friend> findAllFriends() {
		Session session = sessionFactory.getCurrentSession();
		
		return null;
	}

	@Override
	public List<Friend> FindFriendsByUserId(int userId) {
		Session session = sessionFactory.getCurrentSession();
		
		Query query = session.createQuery("from friends where userId = ?1");
		query.setParameter(1,userId);
		
		List<Friend> foundFriends=  query.getResultList();
		
		return foundFriends;
	}

}
