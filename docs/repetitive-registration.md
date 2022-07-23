# Repetitive Registration

**Difficulty**: :star2:

**Description**: Follow the DRY principle while registering a user.

**Category**: Improper Input Validation

**Tags**: 

**Solution**:

DRY principle mean Dry Repeat Yourself, in the registration process you are usually required to re-enter password for confirmation. So the objective here is to bypass the repeat password checking

1. Go to http://localhost:3000/#/register and input all required information

![image](https://user-images.githubusercontent.com/63692190/180608532-6024bf75-1341-4e6f-8de1-2466b2328592.png)

2. If I change the content in field repeat password, the website does not allow me to register

![image](https://user-images.githubusercontent.com/63692190/180609025-effe41eb-3633-4df6-ad77-224290c33d45.png)

3. But if I change password field, no checking was performed and the register button is clickable

![image](https://user-images.githubusercontent.com/63692190/180609069-0ce13ab3-f0e2-4355-8892-212ccffe8640.png)

4. Result: Succeeded, It seems that no checking was done at server

![image](https://user-images.githubusercontent.com/63692190/180609295-6c3481fc-ec92-4c70-8360-3333f40937b6.png)
