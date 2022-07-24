# Admin Registration

**Difficulty**: :star2::sctar2::star2:

**Description**: Register as a user with administrator privileges.

**Category**: Improper Input Validation

**Tags**: 

**Solution**:

<!-- Please include screenshots for each step. Remember that the screenshot includes a clock to indicate the time solved. -->
First, I create a normal account

![image](https://user-images.githubusercontent.com/63692190/180629616-0296bc36-1783-4930-bd27-3af0a823693a.png)

Inspecting a valid registration request show me that privileges system may be managed via a `role` value

![image](https://user-images.githubusercontent.com/63692190/180629755-bfcc33db-d9c8-4635-9c27-d6a5bb346ce4.png)

So I decided to forge a registration request with `role` admin

![image](https://user-images.githubusercontent.com/63692190/180629885-8e709e02-9957-4659-ba6a-09023769f9aa.png)

And the challenge is solved

![image](https://user-images.githubusercontent.com/63692190/180629903-62b0a17c-5425-4438-a292-fd8de9c1cc22.png)

