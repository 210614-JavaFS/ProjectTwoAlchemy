package com.revature.repos;

import java.util.List;

import com.revature.models.Friend;

public interface FriendRepo {
	List<Friend> findAllFriends();
	List<Friend> FindFriendsByUserId(int userId);
}
