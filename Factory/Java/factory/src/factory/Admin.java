package factory;

public class Admin implements User{
	
	public static boolean isValid(String name,String password) {
		return name.equals("Admin") && password.equals("1234");
	}

	@Override
	public String getInfo() {
		// TODO Auto-generated method stub
		return "I am a Admin";
	}
}
