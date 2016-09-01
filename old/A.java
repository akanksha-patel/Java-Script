class Account 
{
	
	private int bal=0;
	public static void main(String[] args) 
	{
		System.out.println("Hello World!");
	}

	synchronized void bal_sub()
	{
		while(true)
		{
			if(bal<=100)
				{
					System.out.println("i am going to wait");
					try
						{
							wait();
						}
					catch (InterruptedException e)
						{
						}
				}
			bal=bal-10;
			System.out.println("balance deducted by "+Thread.currentThread().getName());
			System.out.println("current balance : "+bal);
			System.out.println("************");
		}
	}

	synchronized void bal_add()
	{
		while(true)
		{
			
			bal=bal+10;
			System.out.println("bal added by "+Thread.currentThread().getName());
			System.out.println("current bal : "+bal);
			if(bal>100)
				{
					System.out.println("going to notify");
					notify();
					try
						{
							Thread.sleep(100);
						}
					catch (InterruptedException e)
						{
						}
				}
			System.out.println("---------------");
		}


	}


}

class X
{
	static Account acc=new Account();
	public static void main(String[] args)
	{
		Myr1 m1=new Myr1();
		Myr2 m2=new Myr2();
		Thread th1=new Thread(m1);
		Thread th2=new Thread(m2);
		th1.start();
		th2.start();
		th1.setPriority(10);
	}
}

class Myr1 implements Runnable
{
	public void run()
	{
		X.acc.bal_sub();
	}
}

class Myr2 implements Runnable
{
	public void run()
	{
		X.acc.bal_add();

	}
}