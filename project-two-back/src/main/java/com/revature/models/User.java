package com.revature.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;

@Component
@Entity
@Scope("prototype")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(unique=true)
	@NotNull
	private String username;
	@NotNull
	private String password;
	@JsonProperty("games")
	private int gamesWon;
	@JsonProperty("gamesPlayed")
	private int gamesPlayed;
	
	@OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
	@JsonManagedReference
	private List<Friend> friendList;
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public List<Friend> GetFriends()
	{
		return friendList;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getGamesWon() {
		return gamesWon;
	}
	public void setGamesWon(int gamesWon) {
		this.gamesWon = gamesWon;
	}
	public int getGamesPlayed() {
		return gamesPlayed;
	}
	public void setGamesPlayed(int gamesPlayed) {
		this.gamesPlayed = gamesPlayed;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((friendList == null) ? 0 : friendList.hashCode());
		result = prime * result + gamesPlayed;
		result = prime * result + gamesWon;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + id;
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (friendList == null) {
			if (other.friendList != null)
				return false;
		} else if (!friendList.equals(other.friendList))
			return false;
		if (gamesPlayed != other.gamesPlayed)
			return false;
		if (gamesWon != other.gamesWon)
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (id != other.id)
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", gamesWon=" + gamesWon
				+ ", gamesPlayed=" + gamesPlayed + ", friendList=" + friendList + "]";
	}
	
	
}
