package com.revature.services;


import com.revature.models.User;
import com.revature.repos.UserRepo;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.ContextConfiguration;


@ExtendWith(SpringExtension.class)
@ContextConfiguration(locations="file:src/main/webapp/WEB-INF/applicationContext.xml")
public class UserServicesTest {
	private UserRepo userRepoImpl;
	UserServices userServices = new UserServices(userRepoImpl);
	@Test
	public boolean testUserCRUD()
	{
		boolean returnValue = false;
		int testId = 12345;
		User testUser = userServices.findUserById(testId);
		if(testUser.getUsername().length() < 1)
		{
			testUser = new User();
		
			userServices.addUser(testUser);
			User resultUser = userServices.findUserById(testId);
			if(resultUser.getUsername().length() < 1)
			{
				System.out.println("Add User Failed");
			}
			
			testUser.setPassword("passwordupdated");
			userServices.update(testUser);
			if(!resultUser.getPassword().equals("passwordupdated"))
			{
				System.out.println("Update User Failed");
			}
			

			userServices.delete(testUser);
			if(testUser.getUsername().length() < 1)
			{
				returnValue = true;
			}
			else
			{
				System.out.println("Delete User Failed");
				returnValue = false;
			}
			returnValue = false;
		}else
		{
			System.out.println("test Id already existed, test not conducted.");
			returnValue = false;
		}
		System.out.println("User Crud test successful");
		assertEquals(returnValue , true);
		return returnValue;
	}
	

	
}
