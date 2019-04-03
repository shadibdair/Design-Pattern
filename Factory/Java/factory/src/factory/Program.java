package factory;

public class Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String[] names= {"Cashier","Bob","Client","Admin"};

		for(String name:names) {
			User user=UserFactory.login(name, "1234");
			if(user==null) {
				System.out.println(name + " " + "is not valid");
			}
			else {
				System.out.println(name + " " +user.getInfo());
			}
		}
	}

}
